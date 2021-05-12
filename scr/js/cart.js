let loadindex = layer.load(2,{
    shade:[1,"#000"]
})
var username = tool.getCookie('name');
// console.log(username);
if(username){
    var str=`
    <span>欢迎${username}<a href="login.html" class="getout">退出</a></span>
    `

$(".submit_left").html(str)
$(".submit_left .getout").click(function(){
    tool.removeCookie('name');
    layer.confirm('你确认要退出吗？', {
            btn: ['残忍离开','我再想想'] //按钮
        }, function(){
            layer.msg('退出成功', {
                icon: 1,
                time:1500
            },function(){
                tool.removeCookie('name');
                var str = `
                <span>欢迎光临当当，请<a href="login.html">登录</a></span>
                `
                $('.submit_left').html(str)
            });
        }, function(){
            layer.msg('取消退出', {
                time: 1500, 
            });
        });
        return false;
})
}else{
    // 没有登录
    layer.msg("请先登录",{
        icon:2,
        time:1500,
    },function(){
        localStorage.setItem("url",location.href)
        location.href = "login.html";
    })
}
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
// console.log(index,fir,oller);
// 获取数据
var data = localStorage.getItem("data")
if(!data){
    // 没有添加过购物车
    // 显示没有东西-赶快挑选
    $(".cart").css({display:"none"})
    $(".nobody").css({display:"block"})
}else{
    // 将数据转数组
    let arr = JSON.parse(data)
    // 将当前用户的商品筛选出来
    let currentArr = arr.filter(goods=>goods.username === username)
    console.log(currentArr);
    // 改
    if(!currentArr.length){
        $(".cart").css({display:"none"})
        $(".nobody").css({display:"block"})
        
    }
    // 使用map方法将数组中所有goodsid获取到
    let idsArr = currentArr.map(goods=>goods.goodsid)
    // 将所有商品id做成字符串
    let idsStr = idsArr.join(",")
    console.log(idsStr);
    // 根据这个数据到数据库中查询所有商品的其他信息
    if(fir){
        $.get('php/cart.php',{ids:idsStr},res=>{
           
            Start()
            // 开始给每一行赋总价
            // console.log(res);
            let {meta:{status,msg},data} = res;
            if(status===0){
            // 将本地存储中的数量放到请求回来的数据中
            data.forEach(goods=>{
                currentArr.forEach(currentGoods=>{
                    if(goods.id === currentGoods.goodsid){
                        goods.number = currentGoods.number
                    }
                })
            })
            // 遍历数据渲染页面
            let str =''
            data.forEach(goods=>{
                // console.log(goods);
                str+=`
                <tr>
                    <td style="width: 63px;">
                        <input type="checkbox" class="c1">
                    </td>
                    <td style="width: 102px;  padding: 20px 20px 20px 0;">
                        <img src="${goods.url.split('====')[0]}" alt="">
                    </td>
                    <td style="width: 220px;">	
                    ${goods.name}</td>
                    <td style="width: 160px;">
                        <p>¥<span>${goods.price.slice(1)}</span></p>
                        <p>限时抢</p>
                    </td>
                    <td style="width: 160px;">
                        <span>
                            <a href="javascript:;" class="bdd">-</a>
                            <input type="text" value="${goods.number}" class="number">
                            <a href="javascript:;" class="add">+</a>
                        </span>
                    </td>
                    <td style="width: 160px;">
                        <p>￥<span class="prices">${parseFloat(goods.number * goods.price.slice(1)).toFixed(2)}</span></p>
                    </td>
                    <td style="width: 90px;" data-id="${goods.id}">
                    <span class="delete">删除</span>
                    </td>
                </tr>
           
                `
                // console.log(goods.id);
        
            })
            $('.more .tbody1').html(str)
            }
            Of()
            // 判断是否超过最大值或者小于最小值
            All()
            // 调用所有需要用到的函数
            // 关闭遮罩
            layer.close(loadindex)
        },"json")
    }
    // 判断是不是首页表二的请求
    if(oller){
        $.get('php/cartTwo.php',{ids:idsStr},res=>{
           
            Start()
            // 开始给每一行赋总价
            // console.log(res);
            let {meta:{status,msg},data} = res;
            if(status===0){
            // 将本地存储中的数量放到请求回来的数据中
            data.forEach(goods=>{
                currentArr.forEach(currentGoods=>{
                    if(goods.id === currentGoods.goodsid){
                        goods.number = currentGoods.number
                    }
                })
            })
            // 遍历数据渲染页面
            let str =''
            data.forEach(goods=>{
                // console.log(goods);
                str+=`
                <tr>
                    <td style="width: 63px;">
                        <input type="checkbox" class="c1">
                    </td>
                    <td style="width: 102px;  padding: 20px 20px 20px 0;">
                        <img src="${goods.url.split('====')[0]}" alt="">
                    </td>
                    <td style="width: 220px;">	
                    ${goods.name}</td>
                    <td style="width: 160px;">
                        <p>¥<span>${goods.price.slice(1)}</span></p>
                        <p>限时抢</p>
                    </td>
                    <td style="width: 160px;">
                        <span>
                            <a href="javascript:;" class="bdd">-</a>
                            <input type="text" value="${goods.number}" class="number">
                            <a href="javascript:;" class="add">+</a>
                        </span>
                    </td>
                    <td style="width: 160px;">
                        <p>￥<span class="prices">${parseFloat(goods.number * goods.price.slice(1)).toFixed(2)}</span></p>
                    </td>
                    <td style="width: 90px;" data-id="${goods.id}">
                    <span class="delete">删除</span>
                    </td>
                </tr>
           
                `
                console.log(goods.id);
        
            })
            $('.more .tbody2').html(str)
            }
            Of()
            // 判断是否超过最大值或者小于最小值
            All()
            // 调用所有需要用到的函数
             // 关闭遮罩
             layer.close(loadindex)
        },"json")
    }
    // 判断是不是列表页的表
    if(index){
        $.get('php/cartList.php',{ids:idsStr},res=>{
           
            Start()
            // 开始给每一行赋总价
            // console.log(res);
            let {meta:{status,msg},data} = res;
            if(status===0){
            // 将本地存储中的数量放到请求回来的数据中
            data.forEach(goods=>{
                currentArr.forEach(currentGoods=>{
                    if(goods.id === currentGoods.goodsid){
                        goods.number = currentGoods.number
                    }
                })
            })
            // 遍历数据渲染页面
            let str =''
            data.forEach(goods=>{
                // console.log(goods);
                str+=`
                <tr>
                    <td style="width: 63px;">
                        <input type="checkbox" class="c1">
                    </td>
                    <td style="width: 102px;  padding: 20px 20px 20px 0;">
                        <img src="${goods.url.split('====')[0]}" alt="">
                    </td>
                    <td style="width: 220px;">	
                    ${goods.name}</td>
                    <td style="width: 160px;">
                        <p>¥<span>${goods.price.slice(1)}</span></p>
                        <p>限时抢</p>
                    </td>
                    <td style="width: 160px;">
                        <span>
                            <a href="javascript:;" class="bdd">-</a>
                            <input type="text" value="${goods.number}" class="number">
                            <a href="javascript:;" class="add">+</a>
                        </span>
                    </td>
                    <td style="width: 160px;">
                        <p>￥<span class="prices">${parseFloat(goods.number * goods.price.slice(1)).toFixed(2)}</span></p>
                    </td>
                    <td style="width: 90px;" data-id="${goods.id}">
                    <span class="delete">删除</span>
                    </td>
                </tr>
           
                `
                console.log(goods.id);
        
            })
            $('.more .tbody3').html(str)
            }
            Of()
            // 判断是否超过最大值或者小于最小值
            All()
            // 调用所有需要用到的函数
             // 关闭遮罩
             layer.close(loadindex)
        },"json")
    }
}
function Start(){
    $(".number").val($(".number").val()-0+1)
    $p =$(".number").val()
    $price = $(".add").parent().parent().next().children().children(".prices")
    $noChange =$(".add").parent().parent().prev().children().children("span").text()
    $price.text(parseFloat($noChange * $p -0).toFixed(2))
}
function Of(){
   
    if($(".add").prev().val()>=10){
        $(".add").prev().val(10)
        return false
    }
    if($(".bdd").next().val()<=1){
            $(".bdd").next().val(1)
            return false
    }
}

function All(){
    $(".alls").change(function(){
        $all = 0
        if($(this).is(":checked")){
            $(".more .prices").each(function(i,v){
               $all += $(v).text() -0
            })
           
            $(".more :checkbox").prop({
                checked:true
            })
        }
        if(!($(this).is(":checked"))){
            $(".more .prices").each(function(i,v){
              
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
        if($(this).prev().val()>=10){
            $(this).prev().val(10)
            return false
        }
        $all = 0
        $(this).prev().val($(this).prev().val()-0+1)
        $p =$(this).prev().val()
        $price = $(this).parent().parent().next().children().children(".prices")
        $noChange =$(this).parent().parent().prev().children().children("span").text()
        $price.text(parseFloat($noChange * $p -0).toFixed(2))

        // 数量加
        let number = $(this).prev().val()-0
        // console.log(number);
            if(number>=10){
                number=10
            }
            $(this).prev().val(number)
            var data = localStorage.getItem('data')
            var arr = JSON.parse(data)
            // 获取当前商品的id
            var currentId = $(this).parent().parent().siblings().last().attr('data-id')
            // 从数组中找到当前商品那个对象
            // console.log(data,currentId);

            var obj = arr.find(goods=>goods.goodsid === currentId)
            // 操作数量
            obj.number = number
            // 存进去
            localStorage.setItem('data',JSON.stringify(arr))
        $(".prices").each(function(i,v){
            // console.log($(v).parent().parent().parent().children().children(".c1").is(":checked"));
            if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
                $all +=v.innerText-0
            }
             // 数量加
            
            // 选中
            // $all +=v.innerText-0
        })
        $(".allPrice").text($all)   
    
    })
    $(".bdd").click(function(){
        $bll = 0
        if($(this).next().val()<=1){
            $(this).next().val(1)
            return false
        }
        $(this).next().val($(this).next().val()-0-1)
        $p =$(this).next().val()
        $price = $(this).parent().parent().next().children().children(".prices")
        $noChange =$(this).parent().parent().prev().children().children("span").text()
        $price.text(parseFloat($noChange * $p -0).toFixed(2))
        // 数量减
        let number = $(this).next().val()-0
        
        if(number<=1){
            number=1
        }
        $(this).prev().val(number)
        var data = localStorage.getItem('data')
        // console.log(data);
        var arr = JSON.parse(data)
        // 获取当前商品的id
        var currentId = $(this).parent().parent().siblings().last().attr('data-id')
        // 从数组中找到当前商品那个对象
        var obj = arr.find(goods=>goods.goodsid === currentId)
        // 操作数量
        obj.number = number
        // 存进去
        localStorage.setItem('data',JSON.stringify(arr))
        $(".prices").each(function(i,v){
            if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
                $bll +=v.innerText-0
            }
            // $bll +=v.innerText-0
        })
        // 数量减
        
        $(".allPrice").text($bll) 
    })
    // 价格变化
    
    $(".delete").mouseover().css({
        cursor:"pointer"
    })
    $(".delete").click(function(){
        layer.confirm('你确定要删除吗？',{
            btn:['确定','取消']
        },()=>{
            $(this).parent().parent().remove()
            if(!($(".more tbody").length)){
                $(".cart").css({display:"none"})
                $(".nobody").css({display:"block"})
            }else{
                $(".cart").css({display:"block"})
                $(".nobody").css({display:"none"})
            }
            var data = localStorage.getItem('data')
            var arr = JSON.parse(data)
            var currentId = $(this).parent().attr('data-id')
            // 从数组中找到当前商品那个对象对应的下标
            var index = arr.findIndex(goods=>goods.goodsid === currentId)
            arr.splice(index,1)
            // 重新存
            localStorage.setItem("data",JSON.stringify(arr))
            // total()
            layer.msg("删除成功",{
                time:1500,
                icon:1
            })
            let currentArr = arr.filter(goods=>goods.username === username)
            if(!currentArr.length){
                $(".cart").css({display:"none"})
                $(".nobody").css({display:"block"})
            }
        })
    })
    // 删除


    // // 计算总价
    // function total(){

    // }
    // 数字输入
    $('.number').blur(function(){
        if(isNaN($(this).val())){
            $(this).val(1)
        }
        $(this).parent().parent().next().children().children(".prices").text($(this).val()*$(this).parent().parent().parent().children("td:eq(3)").children().children("span").text())
        $all =0
        // 本地存储
        let number = $(this).val()-0
        
        if(number<=1){
            number=1
        }else if(number>=10){
            number =10
        }
        $(this).val(number)
        var data = localStorage.getItem('data')
        // console.log(data);
        var arr = JSON.parse(data)
        // 获取当前商品的id
        var currentId = $(this).parent().parent().siblings().last().attr('data-id')
        // 从数组中找到当前商品那个对象
        var obj = arr.find(goods=>goods.goodsid === currentId)
        // 操作数量
        obj.number = number
        // 存进去
        localStorage.setItem('data',JSON.stringify(arr))

        $(".prices").each(function(i,v){
            if($(v).parent().parent().parent().children().children(".c1").is(":checked")){
                $all +=v.innerText-0
            }
            // 选中
            // $all +=v.innerText-0
        })
        $(".allPrice").text($all) 
    })
    // 清空购物车
    $(".allDel").click(function(){
        let confirmindex = layer.confirm('你确定要把所有商品清空吗(不建议此操作)?',{
            btn:['确定','取消']
        },function(){
            // 将本地存储中当前用户的数据删除
            var data = localStorage.getItem('data')
            var arr = JSON.parse(data)
            // 从arr中将不属于当前用户的数据筛选出来
            var brr = arr.filter(goods=>goods.username !== username)
            // 重新存
            localStorage.setItem('data',JSON.stringify(brr))
            $("tbody").remove()
            $(".cart").css({display:"none"})
            $(".nobody").css({display:"block"})
            layer.msg('删除成功',{
                time:1500,
                icon:1
            })
        })
           
        })
        $(".goIndex").click(function(){
            window.open('home.html');
        })    
}

 // 3秒后关闭遮罩
 t = setInterval("layer.close(loadindex)", 3000);