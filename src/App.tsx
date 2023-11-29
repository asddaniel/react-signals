import { useState } from 'react'
import { signal } from '@preact/signals-react'
import Component from './Component'
import Composant from './Composant'
import { CustomSignal } from './CustomSignal'
import { SignalComponent } from './CustomSignal'

import './App.css'



const conteur = signal(0)
// const person  = signal({name: 'John', age: 30})
// const name = computed(() => person.value.name)  
const data = CustomSignal({name: 'John', age: 30})
function App() {
  const [count, setCount] = useState(0)
  const [homme, sethomme] = useState({name: 'John', age: 30})
 
  return (
    <>
      <div className="bg-green-600 p-2 rounded text-white">
        <div className="flex gap-2 bg-white text-gray-800 shadow-lg rounded items-center">
      <div className="p-2">
      <div className="p-2 font-bold text-3xl">{count}</div>
             <button className="p-2 rounded bg-blue-600 font-bold" onClick={() => setCount(count + 1)}>+</button>
             <Component signal={count} setsignal={setCount}/>
      </div>
      <div className="p-2">
      <div className="p-2  border flex flex-col gap-2">
      <div className="p-2 font-bold text-3xl">{conteur} </div>
             <button className="p-2 rounded bg-blue-600 font-bold" onClick={() => conteur.value++}>+</button>

             <Component signal={conteur}/>
      </div>
      </div>
      <div className="p-2">
           <h2 className="font-bold text5xl"> avec signal</h2>
           <div>{JSON.stringify(homme)}</div>
           <div>
             <Composant person={homme} setperson={sethomme} />
             <SignalComponent props={data.age}  signal={data}/>
           </div>
      </div>
      
        </div>
             
      </div>
    </>
  )
}

export default App
