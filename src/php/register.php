<?php
header("content-type:text/html;charset=utf8");
$username = $_POST["username"];
$sub = $_POST["sub"];
$email = $_POST["username"];
$phone = $_POST["phone"];
$con = mysqli_connect('localhost','root','15870943773','test');
mysqli_query($con,"set names uft8");
$res = mysqli_query($con,"select * from user where name = '$username'");
$row = mysqli_fetch_assoc($res);
if($row){
    $arr = [
        "meta"=>[
            "status"=>2,
            "message"=>"用户名已存在",
        ],
        "data"=>null
    ];
}else{
    $res = mysqli_query($con,"insert user(name,sub,email,phone) values('$username','$sub','$email','$phone')");
    if($res){
        $arr =[
            "meta"=>[
                "status"=>1,
                "message"=>"注册成功",
            ],
            "data"=>"null"
        ];
    }else{
        $arr = [
            "meta"=>[
                "status"=>0,
                "message"=>"注册失败"
            ],
            "data"=>null
        ];
    }
}
// 转字符串
echo json_encode($arr);