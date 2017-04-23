var data={
    inputData:"",
    inputDataRR:"",
    textareaData:"",
    checked:[],
    checked2:"",
    a:"aaaa",
    b:"bbbb",
    radio:false,
    radio3:"",
    select1:"",
    select2:"",
    select3:[],
    select4:{},
};
var app=new Vue({
    el:'#app',
    data:data,
    computed:{
        inputDataR:{
            set:function(value){
                this.inputDataRR=value.split("").reverse().join("");
            },
            get:function(){
                return this.inputDataRR;
            }
        }
    }
});