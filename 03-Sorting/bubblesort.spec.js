describe('Bubble Sort', function(){
  describe('Funcionamiento', function(){
    
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('implementa bien el bubbleSort', function(){
        expect( bubbleSort([6, 5, 4, 8, 9, 1]) ).toEqual( [1, 4, 5, 6, 8, 9] );
        expect( bubbleSort([3, 7, 2]) ).toEqual( [2, 3, 7] );
        expect( bubbleSort([2, 1]) ).toEqual( [1, 2] );
        expect( bubbleSort([1, 2, 3]) ).toEqual( [1, 2, 3] );
        
      });
    
  });


describe('Swaping', function(){
  beforeEach(function () {
    spyOn(bubble, 'swap').and.callThrough();
  })
  it('deberia intercambiar 8 veces ', function () {
    bubbleSort([8, 2, 5, 3, 1]);
    expect(bubble.swap.calls.count()).toEqual(8);
  });
  it('Si el arreglo ya esta ordenado no realiza ningun swap', function () {
    bubbleSort([1, 2, 3, 4, 5]);
    expect(bubble.swap.calls.count()).toEqual(0);
  });

});

describe('Comparaciones', function(){
    beforeEach(function () {
      spyOn(bubble, 'comparacion').and.callThrough();
    })
    it('deberia comparar 25 veces ', function () {
      bubbleSort([8, 2, 5, 3, 1]);
      expect(bubble.comparacion.calls.count()).toEqual(25);
    });
    it('Aunque este ordenado realiza 25 comparaciones', function () {
      bubbleSort([1, 2, 3, 5, 8]);
      expect(bubble.comparacion.calls.count()).toEqual(25);
    });
    it('Al ser una solucion no optima, un array de n elementos deberia realizar n^2 comparaciones', function () {
        bubbleSort([5, 3]);
        expect(bubble.comparacion.calls.count()).toEqual(4);
      });
    it('Por lo tanto un array de 8 elementos deberia realizar 64 comparaciones', function () {
        bubbleSort([1, 2, 5, 3, 8, 4, 9, 6]);
        expect(bubble.comparacion.calls.count()).toEqual(64);
      });
    it('Y uno de 4 elementos deberia realizar 16 comparaciones', function () {
        bubbleSort([1, 2, 5, 3]);
        expect(bubble.comparacion.calls.count()).toEqual(16);
      });

  });
});
  