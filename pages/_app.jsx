import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl'
import React from 'react'
import App from 'next/app'
import en from '../lang/en.json'
import fr from '../lang/fr.json'


// This is optional but highly recommended
// since it prevents memory leak
const cache = createIntlCache()

function getMessages(language) {
  let langBundle;
  switch (language) {
    case 'fr':
      langBundle = fr;
      break;
    case 'en':
      langBundle = en;
      break;
    default:
      langBundle = en;
      break;
    // Add more languages
  }
  return langBundle
}

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }
    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    const locale = typeof window !== 'undefined' && sessionStorage && sessionStorage.getItem("Language") ? sessionStorage.getItem("Language") : 'en';
    const messages = getMessages(locale);
    const intl = createIntl(
      {
        locale,
        messages,
      },
      cache
    )
    return (
      <RawIntlProvider value={intl}>
        <Component {...pageProps} />
      </RawIntlProvider>
    )
  }

}

export default MyApp