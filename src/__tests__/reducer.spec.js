const reducer = require('../reducer');

describe('reducer()', () => {
    it('should return correct value', () => {
        expect(reducer('String string', 'upperCase')).toStrictEqual('STRING STRING');
        expect(reducer('String string', 'lowerCase')).toStrictEqual('string string');
        expect(reducer('String string', 'capitalize')).toStrictEqual('String String');
    });
});
