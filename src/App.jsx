import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home"
import EditPage from "./pages/EditorPage"
import { Toaster } from 'react-hot-toast';

function App() {
  return (
     <>
     <div>
       <Toaster position="top-right" toastOptions={{
         sucess:{
           theme:{
             primary:"#4aed88",
           },
         },
       }}>
       </Toaster>
       
     </div>
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
