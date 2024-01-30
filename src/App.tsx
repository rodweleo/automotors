import { Routes, Route } from 'react-router';
import './App.css'
import { Header } from './components/ui/header'
import 'boxicons';
import { Cars } from './screens/cars';
import { Dealers } from './screens/dealers';
import { Home } from './screens/home';
import { Messages } from './screens/messages';
import { Activities } from './screens/activities';
function App() {

  return (
    <>
      <Header/>
      <main className='h-full w-full'>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="cars" element={<Cars/>}></Route>
        <Route path="dealers" element={<Dealers/>}></Route>
        <Route path="messages" element={<Messages/>}></Route>
        <Route path="history" element={<Activities/>}></Route>
      </Routes>
      </main>
    </>
  )
}

export default App
