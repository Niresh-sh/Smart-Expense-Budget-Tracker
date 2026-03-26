import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
     <div className="flex flex-col h-screen">
      <main className="grow">
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default App
