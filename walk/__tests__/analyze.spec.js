describe('analyze',()=>{
    test('analyze',()=>{
        const analyze = require('../analyze')
        const Scope = require('../scope')
        let acorn = require("acorn");
        const str = `
        let a;
        `
        const ast = acorn.parse(
            str, {ecmaVersion: 2020})

        const scope = analyze(ast)

        expect(scope.findDefiningScope('a')).toEqual(scope)
    })

    test('analyze',()=>{
        const analyze = require('../analyze')
        const Scope = require('../scope')
        let acorn = require("acorn");
        const str = `
        let a1;
        let b1;
        function fn1(){
            let a2;
        }
        function fn2(){
            let b2;
        }
        let c1
        `
        const ast = acorn.parse(
            str, {ecmaVersion: 2020})

        const root = analyze(ast)

        expect(root.children[1].findDefiningScope('a1')).toEqual(root)
        expect(root.children[1].findDefiningScope('b1')).toEqual(root)
        expect(root.children[1].findDefiningScope('c1')).toEqual(root)

        expect(root.children[0].findDefiningScope('a2')).toEqual(root.children[0])
        expect(root.children[1].findDefiningScope('b2')).toEqual(root.children[1])
    })
})