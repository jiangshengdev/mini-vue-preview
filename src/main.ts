import './style.css'
import { App } from './app.tsx'
import { createApp, type DomAppInstance } from '@jiangshengdev/mini-vue'

const host = document.querySelector<HTMLDivElement>('#app')

if (!host) {
  throw new Error('demo: 未找到 #app 容器')
}

const app: DomAppInstance = createApp(App)

app.mount(host)
