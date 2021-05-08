$(".alls").change(function(){
    $all = 0
    if($(this).is(":checked")){
        $(".more .prices").each(function(i,v){
           $all += $(v).text() -0
        })
        // 
        $(".more :checkbox").prop({
            checked:true
        })
    }
    if(!($(this).is(":checked"))){
        $(".more .prices").each(function(i,v){
            // if($(v).parent().parent().parent().children("td:eq(0)").children(".c1").is(":checked")){
            //     $all += $(v).text() -0
            // }
            // $all += $(v).text() -0
         })
        //  
        $(".more :checkbox").prop({
            checked:false
        })
    }
    $(".allPrice").text($all)
})
$(".c1").change(function(){
    $flag=true
    $all = 0
    $(".more .c1").each(function(i,v){
        if($(v).is(":checked")==true){
            // $all 的值为prices的值
            $all +=$(v).parent().parent().children("td:eq(5)").children().children(".prices").text()-0
        }
        $(".allPrice").text($all)
        // 选中
        if($flag){
            if(!(v.checked)){
                $(".alls").prop({
                    checked:false
                    
                })
                $flag =false
                // return false
            }else{
                $(".alls").prop({
                    checked:true
                })
            }
        }
    })
    console.log($all);
    // $(".allPrice").text($all)
})
// 全选
$(".add").click(function(){
    $all = 0
    $(this).prev().val($(this).prev().val()-0+1)
    $p =$(this).prev().val()
    $price = $(this).parent().parent().next().children().children(".prices")
    $noChange =$(this).parent().parent().prev().children().children("span").text()
    $price.text($noChange * $p -0)
    
    $(".prices").each(function(i,v){
        // console.log($(v).parent().parent().parent().children().children(".c1").is(":checked"));
        if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
            $all +=v.innerText-0
        }
        // 选中
        // $all +=v.innerText-0
    })
    $(".allPrice").text($all)   

})
$(".bdd").click(function(){
    $bll = 0
    if($(this).next().val()==1){
        $(this).next().val(1)
        return false
    }
    $(this).next().val($(this).next().val()-0-1)
    $p =$(this).next().val()
    $price = $(this).parent().parent().next().children().children(".prices")
    $noChange =$(this).parent().parent().prev().children().children("span").text()
    $price.text($noChange * $p -0)
    $(".prices").each(function(i,v){
        if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
            $bll +=v.innerText-0
        }
        // $bll +=v.innerText-0
    })
    $(".allPrice").text($bll) 
})
// 价格变化

$(".delete").mouseover().css({
    cursor:"pointer"
})
$(".delete").click(function(){
    $(this).parent().parent().parent().remove()
    if(!($(".more tbody").length)){
        $(".cart").css({display:"none"})
        $(".nobody").css({display:"block"})
    }else{
        $(".cart").css({display:"block"})
        $(".nobody").css({display:"none"})
    }
})
// 删除
// 数字输入
$('.number').blur(function(){
    if(isNaN($(this).val())){
        $(this).val(1)
    }
    $(this).parent().parent().next().children().children(".prices").text($(this).val()*$(this).parent().parent().parent().children("td:eq(3)").children().children("span").text())
    $all =0
    $(".prices").each(function(i,v){
        if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
            $all +=v.innerText-0
        }
        // 选中
        // $all +=v.innerText-0
    })
    $(".allPrice").text($all) 
})
$(".allDel").click(function(){
    $("tbody").remove()
    $(".cart").css({display:"none"})
    $(".nobody").css({display:"block"})
})
$(".goIndex").click(function(){
    window.open('home.html');
})