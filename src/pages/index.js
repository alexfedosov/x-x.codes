import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1>Hey,</h1>
        <p>welcome to my little digital garden</p>
        <blockquote>
          A <strong>digital garden</strong> is a collection of notes, highlights, ideas and drafts
          not ordered by timestamp like a traditional blog. Anything more than your usual tweet and less than a
          full-sized blog post.
        </blockquote>
      </main>
    </Layout>
  )
}

export default IndexPage
