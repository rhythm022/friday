
import {effect} from '../src/effect'
import {reactive} from '../src/reactive'


describe('effect',()=>{
    test('effect',()=>{
        const react = reactive({
            foo:'xxx'
        })
        let custom
        const fn = jest.fn(()=>{
            custom = react.foo
        })
        effect(fn)
        react.foo = 'yyy'
        expect(fn).toHaveBeenCalledTimes(2)
        expect(custom).toEqual('yyy')

       

    })
    test('',()=>{
        const obj = {
            num1:1,
            num2:2,
        }
        const react = reactive(obj)
        let dummy
        effect(()=>{
            dummy = react.num1 +react.num2
        })

        expect(dummy).toBe(3)
        react.num1 = 5
        react.num2 = 6
        expect(dummy).toBe(11)
    })

    // it('effect should linked to the exact key', () => {
    //     const observe = reactive({ foo: 'foo', bar: 'bar' })
    //     const fnSpy = jest.fn(() => {
    //       observe.foo
    //     });
      
    //     effect(fnSpy)
    //     observe.bar = 'barrr'
    //     observe.foo = 'foooo'
    //     expect(fnSpy).toHaveBeenCalledTimes(2)
    //   });
})