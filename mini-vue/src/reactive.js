import { current } from "./effect"


export function reactive(obj){

    let store = []
    return new Proxy(obj,{
        get(target,key){
            store.push(current)
            return Reflect.get(target,key)
        },
        set(target,key,value){
            const res =  Reflect.set(target,key,value)
            store.forEach(fn=>{
                fn && fn()
            })

            return res
        },
        deleteProperty(target,key){
            const res =  Reflect.deleteProperty(target,key)
            store.forEach(fn=>{
                fn && fn()
            })

            return res
        }
    })
}