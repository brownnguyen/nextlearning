import { Provider } from 'react-redux';
import Header from '../component/header';
import '../styles/globals.css';
import store from '../store/store';

function MyApp({ Component, pageProps }) {
  return <>
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  </>
}

export default MyApp
