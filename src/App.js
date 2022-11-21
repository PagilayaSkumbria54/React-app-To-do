import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Navbar } from './components/Navbar';
import {FirebaseState} from "./context/firebase/FirebaseState";

function App() {
    return (
        <FirebaseState>
                <Router>
                    <Navbar/>
                    <div className="container pt-4">

                        <Routes>
                            <Route path={'/'} element={<Home/>}/>
                            <Route path={'/about'} element={<About/>}/>
                        </Routes>
                    </div>
                </Router>
        </FirebaseState>
    );
}

export default App;