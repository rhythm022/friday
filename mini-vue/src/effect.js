export let current 


export function effect(fn){
    current = fn
    fn()
    current = null
}