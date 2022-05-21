import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My first Gatsby site!`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options : {
        name: "blog",
        path: `${__dirname}/blog`,
      }
    }
  ],
  // pathPrefix: "/samsite",
}

export default config
