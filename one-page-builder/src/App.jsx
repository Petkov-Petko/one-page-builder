import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BuilderForm from './components/BuilderForm/BuilderForm'
import Preview from './components/Preview/Preview'


function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <BuilderForm />
          </div>
          <div className="col-md-5">
            <Preview />
          </div>
        </div>
      </div>
  </>
  )
}

export default App
