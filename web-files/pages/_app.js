import '../styles/globals.css'
import {auth, db} from '../firebase';
import { BrowserRouter } from "react-router-dom";

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
