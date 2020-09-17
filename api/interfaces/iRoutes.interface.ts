export type IRoutesArray = IRoutes[];

export interface IRoutes {
  path: string,
  methods: Object,
  middleware: Object
}