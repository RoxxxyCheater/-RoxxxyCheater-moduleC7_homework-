import { position } from "../../utils/script.js";


describe( 'tests for senior functions', ()=> {
    const junior = 1
    const middle = 2
    const senior = 3
    const boss = 4
    it("should operate correctly with numbers to get a future work position", ()=> {
        expect(position(junior)).toBe('junior');
        expect(position(middle)).toBe('middle');
        expect(position(senior)).toBe('senior');
        expect(position(boss)).toBe('boss');
        expect(position(5)).toBe('Work in factory forever or read question again!');
    });
});
