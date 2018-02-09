/* 
* @Author: Marte
* @Date:   2018-01-30 16:37:28
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-31 20:03:06
*/

;(function($){
    $.fn.gdsZoom = function(options){
        //设置默认的参数值
        var defaults = { 
            //放大区域的宽高
            width:400,
            height:300,

            //放大区域的位置
            position:'right', //left,top,bottom,right

            //小图与大图的间距
            gap:15

        }

        return this.each(function(){

            var opt = $.extend({},defaults,options);

            // console.log(this); 因为在这里this调用gdsZoom这个函数，所以这里this指向的就是goods
            //这里的this是个dom节点所以要使用jQuery方法必须先把它转成jQuery对象
            var $small = $(this); 
            console.log($small);

            //获取小图(大图是写在小图里面的)
            var $smallImg = $small.find('img');
            console.log($small);
            //添加特定类，，设置样式，给dom节点加
            $small.addClass('gds-zoom')

            init();
            
            //获取/创建节点，，绑定事件
            function init(){ //设置初始化
                //创建大图区域
                var $big = $('<div/>').addClass('gds-zoom-big');



                //这里直到下面创建大图前面都是后面添加的
                $big.css({
                    width:opt.width,
                    height:opt.height
                })

                //大图位置
                var left,top;
                if(opt.position === 'right'){
                    left = $small.offset().left + $small.outerWidth() + opt.gap;
                    top = $small.offset().top
                }else if(opt.position === 'left'){
                    left = $small.offset().left - opt.width - opt.gap;
                    top = $small.offset().top
                }else if(opt.position === 'top'){
                    left = $small.offset().left;
                    top = $small.offset().top - opt.height - opt.gap
                }else if(opt.position === 'bottom'){
                    left = $small.offset().left;
                    top = $small.offset().top + $small.outerHeight() + opt.gap
                }

                $big.css({
                    left:left,
                    top:top
                });


                //创建大图                                  //有就获取它的src属性值，没有就为它的属性本身
                var $bigImg = $('<img/>').attr('src',$smallImg.attr('data-big')) || $smallImg.attr('src'); 
                //$smallImg.attr('data-big')这是大图的src属性                      $smallImg[0].src写法是一样的

                //大图写入$big
                $bigImg.appendTo($big);

                //写入页面
                $big.appendTo('body');


                //创建放大镜(放大镜在小图上)
                var $minzoom = $('<span/>').addClass('minzoom');
                $minzoom.appendTo($small);


                //大图与小图的比例
                //元素必须显示（且加载完成）才可以获取宽度
                var ratio; 


                //鼠标移入移除(注意是移入小图的时候)
                $small.on('mouseenter',function(){

                    //这一个是后来加的为点击下面美女图上面显示美女图的细节放大
                    $bigImg.attr('src',$smallImg.attr('data-big') || $smallImg[0].src);

                    $minzoom.show(); //因为样式里面这个$minzoom默认是隐藏的，所以这里要把它显示出来
                    $big.show();

                    //计算比例
                    ratio = $bigImg.outerWidth()/$small.outerWidth();
                    // console.log($bigImg.width());
                    
                    //移进来的时候改变放大镜$minzoom的宽高，它的宽高不是由自己决定，而是由大图决定
                    //设置放大镜的大小，，与大图区域成比例
                    $minzoom.css({
                        width:opt.width/ratio,
                        height:opt.height/ratio
                    })


                }).on('mouseleave',function(){ //移出时隐藏
                    $big.hide();
                    $minzoom.hide();
                    // console.log(666);
                }).on('mousemove',function(e){ //移动时.....,这里要获取光标的位置，所以要用到e
                    var left = e.pageX - $small.offset().left - $minzoom.outerWidth()/2;
                    // offset():获取匹配元素相对于根元素的偏移量
                    var top = e.pageY - $small.offset().top - $minzoom.outerHeight()/2;

                    //边界判断（让放大镜的位置不会超过data-big的边界外面去）
                    //判断左右
                    if(left < 0){
                        left = 0;
                    }else if(left > $smallImg.innerWidth() - $minzoom.outerWidth()){
                        left = $smallImg.innerWidth() - $minzoom.outerWidth();
                    }
                    //判断上下
                    if(top<0){
                        top = 0;
                    }else if(top > $smallImg.innerHeight()- $minzoom.outerHeight()){
                        top = $smallImg.innerHeight()- $minzoom.outerHeight();
                    }


                    $minzoom.css({
                        left:left,
                        top:top
                    });

                    $bigImg.css({
                        left:-left*ratio,
                        top:-top*ratio
                    })
                })
            }

        });

    }

})(jQuery)