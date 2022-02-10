import 'styles/style.css';
import 'styles/aboutme.css';
import 'styles/myproject.css';
import 'styles/contactme.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import type { AppProps } from "next/app";
import { useEffect } from 'react';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    
    useEffect(() => {
        import('bootstrap');
    }, []);

    useEffect(() => {
        AOS.init({
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 50,
          });
    });

    return <Component {...pageProps} />;
}

export default MyApp;
