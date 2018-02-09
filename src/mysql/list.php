<?php

    //引入其他文件
    require('connect.php');  //include 'connect.php' 这是另一种写法，推荐前一种


//这部分只是模拟如果要传id或者category的情况下需要写的sql语句
    // //获取前端数据
    // $cat = isset($_GET['category']) ? $_GET['category'] : null;
    // $id = isset($_GET['id']) ? $_GET['id'] : null;

    //编写sql语句
    // $sql = 'select * from goods where';



    //编写sql语句
    $sql = 'select * from goods';




    // if($id){
    //     $sql .=" id='$id' and";
    // };

    // //根据分类改变sql语句
    // if($cat){
    //     $sql .= " category=$cat and";
    // };

    // $sql .= ' 1=1';


    //引入后相当于就执行了connect.php里面的代码，所以这里也就有了$conn这个变量
    //查询sql语句，，，得到查询结果集合（是一个对象）
    $res = $conn->query($sql);

    //使用查询结果集
    $row = $res->fetch_all(MYSQLI_ASSOC);

    echo json_encode($row,JSON_UNESCAPED_UNICODE);






?>