
# **Banco API Tests**

## ✅ Objetivo
Este projeto tem como objetivo **automatizar testes de API REST** para um sistema bancário fictício, utilizando **JavaScript** e um conjunto de ferramentas voltadas para testes automatizados.  
Ele permite validar endpoints da API, contribuindo com a qualidade das funcionalidades expostas.

---

## 🛠 **Stack Utilizada**
- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript
- [Mocha](https://mochajs.org/) - Framework de testes
- [Chai](https://www.chaijs.com/) - Biblioteca de asserções
- [Supertest](https://github.com/visionmedia/supertest) - Testes de requisições HTTP
- [Mochawesome](https://www.npmjs.com/package/mochawesome) - Geração de relatórios em HTML
- Outras dependências listadas no arquivo `package.json`

---

## 📂 **Estrutura de Diretórios**
```
banco-api-tests/
├── test/                     # Contém os arquivos de teste
│   ├── login.test.js         # Exemplo: testes relacionados ao login
│   ├── transferencia.test.js # Exemplo: testes relacionados a transferencias
├── mochawesome-report/       # Diretório onde são gerados os relatórios HTML
├── .env.example              # Exemplo de configuração de variáveis de ambiente
├── .gitignore                
├── package.json              # Gerenciamento de dependências
└── README.md                 # Documentação do projeto
```

---

## ⚙️ **Configuração do Arquivo .env**
Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```
BASE_URL=http://sua-api.com
```

> **BASE_URL**: URL base para execução dos testes (ex: `http://localhost:3000`).

---

## ▶ **Como Executar os Testes**
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

---

## 📊 **Geração de Relatório**
O projeto utiliza **Mochawesome** para gerar relatórios em HTML.

- Para gerar o relatório, execute:
  ```bash
  npm run report
  ```

- O relatório será gerado no diretório:
  ```
  mochawesome-report/mochawesome.html
  ```

---

## 🔗 **Documentação das Dependências**
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/visionmedia/supertest)
- [Mochawesome](https://www.npmjs.com/package/mochawesome)
- [dotenv](https://www.npmjs.com/package/dotenv)
