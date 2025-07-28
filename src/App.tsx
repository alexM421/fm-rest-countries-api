//React Router
import { Route, Routes } from 'react-router-dom'
//layouts
import './App.css'
//CSS
import HomeLayout from './layouts/HomeLayout/HomeLayout'
//pages
import Home from './pages/Home/Home'
import CountryCard from './pages/CountryCard/CountryCard'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path=":country" element={<CountryCard/>}/>
      </Route>
    </Routes>
  )
}

