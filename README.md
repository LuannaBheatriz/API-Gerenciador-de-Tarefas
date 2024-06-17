## **API GERENCIADOR DE TAREFAS**

**Este é um projeto de API para gerenciar tarefas, desenvolvido em Node.js usando o framework Express e Sequelize para ORM (Object-Relational Mapping). A API permite criar, listar, atualizar e deletar tarefas.**

## **📋 PRÉ-REQUISITOS**

**Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:**

- [**Node.js**](https://nodejs.org/en/)
- [**NPM**](https://www.npmjs.com/get-npm) - **Express, Sequelize**
- [**MySQL**](https://www.mysql.com/)

## **🔧 INSTALAÇÃO**

### **Clone este repositório:**

```bash
bashCopiar código
git clone https://github.com/LuannaBheatriz/API-Gerenciador-de-Tarefas.git

```

### **Navegue até o diretório do projeto:**

```bash
bashCopiar código
cd API-Gerenciador-de-Tarefas

```

### **Instale as dependências:**

```bash
bashCopiar código
npm install

```

## **🔨 CONFIGURAÇÃO**

**Renomeie o arquivo `.env.example` para `.env` e edite-o com as configurações do seu banco de dados MySQL:**

```
envCopiar código
DB_HOST=127.0.0.1
DB_USER=root
DB_PASS=senha123@
DB_NAME=database_development

```

**Certifique-se de que seu banco de dados MySQL está em execução e que você criou um banco de dados com o nome especificado no arquivo `.env`.**

## **🚀 EXECUTANDO A APLICAÇÃO**

### **Inicie o servidor:**

```bash
bashCopiar código
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
