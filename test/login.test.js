const request = require("supertest");
const { expect } = require("chai");
const postLogin = require("../fixtures/postLogin.json");

require("dotenv").config();

describe("Login", () => {
  describe("POST /login", () => {
    it("Deve retorar 200 com token em string quando usar credenciais validas", async () => {
      const bodyLogin = { ...postLogin };

      const response = await request(process.env.BASE_URL)
        .post("/login")
        .set("Content-Type", "application/json")
        .send(bodyLogin);

      expect(response.status).to.equal(200);
      expect(response.body.token).to.be.a("string");
    });
  });
});
