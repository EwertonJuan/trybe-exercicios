import React from 'react';
import estados from './data';

class FieldsetUser extends React.Component {
    render() {
        return (
            <fieldset>
              <label htmlFor="nome">
                Nome:
                <input type="text" name="texto" id="nome" maxLength="40" required/>
              </label>

              <label htmlFor="email">
                Email:
                <input type="text" name="texto" id="email" maxLength="50" required/>
              </label>

              <label htmlFor="cpf">
                CPF:
                <input type="text" name="texto" id="cpf" maxLength="11" required/>
              </label>

              <label htmlFor="endereco">
                Endereço:
                <input type="text" name="texto" id="endereco" maxLength="200" pattern="[A-Za-z]" required/>
              </label>

              <label htmlFor="cidade">
                Cidade:
                <input type="text" name="texto" id="cidade" maxLength="28" required/>
              </label>

              <label htmlFor="estado">
                Estado:
                <select name="estado" id="estado">
                  {estados.map((estado) => (
                    <option key={estado} name={estado}>{estado}</option>
                  ))}
                </select>
              </label>
            </fieldset>
        );
    }
}

export default FieldsetUser;
