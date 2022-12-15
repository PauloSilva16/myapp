import {} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
export function App (){
  const navigate = useNavigate();

  return (
    <div id="cadastro">
    <div>
     <h1>Olá, trabalhe conosco. <p> Seja um Motorista</p></h1>
     <button onClick={()=>navigate('/Cadastro')}>Iniciar
     </button>
     </div>
     </div>
  );
};