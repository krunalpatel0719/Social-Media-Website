import '../styles/globals.css'
import {auth, db} from '../firebase';

// Default  page with next and react 

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
