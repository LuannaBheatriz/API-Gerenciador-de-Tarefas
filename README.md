# **API GERENCIADOR DE TAREFAS**

Este README detalha o projeto da API para um sistema de usuários. O projeto foi desenvolvido em Node.js utilizando o Express e o Sequelize como ORM (Object-Relational Mapping). A API permite operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar usuários em um banco de dados MySQL.

## **📋 PRÉ-REQUISITOS**

Para começar a usar esta API, é fundamental que você tenha um ambiente de desenvolvimento configurado. Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**: É uma plataforma JavaScript usada para construir o servidor. Node.js é um ambiente de execução JavaScript no lado do servidor que permite aos desenvolvedores criar aplicativos web escaláveis. [Download Node.js](https://nodejs.org/en/)
- **NPM (Node Package Manager)**: É um gerenciador de pacotes para Node.js. Ele permite que os usuários instalem e atualizem suas dependências de projeto. [Download NPM](https://www.npmjs.com/get-npm)
- **Express**: É um Framework web para Node.js. Ele simplifica o desenvolvimento de aplicativos web ao fornecer uma série de recursos pré-construídos. [Download Express](https://expressjs.com/)
- **Sequelize**: É um ORM (Object-Relational Mapping) para Node.js. Ele fornece uma maneira de interagir com bancos de dados SQL como MySQL, PostgreSQL, SQLite, etc., usando JavaScript. [Download Sequelize](https://sequelize.org/)
- **MySQL**: É um sistema de banco de dados relacional. MySQL é uma das opções mais populares para bancos de dados relacionais, que podem ser gerenciados usando SQL (Structured Query Language). [Download MySQL](https://www.mysql.com/)

## **🔧 INSTALAÇÃO**

### **Clone este repositório:**

```bash
bashCopiar código
git clone https://github.com/LuannaBheatriz/API-Gerenciador-de-Tarefas.git

```

### **Navegue até o diretório do projeto:**

```bash
bashCopiar código
cd GERENCIADOR-DE-TAREFAS-API

```

1. **Instale todas as dependências necessárias:**


### **Aqui estão os comandos de instalação para cada uma das dependências necessárias:**

### Node.js e NPM:
Node.js (inclui NPM, que geralmente vem junto com o Node.js)

### Node.js
Express:
Express: Framework web para Node.js.

### Para iniciar um novo projeto Express, primeiro você precisa ter o Node.js e o NPM instalados. Em seguida, siga estes passos:

### Criar um novo diretório para o projeto:

```bash
bashCopiar código
mkdir meu-projeto-express
cd meu-projeto-express
```

### Inicializar um novo projeto Node.js (se ainda não tiver um):

```bash
bashCopiar código
npm init -y
```

### Instalar o Express:

```bash
bashCopiar código
npm install express
```

### Sequelize:
Sequelize: ORM (Object-Relational Mapping) para Node.js.

### Para usar o Sequelize em conjunto com o Node.js, você precisa configurar o Sequelize e inicializar sua conexão com o banco de dados:

### Instalar o Sequelize CLI (opcional, mas recomendado para migrations):

```bash
bashCopiar código
npm install --save-dev sequelize-cli
```

### Instalar o Sequelize e o driver do banco de dados (por exemplo, mysql2):

```bash
bashCopiar código
npm install sequelize mysql2
```

### Inicializar um projeto Sequelize (se ainda não tiver um):

```bash
bashCopiar código
npx sequelize-cli init
```

### Criar um modelo e migration (exemplo):

```bash
bashCopiar código
npx sequelize-cli model:generate --name Usuario --attributes nome:string,email:string,senha:string
```

### Executar as migrations para criar tabelas no banco de dados:

```bash
bashCopiar código
npx sequelize-cli db:migrate
```

### MySQL2:
MySQL2: Pacote para conexão com MySQL em Node.js.

### Para usar o MySQL2 diretamente no terminal, você pode usá-lo para acessar e gerenciar seu banco de dados MySQL:

### Instalar o pacote MySQL2 globalmente (se ainda não tiver):

```bash
bashCopiar código
npm install -g mysql2
```

### Acessar o MySQL via terminal:

```bash
bashCopiar código
mysql -u root -p
```

Isso abrirá o prompt do MySQL. Insira sua senha quando solicitado.

Estes comandos devem ser executados no terminal dentro do diretório do seu projeto Node.js para instalar cada uma das dependências necessárias. Certifique-se de que o Node.js está instalado corretamente na sua máquina antes de prosseguir com essas instalações.

### Criação do Banco de Dados MySQL
Acesso ao MySQL pelo terminal:

```bash
bashCopiar código
mysql -u root -p
```
Isso abrirá o prompt do MySQL. Insira sua senha quando solicitado.

### Criação do Banco de Dados:

```bash
bashCopiar código
CREATE DATABASE sistema_de_usuarios_development;
```
Substitua sistema_de_usuarios_development pelo nome desejado para o seu banco de dados.

### Verificar se o banco de dados foi criado:

```bash
bashCopiar código
SHOW DATABASES;
```
Isso listará todos os bancos de dados existentes, incluindo o novo que você acabou de criar.

### Configuração no Sequelize
Se você já configurou o Sequelize anteriormente como foi descrito, provavelmente já tem um arquivo de configuração (config/config.js) onde você especifica os detalhes de conexão com o banco de dados. Certifique-se de que as informações de conexão estão corretamente configuradas nesse arquivo.



## **🔨 CONFIGURAÇÃO**

**Renomeie o arquivo `.env.example` para `.env` e edite-o com as configurações do seu banco de dados MySQL:**

```
envCopiar código
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=senha123@
DB_NAME=database_development

```

### Configuração no Sequelize:
No arquivo de configuração do Sequelize (config/config.js), ajuste as configurações para usar as variáveis de ambiente definidas no arquivo .env. Um exemplo básico de configuração pode ser:

```bash
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  // Configurações para outros ambientes (produção, teste) se necessário
};
```

### Sincronização com o Banco de Dados:
No arquivo onde você inicializa o Sequelize (models/index.js), adicione o código para autenticar e sincronizar com o banco de dados. Geralmente, isso já é feito automaticamente se você seguiu o padrão gerado pelo Sequelize CLI. Por exemplo:

```bash
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
    return sequelize.sync(); // Isso sincroniza todos os modelos com o banco de dados
  })
  .catch(err => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

module.exports = sequelize;
````

### Execução das Migrations (se aplicável):
Se você estiver usando Sequelize migrations para criar suas tabelas, execute o comando a seguir para aplicar as migrations ao banco de dados:

```bash
npx sequelize-cli db:migrate
```
Esse comando aplicará todas as migrations pendentes e criará as tabelas no banco de dados de acordo com os modelos definidos.

Com esses passos, você criará e configurará corretamente seu banco de dados MySQL para trabalhar com seu projeto Node.js utilizando Sequelize como ORM. Certifique-se de ajustar os detalhes conforme necessário para o seu ambiente específico de desenvolvimento.

**Certifique-se de que seu banco de dados MySQL está em execução e que você criou um banco de dados com o nome especificado no arquivo `.env`.**

## **🚀 EXECUTANDO A APLICAÇÃO**

### **Inicie o servidor:**

```bash
bashCopiar código
npm run dev
```

```
npm start
```

**O servidor estará em execução na porta 3000. Você pode acessar a API em `http://localhost:3000/api`.**

## **📚 ENDPOINTS DA API**

### **CRIAR UMA TAREFA**

- **URL:** `/api/tarefas`
- **Método:** `POST`
- **Corpo da Requisição:**
    
    ```json
    jsonCopiar código
    {
      "titulo": "Nome da Tarefa",
      "descricao": "Descrição da Tarefa",
      "concluida": false}
    
    ```

### **LISTAR TODAS AS TAREFAS**

- **URL:** `/api/tarefas`
- **Método:** `GET`

### **OBTER UMA TAREFA POR ID**

- **URL:** `/api/tarefas/:id`
- **Método:** `GET`

### **ATUALIZAR UMA TAREFA**

- **URL:** `/api/tarefas/:id`
- **Método:** `PUT`
- **Corpo da Requisição:**
    
    ```json
    jsonCopiar código
    {
      "titulo": "Nome da Tarefa Atualizado",
      "descricao": "Descrição da Tarefa Atualizada",
      "concluida": true}
    
    ```
    
### **DELETAR UMA TAREFA**

- **URL:** `/api/tarefas/:id`
- **Método:** `DELETE`

## **🛠 TESTANDO A API**

**Você pode usar ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/) para testar os endpoints da API.**

### **EXEMPLO DE CONFIGURAÇÃO NO INSOMNIA**

1. **Abra o Insomnia e crie uma nova requisição.**
2. **Selecione o método HTTP (GET, POST, PUT, DELETE).**
3. **Insira a URL do endpoint (ex: `http://localhost:3000/api/tarefas`).**
4. **Para requisições POST e PUT, vá para a aba "Body" e selecione "JSON", depois insira o corpo da requisição.**
5. **Clique em "Send" para enviar a requisição e visualizar a resposta.**
