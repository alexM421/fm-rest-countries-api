//React Router
import { Route, Routes } from 'react-router-dom'
//layouts
import './App.css'
//CSS
import HomeLayout from './layouts/HomeLayout/HomeLayout'
//pages
import Home from './pages/Home/Home'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        {/* <Route path=":country" element={<CountryPage/>}/> */}
      </Route>
    </Routes>
  )
}

