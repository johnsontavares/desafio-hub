import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListProject } from './Pages/ListProjects'
import { MemberCard } from './Pages/Members'

function App() {

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
