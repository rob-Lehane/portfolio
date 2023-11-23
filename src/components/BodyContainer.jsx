import {Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import MyContact from './Contact.jsx'

const BodyContainer = () => {
    return (
        <main>
            <Routes>
                <Route path ='/' element ={<Home />}/>
                <Route path ='/projects' element ={<Projects />}/>
                <Route path ='/contact' element={<MyContact />}/>
            </Routes>
        </main>
    )
}

export default BodyContainer;