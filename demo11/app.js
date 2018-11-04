var one = new Vue({
    el: "#vue-app-one",
    data: {
        title: 'vue-app-one'
    },
    methods: {

    },
    computed: {

    }
});

var two = new Vue({
    el: "#vue-app-two",
    data: {
        title: 'vue-app-two'
    },
    methods: {
        change: function(){
            one.title = '改变了'
        }
    },
    computed: {

    }
});