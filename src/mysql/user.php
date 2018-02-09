<?php
    
    //引入其他文件，这里是引入connect.php这个文件
    require('connect.php');

    //编写sql语句
    $sql = 'select * from user';

    $res = $conn->query($sql);

    $row = $res->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($row,JSON_UNESCAPED_UNICODE);



?>