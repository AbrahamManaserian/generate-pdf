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
import NewHomePage from './containerPages/NewHomePage';
import AboutPage from './containerPages/AboutPage';
import ServicesPage from './containerPages/ServicesPage';
import BlogPage from './containerPages/BlogPage';
import ContactPage from './containerPages/ContactPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BarMenu from './components/BarMenu';

function App() {
  return (
    // <div style={{padding:10}}>
    //   {/* <GeneratePdf/> */}
    //   <CreateCV/>
    //   <HomePage/>
    // </div>
    <BrowserRouter>
      <BarMenu />
      <Routes>
        <Route path="/" element={<NewHomePage />} />
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/blog" element={<BlogPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/admin/createAssessment" element={<CreateAssessment />} />
        <Route path="/admin/questions" element={<QuestionsPage />} />
        <Route path="/Assessment-Web-Application" element={<TestAssessment />} />
        <Route path="/d3.js-to-react" element={<D3ToReact />} />
        <Route path="/d3.js-to-react" element={<D3ToReact />} />
        <Route path="/challengePDF" element={<ChallengePDF />} />
        <Route path="/createCV" element={<CreateCV />}>
          <Route path=":template" element={<CreateCV />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
