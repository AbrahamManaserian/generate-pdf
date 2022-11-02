import './App.css';
// import GeneratePdf from './components/GeneratePdf';
import CreateCV from './containerPages/CreateCV'
import HomePage from './containerPages/HomePage'
import AdminPage from './containerPages/adminPage'
import QuestionsPage from './containerPages/QuestionsPage'
import CreateAssessment from './containerPages/CreateAssessmentPage'
import D3ToReact from './components/D3ToReact'
import TestAssessment from './components/testAssessment'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChallengePDF from './ChallengePdf';

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
        <Route path='/admin' element={<AdminPage/>}>
           
        </Route>
        <Route path='/admin/createAssessment' element={<CreateAssessment/>}/>
        <Route path='/admin/questions' element={<QuestionsPage/>}/>
        <Route path='/Assessment-Web-Application' element={<TestAssessment/>}/>
        <Route path='/d3.js-to-react' element={<D3ToReact/>}/>
        <Route path='/d3.js-to-react' element={<D3ToReact/>}/>
        <Route path='/challengePDF' element={<ChallengePDF/>}>
          <Route path=':template' element={<CreateCV/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
