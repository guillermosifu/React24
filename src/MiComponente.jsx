// el primer paso para nuestro compenente es Declararlo com una funcion Con inicio mayuscula

// se recomienca usar una arrow funcion
// la forma dedeclar el nombre es caml Case
// cada elemento de nuestro componente deber estar dentro del return en parentesis
// siempre debe tener una etiqueta padre
import { useState } from "react";
const PrimerComponente = () => {
  const [count, setCount] = useState(0);

  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Este es mi primer componente </h1>
      <h2>hola desde el componente</h2>
      <p>{count}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>restar</button>
    </>
  );
};

// declaramos la exportacion por defecto

export default PrimerComponente;
