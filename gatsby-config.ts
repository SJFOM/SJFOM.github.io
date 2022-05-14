import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `samsite`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}

module.exports = {
  pathPrefix: "/samsite",
}

export default config
