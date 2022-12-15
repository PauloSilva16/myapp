import {} from "react-router-dom";
import React,{useEffect, useState} from "react";
import api from "./api";
export function Cadastro (){
const [CPF, setCPF] = useState("");
// useEffect(() => {
// /api
//     .post ("pvd.c3swsgunbume.us-east-1.rds.amazonaws.com/pvd",{
//         CPF: "",
//         nome:"",
//     })
//       .then ((response)=> setCPF(response.data))
//       .catch((err)=>{
//         console.error("ops! ocorreu um erro"+ err);
//       });
//     }, []);
const attcpf = event =>{
  setCPF(event.target.value);
}
const Enviar = () =>{
  console.log(CPF);
}
  return (
    <div id="login">
     <h1 className="title"> Cadastro de Motorista</h1>
  <form className="form">
      <div className="field">
          <label htmlFor="CPF">CPF</label>
        <input type="text" value={CPF} onChange ={attcpf} placeholder="DIGITE SEU CPF" id="CPF"/>
      </div>
      <div className="field">
          <label htmlFor="name">Nome</label>
        <input type="nome" placeholder="DIGITE SEU NOME" name="nome" id="nome"/>
      </div>
      <div className="actions">
        <button onClick={Enviar}>Cadastrar</button>
      </div>
  </form>
     </div>
  );
};