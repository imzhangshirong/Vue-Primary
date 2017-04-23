var data={
    counter:0,
    add:function(){
        this.counter++;
    },
};
var app=new Vue({
    el:'#app',
    data:data,
    methods:{
        add2:function(){
            this.counter++;
        },
        add3:function(param,p2){
            //可以在传入event时使用$event这个表示原始event对象
            console.log(p2);
            this.counter+=param;
        },
        aalert:function(){
            alert("本来要跳的！我不");
        }
    }
});