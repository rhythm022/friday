
describe('scope',()=>{
    test('scope',()=>{
        const Scope = require('../scope')

        const root = new Scope({})
        root.add('a')
        const child = new Scope({
            parent:root
        })
        child.add('b')
        const son = new Scope({
            parent:child
        })
        son.add('c')

        expect(son.findDefiningScope('a')).toBe(root)
        expect(son.contains('a')).toEqual(true)

        expect(son.findDefiningScope('b')).toBe(child)
        expect(son.contains('b')).toEqual(true)

        expect(son.findDefiningScope('c')).toBe(son)
        expect(son.contains('c')).toEqual(true)

    })
    
})