import { IRoutesArray, IRoutes } from "../interfaces/iRoutes.interface";

class APIPrint {

  constructor() {
  }

  outPutRoutes = (data: IRoutesArray) => {
    return data
      // take out origin 
      .filter((r: IRoutes) => r.path !== '/')

      // pretty route
      .map((r: IRoutes) => {
        return {
          method: Object.values(r.methods),
          path: r.path
        };
      });
  };
}

export default new APIPrint();