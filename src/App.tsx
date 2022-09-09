import { Fragment, Suspense } from 'react';
import "./globalStyle.scss";
import { SignIn } from './pages/SignIn';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from './pages/Home';


function App() {
  return (
    <Fragment>
      <RecoilRoot>
        <Suspense fallback='Pagina esta carregando' />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </Fragment>
  )
}

export default App
