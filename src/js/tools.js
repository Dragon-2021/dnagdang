// 简单运动封装的函数
function animate(ele,obj,fn){           //元素  对象    函数
    let k = 0
    let n = 0
    for(let attr in obj){
        k++
        let timerId = setInterval(function(){
            let target = obj[attr]
            // 获取left
            let currentStyle = getStyle(ele,attr)
            if(attr === 'opacity'){
                target *= 100
                currentStyle *= 100
            }
            currentStyle = parseInt(currentStyle)
            // 定义速度
            let speed = (target-currentStyle)/100
            // 这个速度是永远到不了目标的，无限的贴近目标 - 向上取整变成整数
            // 正小数就想上取整，负小数就应该向下取证
            if(speed>0){
                speed = Math.ceil(speed)
            }else{
                speed = Math.floor(speed)
            }
            // 增加left
            currentStyle += speed
            // 限制left
            if(currentStyle===target){
                // 设置left
                if(attr === 'opacity'){
                    ele.style[attr] = currentStyle/30    
                }else{
                    ele.style[attr] = currentStyle + "px"
                }
                currentStyle = target
                clearInterval(timerId)
                n++
                if(k===n){
                    fn()
                }
            }else{
                // 设置left
                if(attr === 'opacity'){
                    ele.style[attr] = currentStyle/100
                }else{
                    ele.style[attr] = currentStyle + "px"
                }
            }
            
        },1)    //一毫秒运动一次
    }
}
// 获取样式的函数
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }
}
function setStyle(ele,styleObj){
    for(var attr in styleObj){
        ele.style[attr] = styleObj[attr]
    }
}
function getRandom(a,b){
    var max = a;
    var min = b;
    if(a<b){
        max = b;
        min = a
    }
    var num = parseInt(Math.random() * (max-min)) + min
    return num
}
// 设置样式的函数

// 设置cookie的函数
function setCookie(key,value,seconds,path="/"){
    var data = new Date()
    var time = data.getTime()-8*3600*1000+seconds*1000
    data.setTime(time)
    document.cookie = `${key}=${value};expires=${date};path=${path}`
}

// 获取cookie封装
function getCookie(key){
    var arr = document.cookie.split("; ")
    for(var i=0;i<arr.length;i++){
        var brr = arr[i].split("=")
        if(brr[0] === key){
            return brr[1]
        }
    }
}

// 删除cookie的函数
function removeCookie(key,path="/"){
    setCookie(key,null,-1,path)
}