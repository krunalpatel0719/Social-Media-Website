import react from 'react'
import Header from '../components/Header' 
import Sidebar from '../components/Sidebar'
import Feed from "../components/Feed"
import Head from 'next/head'
function MainPage() {
  return (
    <div> 
      <Head>
        <title>The Lounge</title>
      </Head>

      <Header/>
      <main className='flex flex-wrap relative'>
         
          <Sidebar />
          <Feed />
          
        </main>  
    </div>
    
  )
}

export default MainPage