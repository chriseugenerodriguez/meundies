describe("Routes", function () {
  const request = require('supertest');
  const app = require("../../src/index");

  let route = '/api/calculations';

  describe("Calculations", function () {
    it("Should 404 on wrong route", function () {
      request(app)
        .get(route + '/boo')
        .expect(404)
        .end(function (err: Error, res: Response) {
          if (err) throw err;
        });
    });

    describe("Route", function () {
      it("GET: /bishop/:startNumber/:endNumber", function () {
        request(app)
          .get(route + '/bishop/2/1')
          .expect(200)
          .end(function (err: Error, res: Response) {
            if (err) throw err;
          });
      });
    });
  });
});