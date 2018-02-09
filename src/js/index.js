
// baseURL(基础路径，基于基础路径的模块不需要后缀名)
//     1、默认html所在的目录，就是路径是相对于html所在的路径而言
//     2、加了data-main：主模块所在的目录，也就是当前的这个文件就是主模块，其他js文件就是相对于它而言的
    
    //require.config()：配置参数
    //      paths
    //      shim


// api:
//     require(dependencies,callback)
//         dependencies:依赖的模块（文件）
//         callback：回调函数，依赖模块加载完成后执行
//         define():定义模块


require.config({

    paths:{
        'jquery':'../lib/jquery-3.2.1'
    },


})  

    require(['jquery','common'],function(){


        /*---------------导航轮播图部分-------------------- */



            jQuery(function(){

                var bnr = document.querySelector('.banner_c');

                var ul = bnr.querySelector('ul');

                //无缝滚动
                //复制第一张到最后一张
                ul.appendChild(ul.children[0].cloneNode(true));

                var len = ul.children.length;
                var index = 0;
                var imgWidth = bnr.clientWidth;


                //生成页码
                var page = document.createElement('div');
                page.classList.add('page');

                for(var i=1;i<len;i++){
                    var span = document.createElement('span');
                    //也可以在这里生成页码，那就是直接 span.innerText = i;
                    span.innerText = i;
                    page.appendChild(span);

                    if(i == index +1){
                        span.classList.add('active');
                    }
                }
                //把page写入页面
                bnr.appendChild(page);

                //添加左右按钮
                var btnNext = document.createElement('span');
                btnNext.className = 'next';
                btnNext.innerHTML = '&gt';
                var btnPrev = document.createElement('span');
                btnPrev.className = 'prev';
                btnPrev.innerHTML = '&lt';

                //插入页面
                bnr.appendChild(btnNext);
                bnr.appendChild(btnPrev);


                ul.style.width = imgWidth * len +'px';

                var timer = setInterval(autoPlay,3000)


                //给左右按钮绑定点击事件
                bnr.addEventListener('click',function(e){
                    if(e.target.className == 'next'){
                        index++;
                        if(index<0){
                            index=len-1;
                        }
                        show();
                    }else if(e.target.className == 'prev'){
                        index--;
                        show();
                    }
                })

                //鼠标移入移除
                bnr.addEventListener('mouseenter',function(){
                    clearInterval(timer); //这是事件监听的写法
                })

                bnr.onmouseleave = function(){
                    timer = setInterval(autoPlay,3000); //这是原始写法
                }

                bnr.addEventListener('click',function(e){
                    if(e.target.parentNode.classList.contains('page')){
                        index = e.target.innerText-1;

                        show();
                    }
                })

                // 把重复部分封装成函数
                function autoPlay(){

                    index++;
                    if(index>=len){
                        //当滚动到复制那张图片时，瞬间重置回初始状态，，也就是当index值等于或大于li的长度的时候就让它重回到第一张，，直接改变ul的left值就行了,并且下面的index值也要从开始的0改成为1，因为第一张已经在前面跑过了
                        ul.style.left = 0;
                        index = 1;  
                    }
                    var target = -imgWidth*index; //移动的目标值
                    animate(ul,{left:target});

                    //高亮页码
                    //高亮前先清除
                    page.querySelector('.active').classList.remove('active');
                    if(index < len-1){
                        page.children[index].className = 'active';
                    }else{
                        page.children[0].className = 'active';
                    }

                }

                function show(){

                    if(index>=len){
                        //当滚动到复制那张图片时，瞬间重置回初始状态，，也就是当index值等于或大于li的长度的时候就让它重回到第一张，，直接改变ul的left值就行了,并且下面的index值也要从开始的0改成为1，因为第一张已经在前面跑过了
                        ul.style.left = 0;
                        index = 1;  
                    }
                    var target = -imgWidth*index; //移动的目标值
                    animate(ul,{left:target});

                    //高亮页码
                    //高亮前先清除
                    page.querySelector('.active').classList.remove('active');
                    if(index < len-1){
                        page.children[index].className = 'active';
                    }else{
                        page.children[0].className = 'active';
                    }
                }


            });

            





            /*-------------------倒计时部分-----------------------*/

            (function(){

                var countDown = document.querySelectorAll('.countDown');

                //设置活动结束时间
                var end = Date.parse('2018-2-30 12:00:00');

                showTime();

                var timer = setInterval(showTime,1000);

                function showTime(){
                    var now = Date.now();  //获取当前时间

                    var offset = Math.floor((end - now)/1000);  //计算差值
                    console.log(offset);

                    if(offset<=0){
                        clearInterval(timer); //清除定时器

                        countDown.style.display = 'none';
                    }

                    var sec = offset%60;
                    var min = Math.floor(offset/60)%60;
                    var hour = Math.floor(offset/60/60)%24;
                    var day = Math.floor(offset/60/60/24);

                    sec = sec<10? '0'+sec : sec;
                    min = min<10? '0'+min : min;
                    hour = hour<10? '0'+hour : hour;
                    day = day<10? '0'+day : day;

                    for(var i=0;i<countDown.length;i++){
                        countDown[i].innerText = '剩余 ' + day + '天 ' + hour + '时 ' + min +'分 ' + sec + '秒';
                    }
                    

                }

            })();

            
            





            /*-----------------生成商品列表结构--------------------*/
            (function(){

                var arr_status = [200,304];
                var goodlist = document.querySelector('#goodlist');

                //ajax请求
                var xhr = new XMLHttpRequest();
                
                xhr.onreadystatechange = function(){
                    console.log(xhr.readyState);

                    if(xhr.readyState === 4 && arr_status.indexOf(xhr.status)>=0){
                       var res = JSON.parse(xhr.responseText);
                       console.log(res);

                        //根据数据生成HTML结构
                        var ul = document.createElement('ul');
                        ul.classList.add('clearfix');
                        //用数组的map方法遍历res这个数组
                        ul.innerHTML = res.map(function(item){
                            return `<a href="html/detail.html"><li>
                                    <img src="${item.imgurl}" alt="">
                                    <p class="sale">¥${item.sale}<span class="price"><del>¥${item.price}</del></span></p>
                                    <p class="title">${item.title}<span class="sold">上新</span></p>
                                    <span class="shoucang"></span>
                                    
                            </li></a>`
                        }).join('');

                        //把ul写入页面
                        goodlist.appendChild(ul);

                        var shoucang = goodlist.querySelectorAll('.shoucang');
                        console.log(shoucang);


                        console.log(goodlist);

                        goodlist.addEventListener('mouseover',function(e){

                            // for(var i=0;i<shoucang.length;i++){
                            //     console.log(shoucang[i]);
                            // }
                            var currentLi = e.target.parentNode
                            if(currentLi.tagName==='li'){
                                currentLi.lastElementChild.style.display = 'block';

                                console.log(currentLi.lastElementChild);
                                
                            }
                        })

                    }
                }

                //xhr.open('get','http://localhost:1126/api/goods.php',true); 建议用下面的相对定位，不要用这种绝对定位
                xhr.open('get','../api/data/goods.json',true);

                xhr.send();

            })();
            


            
            
            

            /*-----------------吸顶菜单部分------------------*/
            (function(){

                window.onscroll = function(){
                    var mnav = document.querySelector('.mnav');
                    var scrollTop = window.scrollY;
                    console.log(scrollTop);

                    if(scrollTop>=850){
                        mnav.classList.add('fixed');
                    }else{
                        mnav.classList.remove('fixed');
                    }
                }

            })();







    })










// /*---------------导航轮播图部分-------------------- */



//     jQuery(function(){

//         var bnr = document.querySelector('.banner_c');

//         var ul = bnr.querySelector('ul');

//         //无缝滚动
//         //复制第一张到最后一张
//         ul.appendChild(ul.children[0].cloneNode(true));

//         var len = ul.children.length;
//         var index = 0;
//         var imgWidth = bnr.clientWidth;


//         //生成页码
//         var page = document.createElement('div');
//         page.classList.add('page');

//         for(var i=1;i<len;i++){
//             var span = document.createElement('span');
//             //也可以在这里生成页码，那就是直接 span.innerText = i;
//             span.innerText = i;
//             page.appendChild(span);

//             if(i == index +1){
//                 span.classList.add('active');
//             }
//         }
//         //把page写入页面
//         bnr.appendChild(page);

//         //添加左右按钮
//         var btnNext = document.createElement('span');
//         btnNext.className = 'next';
//         btnNext.innerHTML = '&gt';
//         var btnPrev = document.createElement('span');
//         btnPrev.className = 'prev';
//         btnPrev.innerHTML = '&lt';

//         //插入页面
//         bnr.appendChild(btnNext);
//         bnr.appendChild(btnPrev);


//         ul.style.width = imgWidth * len +'px';

//         var timer = setInterval(autoPlay,3000)


//         //给左右按钮绑定点击事件
//         bnr.addEventListener('click',function(e){
//             if(e.target.className == 'next'){
//                 index++;
//                 if(index<0){
//                     index=len-1;
//                 }
//                 show();
//             }else if(e.target.className == 'prev'){
//                 index--;
//                 show();
//             }
//         })

//         //鼠标移入移除
//         bnr.addEventListener('mouseenter',function(){
//             clearInterval(timer); //这是事件监听的写法
//         })

//         bnr.onmouseleave = function(){
//             timer = setInterval(autoPlay,3000); //这是原始写法
//         }

//         bnr.addEventListener('click',function(e){
//             if(e.target.parentNode.classList.contains('page')){
//                 index = e.target.innerText-1;

//                 show();
//             }
//         })

//         // 把重复部分封装成函数
//         function autoPlay(){

//             index++;
//             if(index>=len){
//                 //当滚动到复制那张图片时，瞬间重置回初始状态，，也就是当index值等于或大于li的长度的时候就让它重回到第一张，，直接改变ul的left值就行了,并且下面的index值也要从开始的0改成为1，因为第一张已经在前面跑过了
//                 ul.style.left = 0;
//                 index = 1;  
//             }
//             var target = -imgWidth*index; //移动的目标值
//             animate(ul,{left:target});

//             //高亮页码
//             //高亮前先清除
//             page.querySelector('.active').classList.remove('active');
//             if(index < len-1){
//                 page.children[index].className = 'active';
//             }else{
//                 page.children[0].className = 'active';
//             }

//         }

//         function show(){

//             if(index>=len){
//                 //当滚动到复制那张图片时，瞬间重置回初始状态，，也就是当index值等于或大于li的长度的时候就让它重回到第一张，，直接改变ul的left值就行了,并且下面的index值也要从开始的0改成为1，因为第一张已经在前面跑过了
//                 ul.style.left = 0;
//                 index = 1;  
//             }
//             var target = -imgWidth*index; //移动的目标值
//             animate(ul,{left:target});

//             //高亮页码
//             //高亮前先清除
//             page.querySelector('.active').classList.remove('active');
//             if(index < len-1){
//                 page.children[index].className = 'active';
//             }else{
//                 page.children[0].className = 'active';
//             }
//         }


//     });

    





//     /*-------------------倒计时部分-----------------------*/

//     (function(){

//         var countDown = document.querySelectorAll('.countDown');

//         //设置活动结束时间
//         var end = Date.parse('2018-2-30 12:00:00');

//         showTime();

//         var timer = setInterval(showTime,1000);

//         function showTime(){
//             var now = Date.now();  //获取当前时间

//             var offset = Math.floor((end - now)/1000);  //计算差值
//             console.log(offset);

//             if(offset<=0){
//                 clearInterval(timer); //清除定时器

//                 countDown.style.display = 'none';
//             }

//             var sec = offset%60;
//             var min = Math.floor(offset/60)%60;
//             var hour = Math.floor(offset/60/60)%24;
//             var day = Math.floor(offset/60/60/24);

//             sec = sec<10? '0'+sec : sec;
//             min = min<10? '0'+min : min;
//             hour = hour<10? '0'+hour : hour;
//             day = day<10? '0'+day : day;

//             for(var i=0;i<countDown.length;i++){
//                 countDown[i].innerText = '剩余 ' + day + '天 ' + hour + '时 ' + min +'分 ' + sec + '秒';
//             }
            

//         }

//     })();

    
    





//     /*-----------------生成商品列表结构--------------------*/
//     (function(){

//         var arr_status = [200,304];
//         var goodlist = document.querySelector('#goodlist');

//         //ajax请求
//         var xhr = new XMLHttpRequest();
        
//         xhr.onreadystatechange = function(){
//             console.log(xhr.readyState);

//             if(xhr.readyState === 4 && arr_status.indexOf(xhr.status)>=0){
//                var res = JSON.parse(xhr.responseText);
//                console.log(res);

//                 //根据数据生成HTML结构
//                 var ul = document.createElement('ul');
//                 ul.classList.add('clearfix');
//                 //用数组的map方法遍历res这个数组
//                 ul.innerHTML = res.map(function(item){
//                     return `<a href="html/detail.html"><li>
//                             <img src="${item.imgurl}" alt="">
//                             <p class="sale">¥${item.sale}<span class="price"><del>¥${item.price}</del></span></p>
//                             <p class="title">${item.title}<span class="sold">上新</span></p>
//                             <span class="shoucang"></span>
                            
//                     </li></a>`
//                 }).join('');

//                 //把ul写入页面
//                 goodlist.appendChild(ul);

//                 var shoucang = goodlist.querySelectorAll('.shoucang');
//                 console.log(shoucang);


//                 console.log(goodlist);

//                 goodlist.addEventListener('mouseover',function(e){

//                     // for(var i=0;i<shoucang.length;i++){
//                     //     console.log(shoucang[i]);
//                     // }
//                     var currentLi = e.target.parentNode
//                     if(currentLi.tagName==='li'){
//                         currentLi.lastElementChild.style.display = 'block';

//                         console.log(currentLi.lastElementChild);
                        
//                     }
//                 })

//             }
//         }

//         //xhr.open('get','http://localhost:1126/api/goods.php',true); 建议用下面的相对定位，不要用这种绝对定位
//         xhr.open('get','../api/data/goods.json',true);

//         xhr.send();

//     })();
    


    
    
    

//     /*-----------------吸顶菜单部分------------------*/
//     (function(){

//         window.onscroll = function(){
//             var mnav = document.querySelector('.mnav');
//             var scrollTop = window.scrollY;
//             console.log(scrollTop);

//             if(scrollTop>=850){
//                 mnav.classList.add('fixed');
//             }else{
//                 mnav.classList.remove('fixed');
//             }
//         }

//     })();

    






