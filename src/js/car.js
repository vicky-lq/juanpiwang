
require.config({
    paths:{
        'jquery':'../lib/jquery-3.2.1' //相对于当前的js文件而言的路径
    }
})

require(['jquery','common'],function(){

    jQuery(function($){
        
        var res = JSON.parse(Cookie.get('data')); 
        //记住这里得到的data是标准的json字符串，所以要用JSON.parse把它专程数组或者对象
        console.log(res);

        var html = '';
        res.forEach(function(item){

            console.log(item.price);
            html += `
                <div class="goods">
                    <div class="choose1"></div>
                    <p>跨店促销<span>购买2件，可打8折  去凑单>></span></p>
                    <div class="detail">
                        <i class="choose2"></i>
                        <ul class="clearfix">
                            <li>
                                <img src="${item.imgs}" alt="" />
                                <div>
                                    <p>${item.name}</p>
                                    <span>XL，砖红色</span>
                                </div>
                            </li>
                            <li>
                                <p>¥${item.saleprice} <span>/ ¥${item.price}</span></p>
                            </li>
                            <li>
                                <div class="qty clearfix">
                                    <span>-</span>
                                    <span>1</span>
                                    <span>+</span>
                                </div>
                            </li>
                            <li>¥${item.saleprice}</li>
                            <li><i class="del"></i></li>
                        </ul>
                    </div>
                </div>
            `
            $('.carlist').html(html);
            $('.total').html(item.saleprice);
        })
        



    })
    
})


