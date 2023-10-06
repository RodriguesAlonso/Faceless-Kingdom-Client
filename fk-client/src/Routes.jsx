import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Realm from "./Pages/Realm"
import LoginForm from "./components/LoginForm"

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<Home/>}/>
                <Route path="/realm"
                    element={<Realm/>}/>
                <Route path="/teste"
                    element={<LoginForm/>}/>
            </Routes>


        </BrowserRouter>
    )
}
