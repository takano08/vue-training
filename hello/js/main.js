Vue.component('button-counter',{
    data: function() {
        return{
            count: 0
        }
    },
    template: '<div><span>count: </span><button v-on:click="count++">{{ count }}</button></div>'
})

new Vue({
    el:'#app',
    
    
})