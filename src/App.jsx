import Hero from './pages/Hero'
import { ReactLenis } from 'lenis/dist/lenis-react.mjs'
import './App.css'

function App() {


  return (
    <div className='bg-zinc-950'>
      <ReactLenis root>
      <Hero />
       <div className='h-[100vh]'> 
       </div>
      </ReactLenis>
    </div>
  )
}

export default App
