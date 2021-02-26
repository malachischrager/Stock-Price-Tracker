import IEXRequest from "./request";
import { CryptoQuote } from "./types";
declare class Crypto {
    private req;
    constructor(req: IEXRequest);
    book: () => Promise<any>;
    price: () => Promise<any>;
    quote: () => Promise<CryptoQuote>;
    events: () => Promise<any>;
}
export default Crypto;
