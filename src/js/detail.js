let loadindex = layer.load(2,{
    shade:[1,'#000']
})
var title = document.querySelector("title")
// console.log(title); 

// title.innerText = "" title的标题
// 320 160 800 400比例
// 放大镜start
// 回到顶部
var tops= document.querySelector(".tops a" )
$(".middle").hover(function(){
    $(".big").css("display","block")
    $(".mark").css("display","block")
    $(this).mousemove(function(e) {
        var x= e.pageX
        var y =e.pageY
        var left =x - $(".middle").offset().left-$(".mark").width()/2+"px"
        var top = y -$(".middle").offset().top-$(".mark").height()/2+"px"
        if(parseFloat(left)<=0){
            left=0
        }
        if(parseFloat(top)<=0){
            top=0
        }
        if(parseFloat(left)>=$(".middle").width()-$(".mark").width()){
            left =$(".middle").width()-$(".mark").width()
        }
        if(parseFloat(top)>=$(".middle").height()-$(".mark").height()){
            top = $(".middle").height()-$(".mark").height()
        }
        $(".mark").css({
            left,top
        })
        var bigLeft = parseFloat(left)/$(".middle").width()*$(".big>img").width()
        var bigTop = parseFloat(top)/$(".middle").height()*$(".big>img").height()
        $(".big>img").css({
            left:-bigLeft+"px",
            top:-bigTop+"px"
        })
    })
},function(){
    $(".big").css("display","none")
    $(".mark").css("display","none")
})
tops.onclick = function(){
    $("html,body").animate({scrollTop:0},1000,function(){
        $off =true
    })
   

}
// 数量加减
$(".add").click(function(){
    $(".number").val($(".number").val()-0+1)
})
$(".del").click(function(){
   
    $(".number").val($(".number").val()-0-1)
    if($(".number").val()==0){
        $(".number").val(1)
    }
})


// 首页跳转详情页
$num =0

// 调用函数3列表页调用
function getParams(key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};
// 接收传过来的数据
let index = getParams("index")
let fir = getParams("fir")
let oller = getParams("oller")
let types= getParams("id");
// let id = arr[1];
// 判断是哪一个表来的数据
    if(index){
        // let id= getParams("id");
        $.get("http://localhost/dangdang/src/php/listTo.php",{
        id:types,
    },function(res){
        let img = res[0].url.split('====');
        $(".middleImg").attr(
            "src",img[0]
        )
        $(".bigImg").attr(
            "src",img[0]
        )
       
        var str = '';
        for(var i=0;i<img.length;i++){
            if(i===0){
                str += `
                    <img class="active" src="${img[i]}">
                `
            }else{
                str += `
                    <img src="${img[i]}">
                `
            }
        }
        // 标记
        $('.small').html(str)
        // 图片地址
        // 单击事件
        $(".small img").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
            $('.middle>img').attr("src",$(this).attr("src"))
            $(".big>img").attr("src",$(this).attr("src"))
        })
        $(".time1").text(res[0].name)
        $(".price1").text(res[0].price.slice(1,3))
        $(".price2").text(res[0].price3)
        $(".ze").text(parseFloat((res[0].price.slice(1,3)-0)*10/res[0].price3-0).toFixed(1))
        layer.close(loadindex)
        $(".quickly").click(function(){
            location.href="http://localhost/dangdang/src/cart.html?index=1"
        })
        // 给网页加标题

        $(document).attr("title",res[0].name)
         // 添加购物车
         addcart()
    },"json")

    }else if(fir){
        // let id= getParams("id");
        function getParams(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    $.get("http://localhost/dangdang/src/php/detail.php",{
        id:types,
    },function(res){
        let img = res[0].url.split('====');
        $(".middleImg").attr(
            "src",img[0]
        )
        $(".bigImg").attr(
            "src",img[0]
        )
        var str = '';
        for(var i=0;i<img.length;i++){
            if(i===0){
                str += `
                    <img class="active" src="${img[i]}">
                `
            }else{
                str += `
                    <img src="${img[i]}">
                `
            }
        }
        $('.small').html(str)
        // 图片地址
        // 单击事件
        $(".small img").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
            $('.middle>img').attr("src",$(this).attr("src"))
            $(".big>img").attr("src",$(this).attr("src"))
        })
        $(".time1 span").text("作者"+res[0].name+"著")
        $(".price1").text(res[0].price.slice(1))
        $(".price2").text(res[0].price2.slice(1))
        $(".ze").text(parseFloat((res[0].price.slice(1)-0)*10/res[0].price2.slice(1)-0).toFixed(1))
        layer.close(loadindex)
        $(".quickly").click(function(){
            location.href="http://localhost/dangdang/src/cart.html?fir=1"
        })
        // 给网页加标题

        $(document).attr("title",res[0].name)

         // 添加购物车
         addcart()
    },"json")
   
    }else if(oller){
        // let id= getParams("id");
        function getParams(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    $.get("http://localhost/dangdang/src/php/detailTwo.php",{
        id:types,
    },function(res){
        let img = res[0].url.split('====');
        $(".middleImg").attr(
            "src",img[0]
        )
        $(".bigImg").attr(
            "src",img[0]
        )
        var str = '';
        for(var i=0;i<img.length;i++){
            if(i===0){
                str += `
                    <img class="active imgs" src="${img[i]}">
                `
            }else{
                str += `
                    <img class="imgs" src="${img[i]}">
                `
            }
        }
        $('.small').html(str)
        $(".small img").click(function(){
            $(this).addClass("active").siblings().removeClass("active")
            $('.middle>img').attr("src",$(this).attr("src"))
            $(".big>img").attr("src",$(this).attr("src"))
        })
        // 图片地址
        // 单击事件
        $(".time1 span").text("作者"+res[0].name+"著")
        $(".price1").text(res[0].price.slice(1))
        $(".price2").text(res[0].price2.slice(1))
        $(".ze").text(parseFloat((res[0].price.slice(1)-0)*10/res[0].price2.slice(1)-0).toFixed(1))
        layer.close(loadindex)
        $(".quickly").click(function(){
            location.href="http://localhost/dangdang/src/cart.html?oller=1"
        })
        // 给网页加标题
        $(document).attr("title",res[0].name)

        // 添加购物车
        addcart()
    },"json")
    }
// 定义加入购物车的函数
function addcart(){
    $(".car").click(function(){
        // 先判断用户是否登录
        // 获取cookie
        let username = tool.getCookie('name')
        // console.log(username);//有
        if(!username){
            // 没有登录-跳转到登录页面
            layer.msg('请您先登录',{
                icon:2,
                time:1500,
            },function(){
                // 先将当前地址存下来 - 本地存储
                localStorage.setItem('url',location.href)
                location.href='login.html';
            })
        }else{
            // 已经登录
            // 商品id/用户名/数量
            // 存储的购物车数据格式:[{goodsid:1,usename,number:1},{goodsid:1,usename,number:1}]
            let obj = {
                goodsid:types,
                username,
                number:1
            }
            // console.log(obj);对
             // 往哪里存？
            // 实际的项目，购物车数据应该在数据库存储


             // 我们的项目就将数据存到本地存储
            // 先判断本地存储中是否有数据
            var data = localStorage.getItem("data")
            if(!data){
                 // 将对象放到一个数组中
                var arr = [];
                arr.push(obj)
                var data = JSON.stringify(arr)
                localStorage.setItem('data',data)
            }else{
                // 有数据
                // 将本地存储数据转成数组
                var arr = JSON.parse(data)
                var currentObj = arr.find(goods=>goods.goodsid === obj.goodsid && goods.username === obj.username)
                if(currentObj){
                    // 存在 ++ 让数量++
                    currentObj.number++
                    if(currentObj.number>=10){
                        currentObj.number=10
                    }
                    localStorage.setItem("data",JSON.stringify(arr))
                    console.log(arr);
                }else{
                      // 没有当前数据
                    arr.push(obj)
                    var data = JSON.stringify(arr)
                    localStorage.setItem("data",data)
                }
            }
        }
        return false;
    })
}
// addcart()
    // 3秒后关闭遮罩
    t = setInterval("layer.close(loadindex)", 3000);
    $(".middle>img").attr("src",$(".small .active").attr("src"))
    // 取随机数
    $(".random").text(parseInt(Math.random()*10000)+100+"条评论")


 
    // console.log((document).attr("title",$(".time1").text(res[0].name)));