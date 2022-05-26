const Footer = () => {

    return (
        <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3" >
                &copy; {(new Date().getFullYear())} RC_3DPrint
            </div>
        </footer>
    );

};

export default Footer;
