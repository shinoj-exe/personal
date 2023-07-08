import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import LeftSide from '@/components/LeftSide'
import RightSide from '@/components/RightSide'
import { motion } from 'framer-motion'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Archive from '@/components/Archive'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>Shinoj Muralee</title>
      <meta name="description" content="Generated by create next app" /> 
      <meta name="viewport" content="width=device-width,initial-scale=1" /> 
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
      {/* New portfolio */}
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
        <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 1.5}} className='hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0'><LeftSide/></motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner/>
          <About/>
          <Experience/>
          <Projects/>
          <Archive/>
          <Contact/>
          <Footer/>
          <div className='w-full  text-sm text-center  '>
          <p>Coded with 💗 by Shinoj</p>
          </div>
        </div>
        <motion.div initial={{ opacity:0}}  animate={{ opacity : 1 }} transition={{ delay : 1.5}} className='hidden xl:inline-flex w-32 h-full fixed right-4 bottom-0'><RightSide/></motion.div>
      </div>
    </main>
    </>
  )
}
