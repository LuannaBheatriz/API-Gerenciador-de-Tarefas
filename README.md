API Gerenciador de Tarefas
Este é um projeto de API para gerenciar tarefas, desenvolvido em Node.js usando o framework Express e Sequelize para ORM (Object-Relational Mapping). A API permite criar, listar, atualizar e deletar tarefas.

📋 Pré-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

Node.js
NPM - Express, Sequelize
MySQL
🔧 Instalação
Clone este repositório:
bash
Copiar código
git clone https://github.com/LuannaBheatriz/API-Gerenciador-de-Tarefas.git
Navegue até o diretório do projeto:
bash
Copiar código
cd API-Gerenciador-de-Tarefas
Instale as dependências:
bash
Copiar código
npm install
🔨 Configuração
Renomeie o arquivo .env.example para .env e edite-o com as configurações do seu banco de dados MySQL:

env
Copiar código
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=senha123@
DB_NAME=database_development
Certifique-se de que seu banco de dados MySQL está em execução e que você criou um banco de dados com o nome especificado no arquivo .env.

🚀 Executando a Aplicação
Inicie o servidor:
bash
Copiar código
npm start
O servidor estará em execução na porta 3000. Você pode acessar a API em http://localhost:3000/api.

📚 Endpoints da API
Criar uma Tarefa
URL: /api/tarefas
Método: POST
Corpo da Requisição:
json
Copiar código
{
  "titulo": "Nome da Tarefa",
  "descricao": "Descrição da Tarefa",
  "concluida": false
}
Listar Todas as Tarefas
URL: /api/tarefas
Método: GET
Obter uma Tarefa por ID
URL: /api/tarefas/:id
Método: GET
Atualizar uma Tarefa
URL: /api/tarefas/:id
Método: PUT
Corpo da Requisição:
json
Copiar código
{
  "titulo": "Nome da Tarefa Atualizado",
  "descricao": "Descrição da Tarefa Atualizada",
  "concluida": true
}
Deletar uma Tarefa
URL: /api/tarefas/:id
Método: DELETE
🛠 Testando a API
Você pode usar ferramentas como Insomnia ou Postman para testar os endpoints da API.

Exemplo de Configuração no Insomnia
Abra o Insomnia e crie uma nova requisição.
Selecione o método HTTP (GET, POST, PUT, DELETE).
Insira a URL do endpoint (ex: http://localhost:3000/api/tarefas).
Para requisições POST e PUT, vá para a aba "Body" e selecione "JSON", depois insira o corpo da requisição.
Clique em "Send" para enviar a requisição e visualizar a resposta.
