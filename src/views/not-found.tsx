import type { SetupComponent } from '@jiangshengdev/mini-vue'

export const NotFound: SetupComponent = () => {
  return () => {
    return (
      <div>
        <h2>404</h2>
        <p>页面不存在</p>
      </div>
    )
  }
}
