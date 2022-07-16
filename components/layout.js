import Nav from './navigation';
import Head from "next/head"

export default function Layout({children}) {
  return <>
  <Head>
    <title>SAM's interface</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
  <Nav/>
  {children}
  </>
  
}