import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import Theme from '../src/ui/Theme';
import Header from '../src/ui/Header'
import Footer from '../src/ui/Footer'

// to do
// 1. change name to Ace Development in both header and footer - DONE
// 2. enable autoplay of animations in customsoftware, iOS/Android, revolution Page
// 3. change the pictures in about page
// 4. Modify to Nepali Number validation in contact form
// 5. Add features of sending email
// 6. Change dollar to rupee for estimate


export default function MyApp(props) {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(); 
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Arc Development</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={Theme}>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Component {...pageProps}  setValue={setValue}  setSelectedIndex={setSelectedIndex} />
        <Footer  setValue={setValue}  setSelectedIndex={setSelectedIndex}/>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
