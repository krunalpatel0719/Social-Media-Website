import '../styles/globals.css'
import {auth, db} from '../firebase';


function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp
