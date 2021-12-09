import * as React from "react"
import Layout from "../../components/layout"
import Book from "./book"
import books from "./data"

const BooksListPage = () => {
  return (
    <Layout>
      <main>
        <title>Books</title>
        <h1>Books</h1>
        {books.map(b => <Book key={b.title + b.author} {...b} />)}
      </main>
    </Layout>
  )
}

export default BooksListPage
