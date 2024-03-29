import Games from "./pages/Games"
import Users from "./pages/Users"
import { Routes, Route } from 'react-router-dom'
import { App, Result } from "antd"
import { PrivateRoute } from "./routes/PrivateRoute"

export default () => {
  return (
    <App style={{ height: '100%' }} notification={{ placement: 'topRight' }}>
      <Routes>
        <Route path='/' element={<PrivateRoute />}>
          <Route path='/games' element={<Games />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Result
            status="404"
            title="404"
          />} />
        </Route>
      </Routes>
    </App>
  )
}
