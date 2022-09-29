import './App.css';
// import GeneratePdf from './components/GeneratePdf';
import CreateCV from './containerPages/createCV'
import HomePage from './containerPages/homePage'
import AdminPage from './containerPages/adminPage'
import D3ToReact from './components/d3ToReact'
import TestAssessment from './components/testAssessment'
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
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/Assessment-Web-Application' element={<TestAssessment/>}/>
        <Route path='/d3.js-to-react' element={<D3ToReact/>}/>
        <Route path='/createCV' element={<CreateCV/>}>
          <Route path=':template' element={<CreateCV/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
