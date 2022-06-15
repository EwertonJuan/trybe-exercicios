import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

const renderContents = () => {
    return conteudos.map(({ conteudo, bloco, status}) => <li>
        O conteúdo é: {conteudo}<br></br>
        Status: {status}<br></br>
        Bloco: {bloco}
    </li>);
}

class Content extends React.Component {
    render() {
        return (
            <ul>
                {renderContents()}
            </ul>
        );
    }
};

export default Content;
