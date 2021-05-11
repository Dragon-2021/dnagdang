
    let loadindex = layer.load(0,{
        shade:[1,"#000"]
    })
    var greatullis =document.querySelectorAll(".only-left .great li");
    // console.log(greatullis);
    var great  =document.querySelector(".only-left .great")
    var greatul = document.querySelectorAll(".only-left .only-block ul")
// 表2
    var greatullis2 =document.querySelectorAll(".only-left2 .great li");
    var great2  =document.querySelector(".only-left2 .great")
    var greatul2 = document.querySelectorAll(".only-left2 .only-block ul")
    // console.log(greatul);
    // console.log(greatullis);
    var boldall = document.querySelector(".bold .boldall")
    var boldallMore = boldall.querySelector(".oldallMore")
    var boldlis = document.querySelectorAll(".bold ul li a");

    // 回到顶部
    var tops= document.querySelector(".tops a" )
    // console.log(top);
    for(let i=1;i<boldlis.length;i++){
            boldlis[i].onmousemove=function(){
            boldlis[i].style.color="red"
        }
        boldlis[i].onmouseout=function(){
            boldlis[i].style.color="#333"
        }
    }


// 轮播图
function Carousel(className){
    this.box = document.querySelector("."+className)
    this.ulis = this.box.querySelectorAll("ul li")
    this.olis = this.box.querySelectorAll("ol li")
    this.leftBtn = this.box.querySelector(".leftBtn") 
    this.rightBtn = this.box.querySelector(".rightBtn") 
    this.timeId = null;
    this.auto();
    this.index = 0;
}
// 移动
Carousel.prototype.move = function(){
    if(this.index === this.ulis.length){
        this.index = 0
    }
    if(this.index<0){
        this.index =this.ulis.length-1
    }
    for(let i=0;i<this.ulis.length;i++){
        this.ulis[i].className = this.olis[i].className = ""
    }
    this.ulis[this.index].className = this.olis[this.index].className = "active"
}
// 右移函数
Carousel.prototype.rightMove = function(){
    this.index++
    this.move()
}
// 自动轮播
Carousel.prototype.auto = function(){
    this.timeId = setInterval(()=>{
        this.rightMove()
    },2000)
}
Carousel.prototype.init = function(){
    
    for(let i=0;i<this.ulis.length;i++){
        this.olis[i].onmouseover = ()=>{
           this.index = i
           this.move()
        }
    }
    this.box.onmouseout = ()=>{
        this.auto()
    }
    this.box.onmouseover = ()=>{
        clearInterval(this.timeId)
    }
}
var car = new Carousel("carousel")
car.init()


// 滑动轮播
function Box(className){
    this.box = document.querySelector("."+className)
    this.ol = this.box.querySelector("ol")
    this.ul = this.box.querySelector("ul")   
    this.left = this.box.querySelector(".left")
    this.right = this.box.querySelector(".right")
    this.index = 1
    this.flag = true
    this.timeId;
    this.firstli = this.ul.children[0].cloneNode(true)
    this.lastli = this.ul.lastElementChild.cloneNode(true)
    this.ul.appendChild(this.firstli);
    this.ul.insertBefore(this.lastli,this.ul.children[0])
    this.ul.style.left = -this.firstli.offsetWidth + "px"
    this.length = this.ul.children.length
    // this.auto()
}
// 定义move函数
Box.prototype.move = function(){
    animate(this.ul,{
        left: -this.index * this.firstli.offsetWidth 
    },()=>{
        // console.log(this)
        if(this.index == 0){
            this.index = this.length-2
            this.ul.style.left =  -this.index * this.firstli.offsetWidth +"px"
        }
        if(this.index == this.length-1){
            this.index =1
            this.ul.style.left =  -this.index * this.firstli.offsetWidth +"px"
        } 
        for(let j=0;j<this.ol.children.length;j++){
            this.ol.children[j].className = ""
        }  
        this.ol.children[this.index-1].className = "active"
        // console.log(this)
        this.flag = true
    })
}

// 右移函数
Box.prototype.rightMove = function(){
    if(!this.flag){
        return false;
    }
   
    this.flag = false
    this.index++
    this.move()
}
Box.prototype.init = function(){
    this.right.onclick = ()=>{
    this.rightMove()
    }
    // 左移函数
    this.left.onclick = ()=>{
        if(!this.flag){
            return false;
        }
        this.flag = false
        this.index--
        this.move()
    }
    // 小圆点
    for(let i =0;i<this.ol.children.length;i++){
        this.ol.children[i].onmouseover = ()=>{
            // onclick
            if(!this.flag){
            return false;
        }   
        this.flag = false
        this.index = i+1
        this.move()
        }
    }
        // 鼠标移入移出
    // this.box.onmouseover = ()=>{
    //     clearInterval(this.timeId)
    // }
    // this.box.onmouseout = ()=>{
    //     this.auto()
    // }
    }
// 自动轮播
// Box.prototype.auto = function(){
//     this.timeId = setInterval(()=>{
//         this.rightMove()
//     },1000)
// }


var b = new Box("box")
b.init()
var c = new Box("box2")
c.init()

// 新书热卖榜效果
var appear = document.querySelector(".appear");
var bigsmallP = document.querySelector(".bigsmall p")
var bigsmallLi = document.querySelector(".bigsmall li")
bigsmallLi.onmouseover = function(){
    appear.style.display="block"
    bigsmallP.style.display = "none"
    
}
bigsmallLi.onmouseout = function(){
    appear.style.display = "none"
    bigsmallP.style.display = "block"
}
// 新书热卖榜效果end
// for(var i=0;i<greatul.length;i++){
//     greatul[i].style.display="none"
// }

// tab切换
function Tab(className){
    // 获取元素
    this.tab = document.querySelector("."+className)
    this.ulis = this.tab.querySelectorAll(".onlyone ul li")
    this.great = this.tab.querySelectorAll(".only-block ul")
    // this.olis = this.tab.querySelectorAll(".only-leftbig ul li")
    // console.log(this.ulis,this.olis);
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
            this.great[i].className = "great" 
            // console.log(this.great);
            
        }
    }
}
var tables = new Tab("only-left")
tables.init()
var tables2 = new Tab("only-left2")
tables2.init()
// 渲染
var num=0
promiseAjax({
    url:"http://localhost/dangdang/scr/php/home.php",
    // data:{
    //     pid:1
    // }
}).then(res=>{
    // console.log(res);
    // var str="";
    for(var i=0;i<res.length;i+=10){
        for(let j=0;j<greatullis.length;j++){
            var url  =res[j+i].url.split('====')
            var str="";
            str +=`
            <a href="http://localhost/dangdang/scr/detail.html?id=${res[j+i].id}&fir=1">
            <img src=${url[0]} alt="">
            </a>
            <p class="only-first">${res[j+i].name}</p>
            <span class="dd">当当独家特供</span>
            <p class="only-second">
                <span>${res[j+i].price}</span>
                <span><del>${res[j+i].price2}</del></span>
                <span>${res[j+i].price3}</span>
            </p>
        `
        greatul[i/10].querySelectorAll("li")[j].innerHTML = str
        }
        // greatullis[i].innerHTML = str
        num++
        if(num===2){
            layer.close(loadindex)
        }
    }
})

// 封装渲染函数
function All(url,length,ul){            //地址，所有li长度，ul个数
    promiseAjax({
        url:url,
       
    }).then(res=>{

        for(var i=0;i<res.length;i+=10){
            for(let j=0;j<length;j++){
                var url  =res[j+i].url.split('====')
                var str="";
                str +=`
                <a href="http://localhost/dangdang/scr/detail.html?id=${res[j+i].id}&oller=1">
                <img src=${url[0]} alt="">
                </a>
                <p class="only-first">${res[j+i].name}</p>
                <span class="dd">当当独家特供</span>
                <p class="only-second">
                    <span>${res[j+i].price}</span>
                    <span><del>${res[j+i].price2}</del></span>
                    <span>${res[j+i].price3}</span>
                </p>
                `
            ul[i/10].querySelectorAll("li")[j].innerHTML = str
            }
        }
    })
    num++
    if(num===2){
        layer.close(loadindex)
    }
}
// 封装渲染函数end
All('http://localhost/dangdang/scr/php/homeGood.php',greatullis2.length,greatul2)
// 区域滚动
$off =true
$(".fix7").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:0},1000,function(){
            $off =true
        })
    }
    return false
    // animation()参数1.对象    参数2.事件      参数3.回调函数(可选)
})
$(".fix1").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:140},1000,function(){
            $off =true
        })
    }
    
    return false
})
$(".fix2").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:290},1000,function(){
            $off =true
        })
    }
    return false
})
$(".fix3").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:615},1000,function(){
            $off =true
        })
    }
    return false
})
$(".fix4").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:1200},1000,function(){
            $off =true
        })
    }
    return false
})
$(".fix5").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:1975},1000,function(){
            $off =true
        })
    }
    return false
})
$(".fix6").click(function(){
    if($off){
        $off = false
        $("html,body").animate({scrollTop:2730},1000,function(){
            $off =true
        })
    }
    return false
})
// 当当首页跳转详情
// cookie

