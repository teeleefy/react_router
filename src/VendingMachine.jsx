import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Coffee from "./Coffee";
import Soda from "./Soda";
import Tea from "./Tea";
import Home from "./Home";
function VendingMachine(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/coffee" element={<Coffee/>} />
                <Route path="/soda" element={<Soda/>} />
                <Route path="/tea" element={<Tea/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default VendingMachine