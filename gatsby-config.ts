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
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options : {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
          },
          {
            resolve: "gatsby-remark-autolink-headers",
          }
        ]
      }
    }
  ],
  // pathPrefix: "/samsite",
}

export default config
