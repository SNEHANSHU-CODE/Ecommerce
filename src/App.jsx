import React from "react"

import Header from "./components/Header"
import AppRouter from "./routes/AppRouter"
import Footer from "./components/Footer"
// import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <>
{/*       <ScrollToTop /> */}
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App
