


const customPlugin = {
    install: function (Vue, options) {
        
        //1.Add a global method or property
        Vue.myGlobalMethod = function () {
            alert('I am Global Method!')
        }
        Vue.myCustomProperty = 'I am Custom Property';

        //2. Add a global asset
        Vue.directive('blue-color', {
            bind(el, binding) {
                el.style.color = 'blue-color'
            }
        })

        //3. Inject some component options , mixins
        Vue.mixin({
            data () {
                return {
                    custom_message: 'RAAAAWWWWWWWWWWWWWWW'
                }
            },
            created () {
                console.log('Custom mixin created');
            },
            methods: {
                scream () {
                    alert(this.custom_message)
                }
            }
        })


        //4. Add an instance method or property
        Vue.prototype.$customMethod = function () {
            alert('I am a custom instance method')
        }
    }
}

export default customPlugin;