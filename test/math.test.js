const assert = require('assert');
const sinon = require('sinon');
const math = require('../src/math');

describe('Testes da função addNumbers', () => {
  it('Deve retornar a soma de dois números', () => {
    const result = math.addNumbers(2, 3);
    assert.strictEqual(result, 5);
  });

  it('Deve chamar a função com os argumentos corretos', () => {
    const spy = sinon.spy(math, 'addNumbers');
    const a = 5;
    const b = 7;
    math.addNumbers(a, b);
    assert(spy.calledWith(a, b));
    spy.restore(); // Restaurar o spy para não interferir em outros testes
  });

  it('Deve lidar com números negativos', () => {
    const result = math.addNumbers(-3, 8);
    assert.strictEqual(result, 5);
  });
});

describe('Testes da função subtractNumbers', () => {
  it('Deve retornar a subtração de dois números', () => {
    const result = math.subtractNumbers(10, 5);
    assert.strictEqual(result, 5);
  });

  it('Deve chamar a função com os argumentos corretos', () => {
    const spy = sinon.spy(math, 'subtractNumbers');
    const a = 10;
    const b = 5;
    math.subtractNumbers(a, b);
    assert(spy.calledWith(a, b));
    spy.restore();
  });

  it('Deve lidar com números negativos', () => {
    const result = math.subtractNumbers(3, 8);
    assert.strictEqual(result, -5);
  });
});

describe('Testes da função multiplyNumbers', () => {
    it('Deve retornar o resultado da multiplicação de dois números', () => {
      const result = math.multiplyNumbers(2, 3);
      assert.strictEqual(result, 6);
    });
  
    it('Deve chamar a função com os argumentos corretos', () => {
      const spy = sinon.spy(math, 'multiplyNumbers');
      const a = 5;
      const b = 7;
      math.multiplyNumbers(a, b);
      assert(spy.calledWith(a, b));
      spy.restore();
    });
  
    it('Deve lidar com números negativos', () => {
      const result = math.multiplyNumbers(-3, 8);
      assert.strictEqual(result, -24);
    });
  });
  
  describe('Testes da função divideNumbers', () => {
    it('Deve retornar o resultado da divisão de dois números', () => {
      const result = math.divideNumbers(10, 2);
      assert.strictEqual(result, 5);
    });
  
    it('Deve chamar a função com os argumentos corretos', () => {
      const spy = sinon.spy(math, 'divideNumbers');
      const a = 10;
      const b = 2;
      math.divideNumbers(a, b);
      assert(spy.calledWith(a, b));
      spy.restore();
    });
  
    it('Deve lançar um erro ao tentar dividir por zero', () => {
      assert.throws(() => math.divideNumbers(5, 0), Error);
    });
  });
