# <div align="center">DSMovie</div>

## 📃 Sobre
Aplicação: <br>
<https://renan-dsmovie.netlify.app/>

DSMovie é uma aplicação fullstack desenvolvida durante a 6ª edição da Semana Spring-React [DevSuperior](https://devsuperior.com.br/) – evento ministrado pelo professor Nélio Alves. <br> <br>
Este projeto exibe um catálogo de filmes e suas respectivas avaliações. O usuário pode avaliar qualquer filme clicando sobre ele e preenchendo o formulário com o e-mail e a sua nota. Ao final, ele é redirecionado para a home page e o filme é exibido com a nota e o número de avaliações atualizados.

Durante o desenvolvimento foi criada uma API com os seguintes endpoints:
* **GET /movies/?size=12&page=0**: exibe a lista de filmes cadastrados (12 filmes por página)
* **GET /movies/{id}**: exibe um filme de acordo com o seu id
* **PUT /scores**: insere a avaliação do usuário sobre um filme

---

## 💻 Frameworks, bibliotecas e ferramentas  
O projeto foi desenvolvido com as seguintes tecnologias: <br>

### Ferramentas
* Spring Tool Suite
* VS Code
* Postman

### Back-end
* Spring Framework com Maven
* Java
* Banco de Dados H2 para testes

### Front-end
* React + Router DOM
* Typescript
* Axios
* Bootstrap

### Implantação
* Back-end: Heroku
* Banco de dados: PostgreSQL
* Front-end: Netlify

---

## 🎬 Interface
**Home**
![Home](https://ik.imagekit.io/zqxyh6u3ylz/DS_Movie/Home_bs-6qmDAc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642456191236)

**Form**
![Form](https://ik.imagekit.io/zqxyh6u3ylz/DS_Movie/Form_TnAAy3ZjkG4.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642455948820)

---

## 📁 Como baixar o repositório
```bash
# Clonar o repositório
git clone https://github.com/RenanS80/dsmovie

# Acessar a pasta dsmovie
cd dsmovie
```
---

## ✅ Como executar a aplicação
### Back-end
<small>Pré-requisito: Java 11</small>

```bash
# Entrar na pasta backend do projeto clonado
cd backend

#Executar o projeto
mvn spring-boot:run
```

### Front-end
<small>Pré-requisito: Yarn</small>

```bash
# Entrar na pasta frontend do projeto clonado
cd frontend

# Instalar as dependências
yarn install

# Executar a aplicação
yarn start

# Acessar http://localhost:8080 no seu navegador.
```
