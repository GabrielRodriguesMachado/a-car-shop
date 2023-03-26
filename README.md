# Projeto de gerenciamento de concessionária

Este projeto é uma API de gerenciamento de veículos, desenvolvida utilizando Node.js, Express e MongoDB. A API permite criar, atualizar, excluir e buscar informações de veículos no banco de dados.

## Estrutura do Projeto
O projeto possui a seguinte estrutura de arquivos:

- **domain/Car.ts**: Define a classe Car, que herda de Vehicle e implementa a interface ICar. Esta classe possui as propriedades e métodos necessários para manipular dados do carro.
- **Interfaces/ICar.ts**: Define a interface ICar que é utilizada como contrato para a classe Car e outras classes relacionadas.
- **Models/CarODM.ts**: Define a classe CarODM que estende a classe AbstractODM. Esta classe é responsável pela definição do schema e interação com o banco de dados MongoDB através do Mongoose.
- **Controllers/CarController.ts**: Define a classe CarController, responsável por lidar com as requisições HTTP e realizar a lógica de negócio usando os métodos da classe CarService.
- **Services/CarService.ts**: Define a classe CarService, responsável pela lógica de negócio e interação com a classe CarODM para persistência dos dados.
- **utils/ErrorClass.ts**: Define a classe ErrorClass que é utilizada para lidar com erros na aplicação.

A mesma estrutura se aplica para Motorcycles.

## Rotas da API
A API possui as seguintes rotas:

- **POST /cars**: Cria um novo carro.
- **GET /cars**: Lista todos os carros.
- **GET /cars/:id**: Retorna um carro específico pelo ID.
- **PUT /cars/:id**: Atualiza um carro específico pelo ID.
- **DELETE /cars/:id**: Exclui um carro específico pelo ID.

A API também possui a rota **/motorcycles** que possui as mesmas funções que a rota **/cars** mas para motos.

## Testes nas Camadas Controller e Service

Foram realizados testes unitários nas camadas controller e service do projeto para garantir a qualidade e a funcionalidade do código. Os arquivos de teste são:

1. **CarService.test.ts** e **MotorcycleService.test.ts**: Estes arquivos contém os testes para a camada de serviço, verificando a correta implementação das funcionalidades e a interação com o modelo de dados (ODM).

2. **CarController.test.ts** e **MotorcycleController.test.ts**: Estes arquivos contém os testes para a camada controller, verificando se os endpoints estão funcionando corretamente e se a resposta HTTP possui os códigos de status adequados.

Os testes foram implementados utilizando as bibliotecas `chai`, `sinon` e `mocha`, que fornecem as funcionalidades necessárias para criar e executar os testes, além de permitir a criação de stubs e mocks.

Nos testes, foram verificadas as seguintes funcionalidades:

- **CarService**: criação de carros, busca de todos os carros, busca por ID, atualização e exclusão de carros.
- **MotorcycleService**: criação de motos, busca de todos as motos, busca por ID, atualização e exclusão de motos.
- **CarController**: resposta aos endpoints de criação, busca de todos os carros, busca por ID, atualização e exclusão de carros, além da verificação dos códigos de status HTTP corretos.
- **MotorcycleController**: resposta aos endpoints de criação, busca de todos as motos, busca por ID, atualização e exclusão de motos, além da verificação dos códigos de status HTTP corretos.

Através desses testes, é possível garantir a qualidade do código e a correta implementação das funcionalidades do projeto.
