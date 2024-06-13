import '../src/style/reset.css';
import '../src/style/global.css';
import '../src/style/common.scss';
import { Route, Routes } from 'react-router-dom';
import CreatedRollingListPage from './pages/CreatedRollingListPage/CreatedRollingListPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreatedRollingListPage />} />
      </Routes>
    </>
  );
}

export default App;
