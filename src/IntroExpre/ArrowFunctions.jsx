function ArrowFunctions() {
  const hello = function () {
    return "Hello World!";
  };
  
  function kwtohp(kw){
    return kw * 36;
  }
  
  function Car() {
    return {
      name: "Fiat",
      model: "500",
      color: "white"
    };
  }
  
  const myobj = Car();
  
  return (
    <div>
      <h1 id="title">Functions</h1>
      <p>This demonstrates a regular function, NOT an arrow function.</p>
      <p>{hello()}</p>
      <h1 id="title">My lamborgini</h1>
      <p>It has {kwtohp(218)} horsepower</p>
      <h1 id="title">Object</h1>
      <p>My car is a {myobj.color} {myobj.name} {myobj.model}</p>
    </div>
  );
}

export default ArrowFunctions;
