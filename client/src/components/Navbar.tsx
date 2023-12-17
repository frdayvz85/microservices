import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        const isAuthenticated = !!userInfo;
        setIsLoggedIn(isAuthenticated);
    }, [location.pathname]); // Re-run the effect on route change

    const handleLogout = () => {
        localStorage.removeItem('userInfo');
        setIsLoggedIn(false);
        navigate('/login')
    };
    return (
        <nav className="bg-teal-700 h-12 font-montserrat">
            <div className="container mx-auto min-h-full flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="text-white text-xl font-bold">
                        Your Logo
                    </Link>
                </div>
                <div className="flex items-center">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="text-white px-4">
                                Login
                            </Link>
                            <Link to="/register" className="text-white px-4">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/courses" className="text-white px-4">
                                Courses
                            </Link>
                            <Link to="/teachers" className="text-white px-4">
                                Teachers
                            </Link>
                            <Link to="/students" className="text-white px-4">
                                Students
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="text-white px-4 focus:outline-none"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
