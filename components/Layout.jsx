import Head from 'next/head'
import React from 'react'
import { useIntl } from 'react-intl'
import { messages } from "./messages"
import Nav from './Nav'

export default function Layout({ title, children }) {
  const intl = useIntl()
  console.log(intl.formatMessage(messages.title))
  console.log(messages.title)
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title || intl.formatMessage(messages.title)}</title>


      </Head>

      <header>
        <Nav />
      </header>

      {children}
    </div>
  )
}