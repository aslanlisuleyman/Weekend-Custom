
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Routes from './routes/Routes'


const router=createBrowserRouter(Routes)
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
