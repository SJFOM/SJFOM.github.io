import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

interface pageData {
  pageTitle: string
  children: React.ReactNode
};

/*
Using {} for the pageTitle and children variables is a JavaScript technique 
called destructuring. It’s basically a shortcut for defining variables 
based on an object’s properties. It’s like saying, “Take the object that 
gets passed into this function, and unpack its pageTitle and children 
properties into their own variables.”
*/
const Layout = ({ pageTitle, children }: pageData) => {
  return (
    <div className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout