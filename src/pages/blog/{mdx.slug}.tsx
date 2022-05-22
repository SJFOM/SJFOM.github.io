import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer, MDXRendererProps } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout'

const BlogPost = ({ data }: { data: MDXRendererProps }) => {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>Date: {data.mdx.frontmatter.date}</p>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost