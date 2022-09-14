import Header from '../components/header'
import Main from './main'
import Works from './works'
import Footer from '../components/footer'
import Links from './links'

export default function Home() {
  return (
    <div className='bg-primary min-h-screen'>
      <Header/>
      <Main/>
      <Works/>
      <Links/>
      <Footer/>
    </div>
  )
}
