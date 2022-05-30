import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [Presupuesto, setPresupuesto] = useState(0)

  return (
    <>
      <div>
        <Header
          presupuesto={Presupuesto}
          setPresupuesto={setPresupuesto}
        />
      </div>

    </>
  )
}

export default App
