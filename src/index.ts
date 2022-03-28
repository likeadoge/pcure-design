import { AppContent } from './packages/app'
import './style/global'
import { text } from './utils/dom'
// import { App } from './view/app'


// new App().parent(document.body)

new AppContent()
    .insert('content', text('Hello World!'))
    .parent(document.body)