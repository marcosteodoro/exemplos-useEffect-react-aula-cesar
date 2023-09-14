import { useState, useEffect } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);

  useEffect(() => {
    // useEffect sem array de dependências roda em todas renderizações
    console.log("Eu rodo à cada render");
  });

  // useEffect(() => {
  //   // useEffect com array de dependências vazio roda na primeira renderização apenas
  //   console.log("Eu apenas na primeira renderização");
  // }, []);

  // useEffect(() => {
  //   // useEffect com contador no array de dependências
  //   // roda somente ao alterar o contador
  //   console.log("Eu rodo somente ao alterar o contador");
  // }, [contador]);

  // useEffect(() => {
  //   // useEffect com contador no array de dependências
  //   // roda somente ao alterar o contador2
  //   console.log("Eu rodo somente ao alterar o contador2");
  // }, [contador2]);

  // useEffect(() => {
  //   // useEffect com contador no array de dependências
  //   // roda somente ao alterar o contador ou o contador2
  //   console.log("Eu rodo somente ao alterar o contador ou o contador2");
  // }, [contador, contador2]);

  // useEffect(() => {
  //   // cria um novo interval em toda primeira renderização do componente
  //   const interval = setInterval(() => {
  //     console.log(Date.now());
  //   }, 2000);
  //   // clean up function
  //   // limpa o interval criado quando o componente é "desmontado"
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   // altera o title da página sempre que o contador é alterado
  //   document.title = `${contador} clicks`;
  // }, [contador]);

  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={() => setContador(contador - 1)}>-</button>
      <button onClick={() => setContador(contador + 1)}>+</button>

      <h1>{contador2}</h1>
      <button onClick={() => setContador2(contador2 - 1)}>-</button>
      <button onClick={() => setContador2(contador2 + 1)}>+</button>
    </div>
  );
}

export default function App() {
  const [mostraContador, setMostraContador] = useState(true);
  return (
    <div>
      {mostraContador && <Contador />}
      <button onClick={() => setMostraContador(!mostraContador)}>
        Toogle counter
      </button>
    </div>
  );
}
