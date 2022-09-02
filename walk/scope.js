const map = new WeakMap()

module.exports = class Scope{
    constructor({parent}){
        this.parent = parent || null
        this.names = new Set()
        map.set(this,[])

    }
    add(name){
        this.names.add(name)
    }
    appendChild(scope){
        map.get(this).push(scope)
    }
    get children(){
        return map.get(this)
    }
    contains(name){
        return !!this.findDefiningScope(name)
        
    }
    log(){
        console.log(this.names)

    }
    findDefiningScope(name){
        if(this.names.has(name)){
            return this
        }
        return this.parent && this.parent.findDefiningScope(name) || null
    }
}