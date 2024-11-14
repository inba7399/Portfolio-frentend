import Hero from './pages/Hero'
import { ReactLenis } from 'lenis/dist/lenis-react.mjs'
import './App.css'
import ScrollTextEffect from './components/ScrollTextEffect'

function App() {


  return (
    <div className='bg-zinc-950'>
      <ReactLenis root>
      <Hero />
      <ScrollTextEffect size={80} text="Here are some of my projects 👇🏻" />
       <div className='h-[100vh]'> 
       </div>
      </ReactLenis>
    </div>
  )
}

export default App
