<?php
header("content-type:text/html;charset=utf8");
$con = mysqli_connect('localhost','root','15870943773','test');
mysqli_query($con,'set names uft8');
$username = $_POST["username"];
$sub = $_POST["sub"];
$res = mysqli_query($con,"select * from user where name='$username'");
$row = mysqli_fetch_assoc($res);

if($row){
    if($row['sub']===$sub){
        $arr=[
            "meta"=>[
                "status"=>1,
                "message"=>"登陆成功"
            ],
            "data"=>null
        ];
        // 创建cookie
        setcookie('name',$username,time()+3600*2,'/');
    }else{
        $arr=[
            "meta"=>[
                "status"=>2,
                "message"=>"密码错误"
            ],
            "data"=>null
        ];
    }
}else{
    $arr =[
        "meta"=>[
            "status"=>0,
            "message"=>"用户名不存在"
        ],
        "data"=>null
    ];
};
echo json_encode($arr);