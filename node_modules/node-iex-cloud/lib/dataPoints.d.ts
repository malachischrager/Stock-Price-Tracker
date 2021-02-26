import IEXRequest from "./request";
declare class DataPoints {
    private req;
    constructor(req: IEXRequest);
    market(): Promise<any>;
    treasury(): Promise<any>;
    energy(): Promise<any>;
}
export default DataPoints;
