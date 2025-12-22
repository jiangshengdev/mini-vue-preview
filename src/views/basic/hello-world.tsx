import type { SetupComponent } from '@jiangshengdev/mini-vue'
import { state } from '@jiangshengdev/mini-vue'

export const HelloWorld: SetupComponent = () => {
  const message = state('你好，世界！')

  return () => {
    return (
      <section class="card">
        <h2>你好，世界</h2>
        <h1>{message.get()}</h1>
      </section>
    )
  }
}
