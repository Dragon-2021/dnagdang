<?php
    header("Access-Control-Allow-Origin: *");
    header("content-type:text/html;charset=utf8");
    $con = mysqli_connect('localhost','root','15870943773','test');
    mysqli_query($con,'set names uft8');
    $id = $_GET["id"];
    $res = mysqli_query($con,"select * from listgood where id='$id'");
    $arr = [];
    while($row = mysqli_fetch_assoc($res)){
        $arr[] = $row;
    }
    echo json_encode($arr);