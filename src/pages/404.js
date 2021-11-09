import * as React from "react"
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <main>
        <title>Not found</title>
        <h1>404 Not Found</h1>
        <blockquote>
          is a hypertext
          transfer protocol (HTTP) standard response code, in computer network communications, to indicate that the
          browser was able to communicate with a given server, but <strong>the server could not find what was requested</strong>.
          <p><a href="https://en.wikipedia.org/wiki/HTTP_404">https://en.wikipedia.org/wiki/HTTP_404</a></p>
        </blockquote>
      </main>
    </Layout>
  )
}

export default NotFoundPage
