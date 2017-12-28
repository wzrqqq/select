new Vue({
    el:'#root',
    data:{
        list:[
            {id:1,title:11111},
            {id:2,title:22222},
            {id:3,title:33333},
            ],
        state:false,
        title:''
    },
    methods:{
        event(){
            this.state = true;
        },
        custom(item){
           this.title = item;
           this.state = false;
           console.log(this.title)
        }
    }
})