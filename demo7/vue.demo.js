Vue.component('app-component2',{
    template:'<h2>MMMiao??</h2>'
});//全局定义
var appComponent={
    template:'#someId'//定义模板的时候也可以指向一个id，注意要用template作为root，否则会显示在页面上
};//局部定义
var appComponent3={
    template:'<h4>\
    {{message}}\
    </h4>',
    data:function(){
        return {
            message:"appComponent3"
        };
    },
    //data必须要是一个函数返回对象，否则vue会弹出错误提示。这是因为每一个组件实例必须要有自己的内部空间，如果使用外部定义的一个data，会导致所有组件的信息是一样的
    /*data:{
        message:"appComponent3"
    }*/
};
var appComponent6={
    template:'<p>来自外部的消息：{{message}}</p>',
    props:['message'],
    data:function(){
        return {};
    }
};
var appComponent9={
    template:'<button v-on:click="add" v-on:cut_counter="counter--">{{counter}}</button>',
    methods:{
        add:function(){
            this.counter++;
            this.$emit("add_counter",1);//注意这里的命名,事件最好不要有大写和-否则某些情况无法触发Vue给出警告
        }
    },
    data:function(){
        return {
            counter:0
        };
    }
};
var appAlert={
    template:'<div v-show="show"><slot><strong>new Message：</strong>message</slot> <a href="" @click.prevent="show=false" style="color:red">close</a></div>',
    data:function(){
        return {
            show:true
        };
    }
};
var appAlertMul={
    template:'<div style="padding:10px;background-color:#f5f5f5;margin-bottom:10px" v-show="show"><p><strong><slot name="title">new Message</slot></strong></p><p><slot name="msg">message</slot></p><a href="" @click.prevent="show=false" style="color:red">close</a></div>',
    data:function(){
        return {
            show:true
        };
    }
};
var componentData1={counter:0};
var app=new Vue({
    el:'#app',
    data:{
        message:'hello Vue!!',
        counter:0,
        alertType:appAlert,
    },
    methods:{
        addCounterApp:function(param){
            this.counter+=param;
        },
        changeAlertType:function(){
            if(this.alertType===appAlert){
                this.alertType=appAlertMul;
            }
            else{
                this.alertType=appAlert;
            }
        }
    },
    components:{
        appComponent:appComponent,
        /**也可以使用一下的写法，根据标准
         * 组件名使用kebab-case
         * 在定义时也可以使用驼峰命名camelCase，也可以用TitleCase，vue会自动处理
         */
        //以下也合法，看个人习惯
        AppComponent3:appComponent3,
        'app-component4':{
            template:'<button v-on:click="counter++">{{counter}}</button>',//注意一下，如果要用到data里的数据，不可以直接写onclick="counter++"，需要用v-on:click
            data:function(){
                return componentData1;
            }
        },
        'app-component5':{
            template:'<button v-on:click="counter++">{{counter}}</button>',
            data:function(){
                return {counter:0};
            }
        },
        'app-component6':appComponent6,
        'app-component7':{
            template:'<div style="line-height:0px"><span>喵喵喵?这里是父组件，下面我儿子</span><br><child v-bind:message="messageP"></child></div>',//这里在引用message-p时应该转化为驼峰格式或title格式
            //还要注意，template必须要有一个root元素，这里是div，不可以span和child直接写，Vue会报错
            components:{//必须声明子组件的名字，直接在模板里用Vue找不到
                child:appComponent6
            },
            props:['message-p'],//注意这里必须都是小写啊，不然会出现找不到的情况（html属性要求都是小写）
            
        },
        'app-component8':{
            template:'<div style="color:red">只能数字通过：{{numberData}}，这里是文本：{{stringData}}</div>',
            props:{//注意这里必须都是小写啊，不然会出现找不到的情况（html属性要求都是小写，或者用kebab格式）
                numberData:Number,//null为都通过，如果传入不符合，Vue会给出警告，这对使用者有很大的好处（还是会显示）
                stringData:{
                    //可以用type，也可以用validator来自定义校验
                    //type:String,
                    validator:function(value){
                        return value.length>4;
                    },
                    default:"没传值我是default"//默认值
                }
            },
        },
        'app-component9':appComponent9,
        'app-alert':appAlert,
        'app-alert-mul':appAlertMul,
    }
});
