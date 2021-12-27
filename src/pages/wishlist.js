import * as React from "react"
import Layout from "../components/layout";

const WishlistPage = () => {
  return (
    <Layout>
      <main>
        <title>Wishlist</title>
        <h1>Wishlist</h1>
        <blockquote>Things, I'd want to buy/read/watch/listen to</blockquote>
        <p><a href="https://www.amazon.de/Funko-57360-POP-Deluxe-Anniversary/dp/B08WCQ4TG7">[Vinyl figure] Harry Pushing Trolley</a> - $49</p>
        <p><del><a href="https://www.objc.io/books/advanced-swift/">[Book] Advanced Swift</a> - $49</del></p>
      </main>
    </Layout>
  )
}

export default WishlistPage
