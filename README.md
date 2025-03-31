# 🛢️ SQLRunner

## Descrição

Aplicação web para executar arquivos no formato .sql em um banco de dados. Esses arquivos devem ser carregados via upload na interface gráfica.

## Propósito

Automatizar a execução de scripts SQL em bancos de dados e ter um controle de versionamento da aplicação.

## Objetivo

Conectar com um banco de dados, fazer o upload de arquivos no formato .sql, executá-los, mostrar ao usuário o retorno da tentativa de execução de cada script e gerar o controle de versão da atualização.

## Público alvo

Analistas de Sistemas e DBA que necessitem aplicar atualizações em banco de dados relacionais.

## Requisitos Funcionais

- Conectar ao banco de dados informado pelo usuário
- Fazer upload de arquivos no formato .sql
- A interface gráfica deve mostrar um "loading" durante o tempo em que as operações no banco de dados estiverem ocorrendo
- Ler os arquivos e executar os comandos SQL contidos nos mesmos
- Listar o retorno da execução dos comandos SQL contidos nos arquivos carregados
- Listar os nomes dos arquivos e as linhas que apresentarem erro durante a execução
- Mostrar a data e o número da versão dos scripts executados (caso exista)

## Requisitos Não Funcionais

- A interface gráfica deve ser responsiva tanto para desktop quanto para mobile
- Enquanto os scripts estiverem sendo executados a aplicação deve continuar funcionando normalmente, permitindo a navegação

## Tecnologias Utilizadas

- PostgreSQL
- React
- JavaScript (ES6+)
- Node.js
- TypeScript
- Express
- TypeORM

## 📂 Estrutura do Projeto

```bash

```

## Documentação da API

### Descrição

### Base URL

### Tecnologias

### Endpoints

### Exemplos

### Erros Comuns

### Como Executar o Projeto

### Estrutura dos Dados

