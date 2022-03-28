import { div, DomDecorator, style } from "@/utils/dom";
import { View } from "@/utils/view";

export class RowLayout extends View {
    created() {
        this.setRoot([div, style({
            display: 'flex',
            flexDirection: 'row',
        })])
    }
}

export class ColLayout extends View {
    created() {
        this.setRoot([div, style({
            display: 'flex',
            flexDirection: 'co',
        })])
    }
}

export class DomFillDecorator extends DomDecorator {
    decorate(ele: HTMLElement) {
        ele.style.fill = 'auto'
    }
}

export class DomFixedDecorator extends DomDecorator {
    decorate(ele: HTMLElement) {
        ele.style.fill = 'none'
    }
}

export const fill = () => new DomFillDecorator()

export const fixed = () => new DomFixedDecorator()