import '../src/styles/reset.css'
import '../src/styles/global.css'
import '../src/styles/common.scss'
import { Outlet } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import ListPage from './pages/ListPage/ListPage'

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ListPage />
    </>
  )
}

export default App
