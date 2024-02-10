
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import NotesListPage from '@/pages/NotesListPage.tsx'
import NotePage from '@/pages/NotePage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <Routes>
      <Route path='/' Component={NotesListPage} />
      <Route path='/notes' Component={NotesListPage} />
      <Route path='/notes/:id' Component={NotePage} />
      <Route path='*' element={<div>No encontré lo que buscabas</div>} />      
    </Routes>
  </Router>,
)
