var data={
    message:'Hello World!!',
    typeNumber:12,
    typeFloat:12.234,
    typeFunction:function(params) {
        alert(1);
    },
    typeArray:[1,2,3],
    typeDate:new Date(),
    typeObject:{a:1,b:2},
};
var app=new Vue({
    el:'#app',
    data:data,
});
//我们分别改变一下data.message和app.message看看？
data.message="Hello??";
alert("改变了data.message\n"+"data.message:"+data.message+"\n"+"app.message:"+app.message);
app.message="Hello Vue!!";
alert("改变了app.message\n"+"data.message:"+data.message+"\n"+"app.message:"+app.message);
/**
 * 显然我们改变app.message等同于改变了data.message
 * 改变data.message也影响到了app.message
 * app代理了data，或者说app引用了data里的数据（app是data的代理）
 */


//我们console.log一下app
console.log(app);
/**
 * 可以看到$开头的，这是vue对外开放的属性和方法
 * $data就是我们的data，$el就是我们#app
 * 
 * 思考：是否可以动态的去改变$data呢？我们试一下
 */
app.$data={"message":"1"};//恩Vue报错了，给出了警告，看来我们不能直接修改data的引用

//接下来我们动态改变一下message
setInterval(function() {
    if(app.message.length<15)app.message+="!";
}, 1000);

//作死清除一下app的innerHTML看看吧！
//document.getElementById("app").innerHTML="";
//恩全没了，也不会重新构造，慎重啊，这里我们注释掉吧！