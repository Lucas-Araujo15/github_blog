import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <div>
      <h1>Layout padrão</h1>
      <Outlet />
    </div>
  )
}
