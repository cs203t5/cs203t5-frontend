import Footer from "../components/Footer.js";
import Homepage from "./Home/Homepage";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Homepage />
            <Footer />
        </div>
    );
}
