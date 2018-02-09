//引入gulp
//模块：函数/模块

//引入本地安装的gulp
var gulp = require('gulp'); //得到一个对象
var sass = require('gulp-sass');


//编译sass文件
//gulp的使用



//创建一个gulp任务，：编译sass
gulp.task('compileSass',function(){
    //查找sass文件
    gulp.src('./src/sass/*.scss')  //得到文件流
    //这里面的目录是相对于gulpfile.js文件的目录   一个.表示当前目录


    //通过管道传输
    //编译
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))     
    //得到编译后的文件流 css

    //输出到硬盘
    .pipe(gulp.dest('./src/css/'))
});


//创建文件监听任务：文件有修改，则自动编译
gulp.task('jtSass',function(){
    //当文件有修改，则执行compileSass任务
    gulp.watch('./src/sass/*.scss',['compileSass'])
})



//只要这里面有修改，必须要在命令里面重新执行gulp compileSass或者gulp jtSass