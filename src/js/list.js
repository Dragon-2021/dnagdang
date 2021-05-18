// 加载层
let loadindex = layer.load(1,{
    shade:[1,'#000']
})
var newbuyLi = document.querySelectorAll(".newbuy>ul>li")
var uls = document.querySelectorAll(".newbuy ul")
// console.log(newbuyLi);
// tab 切换
function Tab(className){
    // 获取元素
    this.tab = document.querySelector("."+className)
    this.ulis = this.tab.querySelectorAll(".have>li")
    this.great = this.tab.querySelectorAll(".dong ul")
    // this.olis = this.tab.querySelectorAll(".only-leftbig ul li")
    // console.log(this.ulis,this.olis);
    this.right =this.tab.querySelector(".rights")
    this.left =this.tab.querySelector(".lefts")
}
Tab.prototype.init = function(){

    for(let i=0;i<this.ulis.length;i++){
        this.ulis[i].onmouseover = ()=>{
            for(var j=0;j<this.ulis.length;j++){
                this.ulis[j].className = ""
                this.great[j].className = ""
            } 
            // All(i+1)
            this.ulis[i].className = "active"  
            this.great[i].className = "active" 
            // console.log(this.great);
            
        }
    }
    this.right.onclick = ()=>{
        if(this.great[0].className){
            this.great[0].className = ""
            this.great[1].className ="active"
            this.ulis[0].className=""
            this.ulis[1].className ="active"
        }else{
            this.great[0].className = "active"
            this.great[1].className =""
            this.ulis[0].className="active"
            this.ulis[1].className =""
        }
        
    }
    this.left.onclick = ()=>{
        
        if(this.great[0].className){
            this.great[0].className = ""
            this.great[1].className ="active"
            this.ulis[0].className=""
            this.ulis[1].className ="active"
        }else{
            this.great[0].className = "active"
            this.great[1].className =""
            this.ulis[0].className="active"
            this.ulis[1].className =""
        }
    }
}
var tables = new Tab("alltwo-eight")
tables.init()


// 鼠标移入显示边框
for(let i=0;i<newbuyLi.length;i++){
    
    newbuyLi[i].onmouseover = function(){
        var left = newbuyLi[i].querySelector(".left")
        var right = newbuyLi[i].querySelector(" .right")
        var tops = newbuyLi[i].querySelector(" .top")
        var bottom = newbuyLi[i].querySelector(" .bottom")
            tops.style.width=222 + "px"
            bottom.style.width=222 + "px"
            left.style.height=310 + "px"
            right.style.height=310 + "px"
    }
    newbuyLi[i].onmouseout = function(){
        var left = newbuyLi[i].querySelector(".left")
        var right = newbuyLi[i].querySelector(" .right")
        var tops = newbuyLi[i].querySelector(" .top")
        var bottom = newbuyLi[i].querySelector(" .bottom")
            tops.style.width=0 
            bottom.style.width=0 
            left.style.height=0 
            right.style.height=0 
    }
   
}
// 封装渲染函数
function All(url,length,ul){            //地址，所有li长度，ul个数
    promiseAjax({
        url:url,
    //     data:{
    //     pid:num
    // }
    }).then(res=>{
        // console.log(res);
        for(var i=0;i<res.length;i++){
            for(let j=0;j<newbuyLi.length;j++){
                var url  =res[j].url.split('====')
                var str="";
                str +=`
                <a href="http://localhost/dangdang/src/detail.html?id=${res[j].id}&index=1">
                <img src=${url[0]} alt="">
                </a>
                <p>${res[j].name}</p>
                <p class="price">${res[j].price}<span>${res[j].price2}</span></p>
                <div class="top" style="overflow:hidden; width:0;"></div>
                <div class="right" style="overflow:hidden; height:0;"></div>
                <div class="bottom" style="overflow:hidden; width:0;"></div>
                <div class="left" style="overflow:hidden; height:0;"></div>
            `
            newbuyLi[j].innerHTML = str
            // ul[i].querySelectorAll("li")[j].innerHTML = str
            }
                 
        }
           // 关闭加载层
           layer.close(loadindex)
    })
     
}
All("http://localhost/dangdang/src/php/list.php",newbuyLi.length,uls)
// 封装渲染函数end
// 点击滚动到一定距离
$flag  = true
$(".fix9").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:0},1000,function(){
            $flag = true
        });
    }
    return false
})
$(".fix1").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:212},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix2").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:1059},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix3").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:1735},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix4").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:2411},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix5").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:3087},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix6").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:3763},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix7").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:4439},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
$(".fix8").click(function(){
    if($flag){
        $flag = false
        $("html,body").animate({scrollTop:5115},1000,function(){
            $flag = true
        });
        
    }
    return false;
})
// 点击滚动到一定距离 end

// 跳转商品详情页
