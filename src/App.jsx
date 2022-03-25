import { 
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import {
    TodoList
} from '../projects'

import {
  HomeProjects
} from './components/HomeProjects'

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeProjects />} />
              <Route path="/todolist" element={<TodoList />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
