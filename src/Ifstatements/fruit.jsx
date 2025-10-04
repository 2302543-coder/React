function FirstIf() {
  const x = 50;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }else{
    y="Talong"
  }

 return (
    <h3>{y}</h3>
  );

}

export default  FirstIf;