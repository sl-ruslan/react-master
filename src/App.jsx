import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Addnotes } from './pages/Addnotes'
import { Review } from './pages/Review'
import { Navbar } from './components/Navbar';
import {AlertState} from "./context/alert/AlertState";
import {Alert} from "./components/Alert";
import {FirebaseState} from "./context/firebase/FirebaseState";
import {Registrarion} from "./components/register/Registration";
import {Login} from "./pages/Login";


function App() {
    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navbar />
                    <div className="container pt-4">
                        <Alert/>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path={'/about'} element={<About />} />
                            <Route path={'/review'} element={<Review />} />
                            <Route path={'/addnotes'} element={<Addnotes />} />
                            <Route path={'/registration'} element={<Registrarion />} />
                            <Route path={'/login'} element={<Login />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    )
}

export default App;