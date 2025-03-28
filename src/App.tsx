import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import Calendar from "./pages/Calendar";

import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";

export default function App() {
    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>
                    {/* Dashboard Layout */}
                    <Route element={<AppLayout />}>
                        <Route index path="/admin" element={<Home />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/blank" element={<Blank />} />
                    </Route>

                    {/* Auth Layout */}
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />

                    {/* Fallback Route */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}
