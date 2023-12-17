const Footer: React.FC = () => {
    return (
        <footer className="bg-teal-700 text-white h-12 font-montserrat">
            <div className="container mx-auto min-h-full flex items-center text-center justify-center">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
