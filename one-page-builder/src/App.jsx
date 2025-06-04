import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import BuilderForm from './components/BuilderForm/BuilderForm'


function App() {

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <BuilderForm />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
  </>
  )
}

export default App
