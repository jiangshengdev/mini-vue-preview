import type { SetupComponent } from '@jiangshengdev/mini-vue'

export interface Todo {
  id: number
  text: string
}

export const TodoItem: SetupComponent<{ todo: Todo }> = ({ todo }) => {
  return () => {
    return <li>{todo?.text}</li>
  }
}
