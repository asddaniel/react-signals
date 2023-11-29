
type props = {
    signal:number|{value:number},
    setsignal?:(id:number)=>void
}

export default function Component({signal, setsignal}:props)  {
  return (
    <div>
            <div className="rounded p-2 border">
                {signal.toString()}
            </div>
            <button className="p-2 rounded bg-blue-600 font-bold" onClick={() =>{typeof signal !== 'number'? signal.value++:(setsignal?setsignal(signal+1):'')}}>+</button>
            {/* <Component signal={signal}/> */}
    </div>
  )
}
