import { Routes, Route } from 'react-router-dom'
import App from './App'
//import HomePage from './pages/HomePage/HomePage'
//import CreatedRollingListPage from './pages/CreatedRollingListPage/CreatedRollingListPage'
import ListPage from './pages/ListPage/ListPage'
//import PostMessagePage from './pages/PostMessagePage/PostMessagePage'
//import CreateRollingPage from './pages/CreateRollingPage/CreateRollingPage'
//import EditPage from './pages/PostMessagePage/EditPage'

function Main() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="list" element={<ListPage />} />
      </Route>
    </Routes>
  )
}

export default Main
