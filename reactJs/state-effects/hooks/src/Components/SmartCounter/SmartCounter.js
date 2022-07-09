import {useState} from 'react';

function SmartCounter() {
  //return vector
  //1. stateful var
  //2. hooked function with var to auto update elements
  //[property var, function] = useState(initial value)
  const [quantity,addQuantity] = useState(0)

  //using fragment to group elements like a container
  return(
    <>
    <h1>With Hooks</h1>
    <h1>{quantity}</h1>
  {/* using button event to pass arrow function of state */}
    <button onClick={()=> addQuantity(quantity +1 )}>Aumentar</button>
    </>
  )
}

export default SmartCounter;
