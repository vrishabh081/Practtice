import './App.css'
import Form from './components/form'
import FormikPractice from './components/formik'
import FacebookLogin from './firebaseConfig/FacebookLogin'
import GoogleLogin from './firebaseConfig/GoogleLogin'

function App() {
  return (
    <>
      {/* <div className='text-sky-500 text-6xl'>Hello World</div> */}
      {/* <Form/> */}
      {/* <FormikPractice/> */}
      <GoogleLogin/>
      <FacebookLogin/>
    </>
  )
}

export default App
