Vue.component("inputdata",{
    props:['title'],
    template:`<input type="text" @focus="changestate" v-model="title">`,
    methods:{
        changestate(){
            this.$emit('event')
        }
    }
},)

Vue.component("listdata",{
    props:['data','state'],
    template:`<ul>
                 <li v-for="item in data" v-show="state" @click="aa(item.title)">{{item.title}}</li>
             </ul>`,
    methods:{
        aa(item){
            console.log(item)
            this.$emit("custom",item);
        }
    }
})