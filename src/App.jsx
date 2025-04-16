import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Accueil from "./pages/Accueil.jsx";
import BooksView from "./pages/BooksView.jsx";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/view" element={<BooksView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
