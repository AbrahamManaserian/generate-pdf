import './App.css';
// import GeneratePdf from './components/GeneratePdf';
import CreateCV from './containerPages/CreateCV'
import HomePage from './containerPages/HomePage'
import D3ToReact from './components/D3ToReact'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div style={{padding:10}}>
    //   {/* <GeneratePdf/> */}
    //   <CreateCV/>
    //   <HomePage/>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/d3.js-to-react' element={<D3ToReact/>}/>
        <Route path='/createCV' element={<CreateCV/>}>
          <Route path=':template' element={<CreateCV/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
