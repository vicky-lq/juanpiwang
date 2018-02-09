
document.addEventListener('DOMContentLoaded',function(){

    jQuery(function($){

        var goods_id = location.search.split('?')[1]; //获取传过来的数据
        console.log(goods_id);
        
        //发起ajax请求
        $.ajax({
            url:'../mysql/detail.php',
            dataType:'json',
            data:{
                id:goods_id
            },
            success:function(data){
                            console.log(data);
                var html ='';
                data.forEach(function(item){
                    html += `
                        <ul class="smallList">
                            <li><img src="${item.imgs}" alt="" with=60 height=60 data-bit="${item.imgs}"/></li>
                            <li><img src="${item.imgs}" alt="" with=60 height=60 /></li>
                            <li><img src="${item.imgs}" alt="" with=60 height=60 /></li>
                            <li><img src="${item.imgs}" alt="" with=60 height=60 /></li>
                            <li><img src="${item.imgs}" alt="" with=60 height=60 /></li>
                            <li><img src="${item.imgs}" alt="" with=60 height=60 /></li>
                        </ul>
                        <div class="pic fl">
                            <div class="good">
                                <img src="${item.imgs}" />
                            </div>
                            
                            <p>
                                <span>100%人工质检</span>
                                <span>全国包邮低价保障</span>
                                <span>7天无理由退货</span>
                            </p>
                            <p>
                                <span>收藏<i class="shoucang"></i></span>
                                <span>分享<i class="fenxiang"></i></span>
                                <span>举报</span>
                            </p>
                        </div>
                    `

                    var main_l = document.querySelector('.main_l');
                    var title = document.querySelector('.title');
                    main_l.innerHTML = html;

                    $('.good').gdsZoom({
                        position:'right',
                    });
                    console.log($.fn.gdsZoom);
                    $('.smallList').on('click','img',function(){

                        $('.good img').attr({
                            src:this.src,
                            'data-big':this.dataset.big || this.src
                        })

                    })

                    $('.title').html(item.name);

                    $('.saleprice').html(item.saleprice);
                    $('.price').html(item.price);
                })


                console.log(data);
                
                var addCar = document.querySelector('.addCar');
                    addCar.addEventListener('click',function(e){
                        console.log(666);
                        
                        var now = new Date();
                        now.setDate(now.getDate()+7);
                        Cookie.set('data',JSON.stringify(data),{expires:now,path:'/'});

                        console.log(data);

                 })

            }


        })





    });


    



        

    


})

