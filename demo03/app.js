new Vue({
    el: "#vue-app",
    data: {
        age: 20,
        X: 0,
        Y: 0
    },
    methods: {
        add: function(temp){
            this.age += temp;
        },
        sub: function(temp){
            this.age -= temp;
        },
        updateXY: function(event){
            // console.log(event);
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        // stopMoving: function(event){
        //     event.stopPropagation();  // stopPropagation不再派发事件。
        // }
    }
});