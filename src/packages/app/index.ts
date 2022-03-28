import { cls, div } from "@/utils/dom";
import { View } from "@/utils/view";

export class AppContent extends View<'content'>{
    created() {
        const html = document.querySelector('html') 
        if(html){
            html.style.height = '100%'
            html.style.padding = '0%'
            html.style.margin = '0%'
        }
        
        const body = document.querySelector('body') 

        if(body){
            body.style.height = '100%'
            body.style.padding = '0%'
            body.style.margin = '0%'
        }

        this.setRoot([div, cls('app'), this.slot('content')])
    }
}