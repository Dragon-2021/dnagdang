<?php
    header("Access-Control-Allow-Origin: *");
    // 解决跨域问题
    header("content-type:text/html;charset=utf8");
    $con = mysqli_connect('localhost','root','15870943773','test');
    mysqli_query($con,'set names uft8');
    // $pid = $_GET["pid"];
    $res = mysqli_query($con,"select * from listgood ");
    $arr = [];
    while($row = mysqli_fetch_assoc($res)){
        $arr[] = $row;
    }
    echo json_encode($arr);