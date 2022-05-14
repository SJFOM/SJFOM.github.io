// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import { Link } from 'gatsby'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const AboutPage = () => {
  return (
    <main>
      <title>About Me</title>
      <h1>About Me</h1>
      <Link to="/">Link to Home</Link>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </main>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default AboutPage