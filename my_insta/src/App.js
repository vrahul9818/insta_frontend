import './App.css';
import Landing from './landing';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Post_view from './post_view';
import Upload from './upload';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Landing/> }/>
   <Route path="/posts" element={<Post_view/> }/>
   <Route path="/uploads" element={<Upload/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
