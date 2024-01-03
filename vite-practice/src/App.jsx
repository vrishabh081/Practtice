import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './components/form'
import FormikPractice from './components/formik'
import Payment from './components/payment'
import FacebookLogin from './firebaseConfig/FacebookLogin'
import GoogleLogin from './firebaseConfig/GoogleLogin'
import PhoneNumberLogin from './firebaseConfig/PhoneNumberLogin'
import Success from './page/success'
import Cancel from './page/cancel'
import FbLogin from './page/fbLogin'
import ReduxToolkit from './page/redux-toolkit'

function App() {
  return (
    <>
      {/* <div className='text-sky-500 text-6xl'>Hello World</div> */}
      {/* <Form/> */}
      {/* <FormikPractice/> */}
      {/* <PhoneNumberLogin/> */}
      <div style={{border:"1px solid"}}>
        <Link style={{margin:"1rem"}} to={"/"}>Google</Link>
        <Link style={{margin:"1rem"}} to={"/payment"}>Payment Testing</Link>
        <Link style={{margin:"1rem"}} to={"/fb-login"}>Facebook Login</Link>
        <Link style={{margin:"1rem"}} to={"/rtk"}>Redux Toolkit</Link>
      </div>
      <Routes>
        <Route path='/' element={<GoogleLogin/>} />
        <Route path='/fb-login' element={<FbLogin/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/success' element={<Success/>} />
        <Route path='/cancel' element={<Cancel/>} />
        <Route path='/rtk' element={<ReduxToolkit/>} />
      </Routes>

    </>
  )
}

export default App
