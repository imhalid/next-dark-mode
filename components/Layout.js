import Head from 'next/head'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next Tailwid Teheme</title>
        <meta
          name="description"
          content="Create dark mode in Next and Tailwind"
        />
      </Head>
      <div className="flex min-h-screen flex-col ">
        <Header />

        <main className="flex-grow ">{children}</main>
        <Footer className="" />
      </div>
    </>
  )
}

export default Layout
