import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BuilderForm from './components/BuilderForm/BuilderForm'
import Preview from './components/Preview/Preview'
import { useState } from 'react'
import Footer from './components/Footer/Footer'


function App() {
  const [formData, setFormData] = useState({
    lang: "en",
    title: "",
    desc: "",
  });

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
          <BuilderForm formData={formData} setFormData={setFormData} />
          </div>
          <div className="col-md-6">
          <Preview formData={formData} />
          </div>
        </div>
      </div>
      <Footer/>
      </>
  )
}

export default App
