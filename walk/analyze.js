const Scope = require('./Scope')
const walk = require('./walk')


module.exports = function analyze(ast) {
    // 输出 root scope

    const top = new Scope({})
    const stack = [top]
    walk(ast, {
        enter: (node) => {
            if (node.type === 'FunctionDeclaration') {
                const cur = stack[stack.length - 1]

                cur.add(node.id.name)

            }
            if (node.type === 'FunctionDeclaration') {
                const parent = stack[stack.length - 1]

                const scope = new Scope({parent})
                parent.appendChild(scope)

                stack.push(scope)

            }

            const cur = stack[stack.length - 1]
            if (node.type === 'VariableDeclaration') {


                node.declarations.forEach(it => {
                    cur.add(it.id.name)

                });

            }
           
        },
        leave(node) {
            if (node.type === 'FunctionDeclaration') {
                stack.pop()

            }

            // if (node.type === 'VariableDeclaration') {
            //   console.log(stack.length)
            //   stack[stack.length - 1].log()

            // }

        }
    })

    return stack[0]

}