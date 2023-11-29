

export const CustomSignal = (initialValue: any) => {
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    
    const value = initialValue;
     let global:any = '';
    const handler = {
        set: function(obj, prop, value) {
          if (obj[prop] !== value) {
            global = value
            document.querySelectorAll(`.${id}`).forEach((element) => {
              element.textContent = value;
            });
            console.log(`Changement de ${prop} : ${obj[prop]} => ${value}`);
          }
          obj[prop] = value;
          return true;
        },
        get: function(obj, prop) {
            console.log(`Get de ${prop} : ${obj[prop]}`)
          return global;
        }
      };
      
      const proxy = new Proxy({...value, signal_id:id}, handler);

    return proxy
}


export const SignalComponent = ({props, signal}: {props:any, signal:any}) => {
    //get random string id 
    
 
    return (
        <div className={signal?.signal_id+' rounded p-2 border'}>
            {props?.toString()}
        </div>
    )
}