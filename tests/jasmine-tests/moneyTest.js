import { formatCurrency } from "../../utils/money.js";

    describe('test suite: format currency', () => {
    it('converts cents into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('testing with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('testing rounding', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
});
