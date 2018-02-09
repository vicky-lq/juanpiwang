


jQuery(function($){

console.log(666);
    $('.btnReg').on('click',function(){

        $.ajax({

            url:'../mysql/user.php',  //获取请求的数据
            dataType:'json', //这一步作用是把获取到的数据转成数组
            data:{
                username:$('#username').val(),
                password:$('#password').val()
            },
            success:function(data){
                console.log(data);

            }


        })


        
    })
    
})