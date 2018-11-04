new Vue({
    el: "#vue-app",
    data: {
        a: 0,
        b: 0,
        age: 20
    },
    methods: {
        // 两个方法都会执行
        // addToA: function(){
        //     console.log("addToA");
        //     return this.a + this.age;
        // },
        // addToB: function(){
        //     console.log("addToB");
        //     return this.b + this.age;
        // }
    },
    computed: {
        addToA: function(){
            console.log("addToA");
            return this.a + this.age;
        },
        addToB: function(){
            console.log("addToB");
            return this.b + this.age;
        }
    }
});