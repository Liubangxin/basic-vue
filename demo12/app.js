Vue.component("greeting", {
    template: `
    <p>
        {{name}}: 大家好，我叫{{name}}
        <button v-on:click="changeName">改名</button>
    </p>
    `,
    data: function(){
        return {
            name: "Mike",
        }
    },
    methods: {
        changeName: function(){
            this.name = "Leyy";
        }
    }
});

new Vue({
    el: "#vue-app-one",
});

new Vue({
    el: "#vue-app-two",
});