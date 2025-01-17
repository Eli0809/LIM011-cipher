global.window = global;
require('../src/cipher');

describe('cipher', () => {
  it('debería ser un object', () => {
    expect(typeof cipher).toBe('object');
   });
  });
  describe('cipher.encode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.encode).toBe('function');
    });
  });
    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      expect(window.cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33)).toBe("HIJKLMNOPQRSTUVWXYZABCDEFG");
    });
    
  describe('cipher.decode', () => {
    it('debería ser una función', () => {
      expect(typeof cipher.decode).toBe('function');
    });
  });
    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      expect(window.cipher.encode("HIJKLMNOPQRSTUVWXYZABCDEFG",33)).toBe("OPQRSTUVWXYZABCDEFGHIJKLMN");
    });