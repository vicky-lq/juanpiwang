;(function($){

    $.fn.gdsZoom = function(options){

        //设置默认值
        var defaults = {
            //放大区域的宽高
            width:400,
            height:300,

            position:'right',//这是设置默认值，如果传位置的参数进来那么就会默认位置为right

            gap:15 //小图与大图的间距
        }

        //return this.each这个是习惯写法，在后面写return也可以，这个只是简写，
        return this.each(function(){

            var opt = $.extend({},defaults,options);
            var $small = $(this);
            console.log($small);

            //获取小图（大图是放在小图里面的）
            var $smallImg = $small.find('img');
            console.log($smallImg);

            //给$small添加特定类，，设置样式
            $small.addClass('gds-zoom');
            

        })

    }

})(jQuery);