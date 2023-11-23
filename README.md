# back-end-process-int
Repositório destinado ao desenvolvimento do back-end da aplicação para o teste do integrado.

#####Documentação: [Teste-Integrado-Notion](https://spectacular-piccolo-51a.notion.site/Teste-Integrado-9c4b192c8ef0464797308650d6ac64a3?pvs=4)

## Para rodar o projeto

Para rodar o projeto utilizei um container __Docker__ utilizando um banco __Postgres__ que foi criado com:

```
docker run -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
```

### Com o container rodando, na aplicação basta:
* Instalar as dependências com `npm install`
* Configurar o arquivo `.env` com: 
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
```
* rodar as migrations com:
```
npx prisma migrate dev --name qualquer_nome
```
* rodar as seeds com:
```
npx prisma db seed
```
* rodar o projeto na porta 4003 com:
```
npm run dev
```

#### *Com isso a aplicação irá criar o banco de dados com algumas tabelas populadas e suas devidas rotas de API.*




