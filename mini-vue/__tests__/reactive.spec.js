
import {reactive} from '../src/reactive'


describe('reactive',()=>{
    test('reactive',()=>{
        const obj = {
            foo:'xxx'
        }

        const react = reactive(obj)
        expect(react).not.toBe(obj)
        expect(react.foo).toEqual(obj.foo)
        react.foo = 'yyy'
        expect(obj.foo).toEqual('yyy')
        react.bar = 'zzz'
        expect(obj.bar).toEqual('zzz')
        delete(react.bar)
        expect(obj.bar).toEqual(undefined)

    })

})