import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Login from '../components/login'
import SignUp from '../components/Signup'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Striker</title>
      </Head>
      
      <Header />

      <main>
        <Login />
        <SignUp />
        {/* Sidebar */}
        {/* Feed */}
        {/*Widgets*/}
      </main>
    </div>
  )
}
