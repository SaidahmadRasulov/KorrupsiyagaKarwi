import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import { WorkerContext } from './Context/Context';
import SimpleAbout from './Pages/SimpleAbout';
// Images
import MirzaAlim from './assets/mirza.png';
import Abduganiv from './assets/abduganiv.png';
import Bobojanov from './assets/bobojanov.png';
import TursinMurod from './assets/tursinmurod.png';
import Momin from './assets/momin.png'
import Sodik from './assets/sodik.png'

function App() {

  const [workers, setWorkers] = useState([
    {id: 1, name: 'Mirzaalimov Raimdjan', job: 'Tashkilot rahbari', image: MirzaAlim},
    {id: 2, name: "Abdug'aniyev Anvarjon", job: 'Boshqaruv kengashi raisi', image: Abduganiv},
    {id: 3, name: 'Bobojanoiv Ilhambek', job: "Boshqaruv kengashi a'zosi", image: Bobojanov},
    {id: 4, name: 'Tangriqulov Tursinmurod', job: "Boshqaruv kengashi a'zosi", image: TursinMurod},
    {id: 5, name: 'Шукуров Мўмин', job: 'Mutaxassis', image: Momin},
    {id: 6, name: 'Шукуров Содиқ', job: 'Mutaxassis', image: Sodik},
  ])

  const router = createBrowserRouter(createRoutesFromElements(
      <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='/about/:id' element={<SimpleAbout />} />
      <Route path='contact' element={<Contact />} />
    </Route>
  ))

  return (
    <WorkerContext.Provider value={[workers, setWorkers]}>
      <RouterProvider router={router} />
    </WorkerContext.Provider>
  )
}

export default App