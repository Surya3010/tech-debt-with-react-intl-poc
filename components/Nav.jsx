import React from 'react'
import Link from 'next/link'
import { useIntl } from 'react-intl'
import { messages } from "./messages"

export default function Nav() {
  const intl = useIntl()
  return (
    <nav>
      <li>
        <Link href="/">
          <a>
            {intl.formatMessage(messages.nav_home)}
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>
            {intl.formatMessage(messages.nav_about)}

          </a>
        </Link>
      </li>

      <style jsx>{`
        nav {
          display: flex;
        }
        li {
          list-style: none;
          margin-right: 1rem;
        }
      `}</style>
    </nav>
  )
}