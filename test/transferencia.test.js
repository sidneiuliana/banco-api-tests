const request = require("supertest");
const { expect } = require("chai");
const { obterToken } = require("../helpers/autenticacao");

require("dotenv").config();

describe("Tranferencias", () => {
  describe("POST /transferencias", () => {
    let token;

    beforeEach(async () => {
      //Capturar o Token
      token = await obterToken("julio.lima", "123456");
    });

    it("Deve retorar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00", async () => {
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", "Bearer " + token)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 11,
          token: "",
        });

      expect(response.status).to.equal(201);
    });

    it("Deve retorar falha com 422 quando o valor da transferencia for abaixo de R$ 10,00", async () => {
      const response = await request(process.env.BASE_URL)
        .post("/transferencias")
        .set("Content-Type", "application/json")
        .set("Authorization", "Bearer " + token)
        .send({
          contaOrigem: 1,
          contaDestino: 2,
          valor: 7,
          token: "",
        });

      expect(response.status).to.equal(422);
    });
  });
});
