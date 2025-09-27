
function ArrowFunctions() {
  // Regular function
  const hello = function () {
    return "Hello World!";
  };

  return (
    <div>
      <h1>Function</h1>
      <p>This demonstrates a regular function, NOT an arrow function.</p>
      <p>{hello()}</p>
    </div>
  );
}

export default ArrowFunctions;
