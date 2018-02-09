<?php

    require('connect.php');
    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] :30;

    //编写sql语句
    $sql = 'select * form goods';

    //查询sql语句
    $res = $conn->query($sql);

    //使用查询结果集
    //得到数组
    $row = $result->fetch_all(MYSQLI_ASSOC); 

    //根据分页截取数据
    $res = array(
        'data'=>array_slice($row,($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1

        );

    echo json_encode($res,JSON_UNESCAPED_UNICODE);


?>