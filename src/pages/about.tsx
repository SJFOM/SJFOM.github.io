// Step 1: Import React. This lets you use JSX inside your .js file.
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

/* Step 2: Define your component. Note that your
component name should start with a capital letter. */
const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
      />
    </Layout>
  )
}

/* Step 3: Export your component so it
can be used by other parts of your app. */
export default AboutPage