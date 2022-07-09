function Counter() {
  let quantity = 0;
  function addQuantity() {
    quantity += 1;
    document.getElementById("counter-box").innerHTML = quantity;
    console.log(quantity);
  }
  //using fragment to group elements like a container
  return(
    <>
    <h1>Without Hooks</h1>
    <h1 id="counter-box">{quantity}</h1>
  {/* using button event to pass function */}
    <button onClick={addQuantity}>Aumentar</button>
    </>
  )
}

export default Counter
