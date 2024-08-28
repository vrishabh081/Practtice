import { BrowserRouter } from 'react-router-dom'
import './app.css'
import Navbar from './component/navbar'
import AllRoutes from './routes/allRoutes'

export function App() {

  return <div>
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  </div>
}
