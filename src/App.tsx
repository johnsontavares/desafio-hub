import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { api } from './lib/axios'
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListProject } from './Pages/ListProjects'
import { MemberCard } from './Pages/Members'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<ListProject />} path="/"></Route>
          <Route element={<MemberCard />} path="/membros"></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
