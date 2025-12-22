import type { SetupComponent } from '@jiangshengdev/mini-vue'
import { state } from '@jiangshengdev/mini-vue'

export const Counter: SetupComponent = () => {
  const count = state(0)

  const increment = (): void => {
    count.set(count.get() + 1)
  }

  return () => {
    return (
      <button type="button" onClick={increment}>
        计数：{count.get()}
      </button>
    )
  }
}
