import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import EditPage from "./pages/EditorPage"
function App() {
  return (
     <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/editor/:roomId" element={<EditPage/>}></Route>
    </Routes>
  </BrowserRouter>
     </>
  );
}

export default App;
