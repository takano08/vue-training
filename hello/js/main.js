var helloComponent = {
    template: '<p>Hello</p>'
}

new Vue({
    el:'#app',
    components: {
        'hello-component' :helloComponent
    }
    
})