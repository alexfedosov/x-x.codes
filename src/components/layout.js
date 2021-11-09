import * as React from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <nav><a href="/">x-x.codes</a></nav>
      {children}
    </div>
  )
}

export default Layout
