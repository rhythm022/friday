module.exports = function walk(ast, { enter, leave }) {
    enter = enter || (() => { })
    leave = leave || (() => { })
    __walk(ast, { enter, leave })
}

const isNode = it => Array.isArray(it) || (typeof it === 'object' && it)

function __walk(node, cxt) {
    if (Array.isArray(node)) {
        cxt.enter(node)

        node
            .filter(isNode)
            .forEach(it => {
                __walk(it, cxt)
            })
        cxt.leave(node)
        return
    }

    if (node && typeof node === 'object') {
        cxt.enter(node)
        for (let attr in node) {
            if (isNode(node[attr])) {
                __walk(node[attr], cxt)

            }
        }
        cxt.leave(node)

        return
    }
}

/*
const a, b = 1;
if(true) {
  const c = '123'
}
function fn1() {
   const d = 1
}
const e = 3


=======output=========
a
b
c
fn1 => d
e
=======================

*/