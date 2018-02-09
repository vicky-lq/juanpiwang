<?php
    

    //创建连接
    $conn = new mysqli('localhost', 'root', '', 'juanpiwang');

    //查询sql语句
    //获取或查询结果集(得到的是一个对象)
    $result = $conn->query('select * from goods order by saleprice desc');


    var_dump($result);


    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC); //得到所有结果
    // $row = $result->fetch_assoc();  得到第一个结果
    // $row = $result->fetch_row();   得到第一个结果的值


    echo json_encode($row);



?>