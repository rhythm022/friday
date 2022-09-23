import { reactive } from "./reactive"
import { effect } from "./effect"

export function createRenderer(options){
    const {querySelector,insert} = options
    function render(vnode,container){
        if(typeof container === 'string'){
            container = querySelector(container)
        }

        const __ctx = {}
        __ctx.data = vnode.data ? reactive(vnode.data()) : reactive({}) 
        __ctx.setupResult = vnode.setup ? vnode.setup(): {}

        const ctx = new Proxy({},{
            get(target,key){
                if(__ctx.setupResult[key] !== undefined){
                    return __ctx.setupResult[key]
                }
    
                if(__ctx.data[key] !== undefined){
                    return __ctx.data[key]
                }
            },
            set(target,key,value){
                if(__ctx.setupResult[key] !== undefined){
                    return __ctx.setupResult[key] = value
                }
    
                if(__ctx.data[key] !== undefined){
                    return __ctx.data[key] = value
                }
            }
        })

        effect(()=>{
            const el = vnode.render.call(ctx)
            container.innerHTML = ''
            insert(el,container)
        })
       

        return ctx
    }


    return {
        render,
        createApp:createAppAPI(render),
    }
}

export function createAppAPI(render){
    return function createApp(vnode){
        return {
            mount(container){
                return render(vnode,container)

            }
        }
    }
}