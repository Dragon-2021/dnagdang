let loadindex = layer.load(2,{
    shade:[1,'#000']
})
var title = document.querySelector("title")
console.log(title); 
// title.innerText = "" title的标题
// 320 160 800 400比例
// 放大镜start
// 回到顶部
var tops= document.querySelector(".tops a" )
// console.log($(".small img"));
// $(".small img").click(function(){
//     $(this).addClass("active").siblings().removeClass("active")
//     $('.middle>img').attr("src",$(this).attr("src"))
//     $(".big>img").attr("src",$(this).attr("src"))
// })
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

// this.smallImgs[i].onclick = ()=>{
//     for(let j=0;j<this.smallImgs.length;j++){
//         this.smallImgs[j].className = '';
//     }
//     this.smallImgs[i].className = 'active';
//     this.middleImg.src = this.bigImg.src = this.smallImgs[i].src;
// }
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
    if(index){
        $.get("http://localhost/dangdang/scr/php/listTo.php",{
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
    },"json")

    }else if(fir){
        let tj_type= getParams("id");
        function getParams(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    $.get("http://localhost/dangdang/scr/php/detail.php",{
        id:tj_type,
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
    },"json")
   
    }else if(oller){
        let type= getParams("id");
        function getParams(key) {
        var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    };

    $.get("http://localhost/dangdang/scr/php/detailTwo.php",{
        id:type,
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
        console.log($(".small img"));
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
    },"json")
    }
    // 3秒后关闭遮罩
    t = setInterval("layer.close(loadindex)", 3000);
    $(".middle>img").attr("src",$(".small .active").attr("src"))
    // 取随机数
    $(".random").text(parseInt(Math.random()*10000)+100+"条评论")