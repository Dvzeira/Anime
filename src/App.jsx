
import { AnimeContextProvider } from './contexts/context'
import { RouterProvider } from "react-router-dom"
import router from './router'


function App() {


  return (
    <>
      <AnimeContextProvider>
        <RouterProvider router={router} />
      </AnimeContextProvider>
    </>
  )
}

export default App
