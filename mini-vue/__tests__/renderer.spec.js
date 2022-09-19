import {createApp} from '../src/index'

describe('renderer',()=>{
   

    test('run createApp() should return App instance',()=>{
        const app = createApp({})
        expect(typeof app).toBe('object')
        expect(typeof app.mount).toBe('function')
    })

    test('mount() should render text node to host', () => {
        const container = document.createElement('div')

        createApp({
          data() {
            return {
              title: 'hello, mini-vue!'
            }
          },
          render() {
            const node = document.createTextNode(this.title)
            return node
          }
        }).mount(container)
        expect(container.innerHTML).toBe('hello, mini-vue!')
      });
    
      test('mount() should render element to host', () => {
        const container = document.createElement('div')
     

        createApp({
          data() {
            return {
              title: 'hello, mini-vue!'
            }
          },
          render() {
            const div = document.createElement('div')
            div.textContent = this.title
            return div
          }
        }).mount(container)
        expect(container.innerHTML).toBe('<div>hello, mini-vue!</div>')
      });

      test('mount() can receive a selector ', () => {
        const container = document.createElement('div')
        container.id = 'app'
        document.body.appendChild(container)
       

        createApp({
          data() {
            return {
              title: 'hello, mini-vue!'
            }
          },
          render() {
            const node = document.createTextNode(this.title)
            return node
          }
        }).mount('#app')
        expect(container.innerHTML).toBe('hello, mini-vue!')
      });

      test('should support setup option', () => {
        const container = document.createElement('div')
     

        createApp({
          setup() {
            return {
              title: 'hello, mini-vue!'
            }
          },
          render() {
            const node = document.createTextNode(this.title)
            return node
          }
        }).mount(container)
        expect(container.innerHTML).toBe('hello, mini-vue!')
      });
})