<?php
    
    require('connect.php');

    //获取前端数据
    $id = isset($_GET['id']) ? $_GET['id'] : null;


    $sql = "select * from goods";

    

    if($id){
        $sql .= " where id= '$id' ";
    }

    //查询sql语句
    $res = $conn->query($sql);
    // var_dump($res);

    //使用查询结果集
    //得到数组
    $row = $res->fetch_all(MYSQLI_ASSOC); 

    echo json_encode($row,JSON_UNESCAPED_UNICODE);

?>