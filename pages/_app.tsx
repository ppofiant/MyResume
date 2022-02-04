import 'styles/style.css';
import 'styles/aboutme.css';
import 'bootstrap/dist/css/bootstrap.css';
import type { AppProps } from "next/app";
import { useEffect } from 'react';

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
    
    useEffect(() => {
        import('bootstrap');
    }, []);

    return <Component {...pageProps} />;
}

export default MyApp;
