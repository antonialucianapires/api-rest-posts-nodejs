# API REST Posts com Node.js

## Descrição

Este repositório contém um exemplo simples de uma API REST desenvolvida com Node.js para criar, exibir e deletar posts. Esta API não possui um banco de dados e foi desenvolvida apenas para fins didáticos.

## Funcionalidades

- **Criar Posts**: Adicione novos posts à plataforma.
- **Exibir Posts**: Visualize todos os posts disponíveis.
- **Deletar Posts**: Remova posts indesejados.

## Como Usar

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto e instale as dependências usando `npm install`.
3. Inicie o servidor usando `npm start`.
4. Acesse a API através de `http://localhost:3000`.

### Endpoints e Exemplos de Requests

- **Obter Todos os Posts**:
  - Endpoint: `/posts`
  - Método: `GET`

- **Obter Post por ID**:
  - Endpoint: `/posts/:id`
  - Método: `GET`

- **Criar Novo Post**:
  - Endpoint: `/posts`
  - Método: `POST`
  - Body:
    ```json
    {
        "titulo": "O que é Banco de Dados?",
        "descricao": "É o agrupamento de dados que tratam do mesmo assunto, e que precisam ser armazenados para segurança ou conferência futura.",
        "autor": "Ivan de Souza",
        "origem": "https://rockcontent.com/"
    }
    ```

- **Deletar Post**:
  - Endpoint: `/posts/:id`
  - Método: `DELETE`

## Contribuições

Sinta-se à vontade para contribuir com este projeto, fazendo um fork e submetendo um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/antonialucianapires/api-rest-posts-nodejs/blob/main/LICENSE) para mais detalhes.
