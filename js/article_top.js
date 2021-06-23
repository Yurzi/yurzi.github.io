function article_top() {
    //判断本次页面是否是文章，在我的hexo中，文章的页面是html的地址，是经过设置的，如果是初始的话，我记得好像是md结尾的，这里读者自行设置。
    //console.log(window.location.pathname)
    //打印出来的结果是http://localhost:4000/dayuhaitang.html中的dayuhaitang.html
    var pathname = window.location.pathname
    //获取我的头部的高度，下面会用到
    var height = $(".header").css("height");
    //判断是否是文章的页面
    if (pathname.indexOf("/") &gt; 1&amp;&amp;pathname.indexOf("posts")==0) {
        //使用animate函数进行动态的滚动效果
        //2018.12.7进行修改，将下面的$("html,body")改为了$("html,article")，因为页面中有fixed的div，会影响到他们~
        $("html,article").animate({ scrollTop: height }, 500)
    }
}
//给滚动效果的函数设定timeout函数，这个函数有很大的作用，在下面我会详细的讲解。
setTimeout(article_top, 800);