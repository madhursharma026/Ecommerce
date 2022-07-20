import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <div className='main-layout'>
                <div className="fixed-top">
                    <Header />
                </div>
                <div style={{ marginTop: "70px" }}>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </>
    );
}