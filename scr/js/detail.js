var title = document.querySelector("title")
console.log(title); 
// title.innerText = "" title的标题
// 320 160 800 400比例
// 放大镜start
// 回到顶部
var tops= document.querySelector(".tops a" )
$(".small img").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $('.middle>img').attr("src",$(this).attr("src"))
    $(".big>img").attr("src",$(this).attr("src"))
})
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
    var timeId = setInterval(function(){
        document.documentElement.scrollTop -= 100
        if(document.documentElement.scrollTop<=0){
            clearInterval(timeId)
        }
    },50)
   

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


