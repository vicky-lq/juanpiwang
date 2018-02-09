
/*--------------倒计时----------------*/

document.addEventListener('DOMContentLoaded',function(){

    (function(){
        console.log(666);
        var time = document.querySelector('.time');
        var li = time.parentNode;

        //设置活动结束时间
        var end = Date.parse('2018-02-25 12:00:00');

        showTime();

        var timer = setInterval(showTime,1000);


       

        var ck = document.createElement('span');
        ck.className = 'clock';

        li.appendChild(ck);
        // console.log(time,ck);


        function showTime(){

            var now = Date.now(); 

            var offset = Math.floor((end-now)/1000); //计算差值

            if(offset<=0){
                clearInterval(timer);
                time.style.display = 'none';
            }

            var sec = offset%60;
            var min = Math.floor(offset/60)%60;
            var hour = Math.floor(offset/60/60)%24;
            var day = Math.floor(offset/60/60/24);

            //补0操作
            sec = sec<10 ? '0'+sec : sec;
            min = min<10 ? '0'+min : min;
            hour = hour<10 ? '0'+hour : hour;
            day = day<10 ? '0'+day : day;

            time.innerHTML ='剩余'+day+'天'+hour+'时'+min+'分'+sec+'秒';


        }

    })();





    jQuery(function($){

        //     $.ajax({
        //         url:'../mysql/list.php',
        //         dataType:'json',
        //         // data:{
        //         //     category:'',
        //         //     id:'20',
        //         // }, 
                
        //         autoRequest()

        //     })  

        //         function autoRequest(){

        //             success:function(data){
        //                 console.log(data.data);
        //                 // 这个data是一个对象，对象里面包含data数组，还包含了list.php里面加的total,qty,pageNo这些东西，但是我们只需要里面的第一项，所以下面map遍历的时候是写对象名.data


        //                 //设置页面分页数量
        //                 // var pageNo = 1;
        //                 // var qty = 11;
        //                 var page = document.querySelector('.page'); //先获取页面上的page


        //                 var goodslist = document.querySelector('.goodslist');

        //                 var ul = document.createElement('ul');
        //                 ul.classList.add('clearfix');

        //                 ul.innerHTML = data.data.map(function(item){
        //                     return `<a href="details.html"><li data-goodsid="${item.id}">
        //                             <img src="${item.imgs}" />
        //                         <p>
        //                             <span class="saleprice">¥${item.saleprice}</span>
        //                             <span class="price"><del>¥${item.price}</del></span>
        //                         </p>
        //                         <h3>${item.name}<span>剩23小时</span></h3>
        //                     </li></a>`
        //                 }).join('');

        //                 //把ul写入页面
        //                 goodslist.appendChild(ul);

                        
        //                 //处理分页
                        
        //                 var pageQty = Math.ceil(data.total/data.qty); //总数量除以每页设置的数量得到分成多少页

        //                 page.innerText = '';
        //                 for(var i=1;i<=pageQty;i++){
        //                     var span = document.createElement('span');
        //                     span.innerText = i;

        //                     if(i===data.pageNo){
        //                         span.className = 'active';
        //                     }
        //                     page.appendChild(span);

        //                 }  

        //             }
                                        
        //         };
        
        
        // page.onclick = function(e){
        //     if(e.target.tagName==='span'){
        //         pageNo = e.target.innerText*1;
                
        //         $.ajax({
        //             url:'../mysql/list.php',
        //             dataType:'json',
        //             data:{
        //                 pageNo:'3',
        //                 qty:'11',
        //             }, 
                    
        //             autoRequest();

        //         });

        //     }
        // }






        //上面是想做的点击切换分页效果没做出来，报错了，，不知道什么原因，先用下面的

        $.ajax({

            url:'../mysql/list.php',
            dataType:'json',
            // data:{
            //     category:'',
            //     id:'20',
            // }, 
            success:function(data){
                console.log(data);
                // 这个data是一个对象，对象里面包含data数组，还包含了list.php里面加的total,qty,pageNo这些东西，但是我们只需要里面的第一项，所以下面map遍历的时候是写对象名.data


                var page = document.querySelector('.page'); //先获取页面上的page

                var goodslist = document.querySelector('.goodslist');

                var ul = document.createElement('ul');
                ul.classList.add('clearfix');

                ul.innerHTML = data.map(function(item){
                    return `<li data-goodsid="${item.id}">
                            <img src="${item.imgs}" />
                        <p>
                            <span class="saleprice">¥${item.saleprice}</span>
                            <span class="price"><del>¥${item.price}</del></span>
                        </p>
                        <h3>${item.name}<span>剩23小时</span></h3>
                    </li>`
                }).join('');

                //把ul写入页面
                goodslist.appendChild(ul);



                //分页
                var pageQty = Math.ceil(data.total/data.qty); 
                var page = document.querySelector('.page');

                //总数量除以每页设置的数量得到分成多少页

                // page.innerText = '';
                // for(var i=1;i<=pageQty;i++){
                //     var span = document.createElement('span');
                //     span.innerText = i;

                //     if(i===data.pageNo){
                //         span.className = 'active';
                //     }
                //     page.appendChild(span);

                // }  
                // page

                // console.log(666);



                //传参
                $('.goodslist').on('click','li',function(){
                    console.log(this);
                    var res = this.dataset.goodsid; //获取自定义属性的值
                    console.log(res);
                    location.href = 'detail.html?'+res;
                })
            }   

        })


    });


    




    
    /*-------------------吸顶菜单部分------------------------*/
    (function(){

        window.onscroll = function(){
            var xd = document.querySelector('.xd');
            var scrollTop = window.scrollY;
            // console.log(scrollTop);

            if(scrollTop>=420){
                xd.classList.add('fixed');
            }else{
                xd.classList.remove('fixed');
            }


        }



    })();













    

})