import { createRenderer } from "./renderer"

const nodeOptions = {
    querySelector(selector){
        return document.querySelector(selector)
    },
    insert(el,container){
        container.appendChild(el)

    }
}


export function createApp(options){
    const renderer = createRenderer(nodeOptions)

    return renderer.createApp(options)
}