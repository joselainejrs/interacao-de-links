import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import api from '../../services/api';


function Cadastro() {
    //criação de estado
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const history = useHistory();
    
    async function handleCadastro(e){
        //evento de mudança
        e.preventDefault();

        const data = ({
            nome,
            email,
            senha
        });
        try{
            // envio dos dados em formato json
        const response = await api.post('usuarios', data);

        alert(`Acesso concluido ${response.data}`);
        history.push('/')
        
        }catch (err){
         alert('Erro ao finalizar o cadastro, tente novamente')
        }
    }

  return (
    <div className="Cadastro">
      <h1>Cadastrar</h1>
      <section>

        <form onSubmit={handleCadastro}>

        <input type="senha"
          placeholder="Senha"
          value={nome}
          onChange={e => setNome(e.target.value )}
          />

          <input type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value )}
          />

          <input type="senha"
          placeholder="Senha"
          value={senha}
          onChange={e => setSenha(e.target.value )}
          />

          <button type="submit">Cadastrar</button>

        </form>
      </section>
    </div>
  );
}

export default Cadastro;
