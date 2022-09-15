export function createApp({data,render,setup}){
    let _data = {}
    let _setupResult = {}
    if(data){
        _data = data()
    }
    if(setup){
        _setupResult = setup()
    }
    const methods =  {
        mount(el){
            if(typeof el === 'string'){
                el = document.querySelector(el)
            }

            const node = render.call(ctx)

            el.appendChild(node)

            return ctx
        }
    }

    let ctx = new Proxy({},{
        get(target,key){
            if(_setupResult[key] !== undefined){
                return _setupResult[key]
            }

            if(_data[key] !== undefined){
                return _data[key]
            }
            if(methods[key] !== undefined){
                return methods[key]
            }
        },
        set(){}
    })



    return ctx
}