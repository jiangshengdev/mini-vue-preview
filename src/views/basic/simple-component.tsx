import type { Todo } from './todo-item.tsx'
import { TodoItem } from './todo-item.tsx'
import type { SetupComponent } from '@jiangshengdev/mini-vue'
import { state } from '@jiangshengdev/mini-vue'

export const SimpleComponent: SetupComponent = () => {
  const groceryList = state<Todo[]>([
    { id: 0, text: '蔬菜' },
    { id: 1, text: '奶酪' },
    { id: 2, text: '人类应该吃的其他东西' },
  ])

  return () => {
    return (
      <section class="card" data-testid="basic-simple-component">
        <h2>简单组件</h2>
        <ol>
          {groceryList.get().map((item) => {
            return <TodoItem key={item.id} todo={item} />
          })}
        </ol>
      </section>
    )
  }
}
