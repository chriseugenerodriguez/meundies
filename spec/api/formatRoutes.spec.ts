// UTILS
import APIPrint from '../../api/utils/formatRoutes';

describe("Utilities", function () {

  describe("Format Routes", function () {
    let data = require('../mocks/data.json');
    let origin = {"path": "/"};

    it("Should contain origin", function () {
      expect(Object.keys(origin)).toContain('path');
    });

    it("Should be removed when used", function () {
      let output = APIPrint.outPutRoutes(data);

      expect(output.length).toBeLessThan(data.length);
    });
  });
});