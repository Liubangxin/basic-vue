// 实例化vue对象
new Vue({
    el: "#vue-app",         
    data: {
        name: 'Mr Mike', 
        job: '前端开发',
        website: 'https://www.baidu.com/',
        websiteTag: '<a href="https://www.baidu.com/">web开发</a>'
    },
    methods: {
        green: function(time){
            return "Good " + time + "! " + this.name;
        }
    }
});

/*
* el: element需要获取的元素，一定是html中的根容器元素
* data：用于数据的存储
* methods: 方法
* data-binding: 属性绑定，绑定vue属性到html中
* <a v-bind:href="website">web开发</a>
*/