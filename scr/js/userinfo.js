var user = tool.getCookie('name');
// console.log(user);
if(user){
    var str=`
    <span>欢迎${user}<a href="login.html" class="getout">退出</a></span>
    `
}
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