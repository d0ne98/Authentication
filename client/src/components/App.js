import {BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedPage from "./ProtectedPage";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./Header";

export default function App() {
    return(
        <Router>
            <main>
                <Header />
                <Routes>
                    <Route path="/" element={
                        <>
                            <h1>This is the homepage</h1>
                            <h2>Homepage content</h2>
                        </>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/secret" element={<ProtectedRoute><ProtectedPage /></ProtectedRoute>} />
                </Routes>
            </main>
        </Router>
    )
}