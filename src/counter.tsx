import type { SetupComponent } from '@jiangshengdev/mini-vue'
import { reactive } from '@jiangshengdev/mini-vue'

export const Counter: SetupComponent = () => {
  const state = reactive({ count: 0 })

  const increment = () => {
    state.count += 1
  }

  return () => {
    return (
      <button type="button" onClick={increment}>
        count is {state.count}
      </button>
    )
  }
}
