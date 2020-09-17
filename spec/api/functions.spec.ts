describe("Functions", function () {
  const request = require('supertest');
  const app = require("../../src/index");

  let route = '/api/calculations';

  describe("Calculations", function () {
    describe("getBishops() fn", function () {


      it("Should only allow numbers", function () {
        request(app)
          .get(route + '/bishop/boo/far')
          .expect(500)
          .end(function (err: Error, res: Response) {
            if (err) throw err;
          });
      });

      it("Should return null if doesnt match conditions", function () {
        request(app)
          .get(route + '/bishop/2/1')
          .expect((res: { body: any; }) => {
            expect(res.body).toEqual(null);
          })
          .end(function (err: Error, res: Response) {
            if (err) throw err;
          });
      });

      it("Should return number if match conditions", function () {
        request(app)
          .get(route + '/bishop/3/39')
          .expect((res: { body: any; }) => {
            expect(res.body).toEqual(1);
          })
          .end(function (err: Error, res: Response) {
            if (err) throw err;
          });
      });
    });
  });
});