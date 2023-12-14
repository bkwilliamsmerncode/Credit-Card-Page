import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import './App.css'
import Dashboard from "./Dashboard"
import Form from './Components/Form'
import Thanks from './Components/Thanks'



function App() {

    return (
        <Router >
            <Routes>

                <Route path="/" element={<Dashboard />} />
                <Route path="/Form" element={<Form />} />
                <Route path="/Thanks" element={<Thanks />} />

            </Routes>
        </Router>
    )
}

export default App