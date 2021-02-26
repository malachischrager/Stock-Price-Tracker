import IEXRequest from "./request";
import { ForexParams } from "./types";
declare class Forex {
    private req;
    constructor(req: IEXRequest);
    /** This endpoint provides an end of day exchange rate of a given currency pair */
    rate: (params: ForexParams) => Promise<any>;
    /** This endpoint returns real-time foreign currency exchange rates data updated every 250 milliseconds. */
    latest: () => Promise<any>;
    convert: ({ amount, symbols }: any) => Promise<any>;
    historical: ({ from, to, on, first, filter, symbols, last }: any) => Promise<any>;
}
export default Forex;
