import '../styles/globals.css'
import '../styles/nicepage.css'
import '../styles/landing.css'
import '../styles/About.css'
import '../styles/alliances.css'
import '../styles/services.css'
import '../styles/product.css'
import '../styles/loader.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../Components/Footer';


function MyApp({ Component, pageProps }) {
  return (
		<>
			
			

			
			<Component {...pageProps} />
			<Footer/>
		</>
	);
}

export default MyApp
