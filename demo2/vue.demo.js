var data={
    message:'Hello Vue!!Yahaha',
    messageWatcher:"",
    html1:'<h1>Hello Vue!!</h1>',
    isGreen:false,
    isBold:false,
    fontSize:14,
    lineHeight:10,
    appFunc1:function(param){
        return param+1;
    }
};
var app=new Vue({
    el:'#app',
    data:data,
    methods:{
        appFunc2:function(param){
            return this.message+param;
        }
    },
    computed:{
        appFunc3:function(){
            return this.message+this.message.split("").reverse().join("");
        },
        appFunc4:{
            get:function(){
                return this.message.split("").join(" ");
            },
            set:function(value){
                this.message=value.split("").reverse().join("");
            }
        },
        messageClass:function(){
            var re={red:false,bold:false};
            if(this.message.indexOf("red")>-1)re.red=true;
            if(this.message.indexOf("bold")>-1)re.bold=true;
            return re;
        }
    },
    watch:{
        message:function(value){
            this.messageWatcher=value+" from watch";
        }
    }
});