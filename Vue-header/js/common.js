$(function(){

    Vue.component("my-header",{
        template : '<ul class="header_content">'+
            '<li class="logo"><img src="img/logo.png" alt="logo"></li>'+
            '<div class="header_right">'+

            '<li v-bind:class="{active:(index==isActive)}" v-for="(nav,index) in navs"><a href="javascript:void(0)">{{nav}}</a></li>'+
            '<li style="width:200px;">电话：15212368523</li>'+
            '</div>'+
            '</ul>'
        ,
        data:function(){
            return{
                navs: ["首页", "案例展示", "产品展示", "新闻资讯", "联系我们", "个人中心"],
                isActive:isActive

            }
        },
    })
    Vue.component("my-footer",{
        template : '<div class="footer_content">'+
            '<div class="footer_left">'+
            '<p>联系我们</p>'+
            '<p>企业QQ：673516554</p>'+
            '<p>企业邮箱：2545645187@qq.com</p>'+
            '</div>'+
            '<div class="footer_right">'+
            ' <ol v-for="foot of footers">'+
            '<li><h2>{{foot.texts}}</h2></li>'+
            '<li v-for="foote of foot.text">{{foote}}</li>'+
            '</ol>'+
            '<div class="ewm">'+
            '<p>Vue信息</p>'+
            '<img src="img/logo.png" alt="logo">'+
            '</div>'+
            '</div>'+
            ' </div>'
        ,
        data:function(){
            return{
                footers:[
                    {text:["文档一","文档二","文档三","文档四"],texts:"标题一"},
                    {text:["文档一","文档二","文档三","文档四"],texts:"标题一"},
                    {text:["文档一","文档二","文档三","文档四"],texts:"标题一"},
                    {text:["文档一","文档二","文档三","文档四"],texts:"标题一"},
                    {text:["文档一","文档二","文档三","文档四"],texts:"标题一"}

                ]
            }
        },
    })
    var header = new Vue({
        el:"#header",
        data:{

        }
    })
    var footer = new Vue({
        el:"#footer"
    })

})