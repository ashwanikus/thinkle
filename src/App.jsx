import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "./context/SidebarContext";
import Layout from "./Layout/index.jsx";
import Dashboard from "./pages/Dashboard";
import Message from "./pages/Message/index.jsx";
import Reviews from "./pages/Reviews/index.jsx";
import Assessment from "./pages/Assessment/index.jsx";

function App() {
    return (
        <SidebarProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="messages" element={<Message />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="assessment" element={<Assessment />} />
                    </Route>
                </Routes>
            </Router>
        </SidebarProvider>
    );
}

export default App;
