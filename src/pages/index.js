import * as React from "react"
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <title>x-x.codes home</title>
        <h1>Hey,</h1>
        <p>welcome to my little digital garden</p>
        <blockquote>
          A <strong>digital garden</strong> is a collection of notes, highlights, ideas and drafts
          not ordered by timestamp like a traditional blog. Anything more than your usual tweet and less than a
          full-sized blog post.
        </blockquote>
        <p><a href="/books">Books</a></p>
        <p><a href="/wishlist">Wishlist</a></p>
        <p><a href="/ru/about">[RU] Обо мне</a></p>
        <hr/>
        <p><a href="https://calendly.com/ask_x_x/20min">Book a 20 minutes call with me</a></p>
        <hr/>
        <p><a href="https://www.linkedin.com/in/alexanderfedosov/">LinkedIn</a></p>
        <p><a href="https://github.com/alexfedosov">Github</a></p>
        <p><a href="https://soundcloud.com/space_whales/popular-tracks">Soundcloud</a></p>
        <p><a href="https://open.spotify.com/artist/2SrPaH9b7wq3VKZsO78T8p?si=G72Sb1_bT8KxbfOwdVX1Pg&nd=1">Spotify</a></p>
      </main>
    </Layout>
  )
}

export default IndexPage
