describe("API", function () {
  const request = require('supertest');
  const app = require("../src/index");

  it("Should start when loaded", function () {
    request(app)
      .get('/')
      .expect(200)
        .end(function (err: Error, res: Response) {
          if (err) throw err;
        });
  });

  it("Should 404 on wrong route", function () {
    request(app)
      .get('/bar/foo')
      .expect(404)
      .end(function (err: Error, res: Response) {
        if (err) throw err;
      });
  })
});
