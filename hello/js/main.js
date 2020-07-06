

new Vue({
    el:'#app',
    data: {
        message: 'hello Vue.js'
    },
    watch: {
        message: function(newValue, oldVlue) {
            console.log('new:%s, old:%s',newValue,oldVlue);
        }
    }
    
})
