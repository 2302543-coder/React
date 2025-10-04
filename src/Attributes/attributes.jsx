function Car() {
  const x = "myclass"; 

  const myfunc = () => {
    alert('Hello World');
  };

  return (
    <div>
      <h1 className={x} id="title">Hello World</h1>
      <button onClick={myfunc}>Click me</button>
      <button onClick={myfunc} disabled>Click me</button>
    </div>
  );
}

export default Car;
