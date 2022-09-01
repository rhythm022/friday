module.exports = function walk(ast, { enter, leave }) {
    enter = enter || (() => { })
    leave = leave || (() => { })
    __walk(ast, { enter, leave })
}

const isNode = it =>  typeof it === 'object' && it

function __walk(node, cxt) {
    cxt.enter(node)
    for (let attr in node) {
        if (isNode(node[attr])) {
            __walk(node[attr], cxt)

        }
    }
    cxt.leave(node)
}

