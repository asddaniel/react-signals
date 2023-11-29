
// type person = {
//     name: string,
//     age: number
// }
// type props = {
//     person: {value:person},
//     setperson?:(person:person)=>void
    
// }
export default function Composant(props:any)  {

   const properties = props
    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        if(props.setperson === undefined){
            console.log(event.target.value)
            properties.person.age = Number(event.target.value)
            return 
        }
        props.setperson({
            ...props.person.value,
            age: Number(event.target.value),
        })
    }
  return (
    <div>
              <div className="font-bold text2xl">{properties.person.name}</div>
              <input type="number" value={properties.person.age} onInput={handlechange}  className="border p-2 text-2xl" />
    </div>
  )
}
