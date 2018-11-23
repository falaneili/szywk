require.config({
    // 根路径设置，paths下面全部都是根据baseUrl的路径去设置
    baseUrl: './js/',
    paths: {
        a: "back",
        b: "wow.min",
        c: "jquery.SuperSlide.2.1.1",
    },
    
    /*shim: { //依赖关系
        "a": ["jquery","c"] 
    } */


})
require(['a', 'b', 'c'], function (a, b, c) {
    $(function () {
        /*新闻滚动*/
        newsList()
        
        /*wow.js*/
        new WOW().init();

    });

})