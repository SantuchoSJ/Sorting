describe('Merge Sort', function () {

    describe('Split Array function', function () {
        it('es capaz de dividir el arreglo en dos partes', function () {
            expect(split([5, 8, 7, 9, 4, 3])).toEqual([[5, 8, 7], [9, 4, 3]]);
        });

        it('es capaz de dividir el arreglo en dos partes, aunque sea impar', function () {
            expect(split([5, 8, 7, 0, 9, 4, 3])).toEqual([[5, 8, 7,], [0, 9, 4, 3]]);


        });
    });


    describe('Merge', function () {
        it('es capaz de mergear dos arreglos ordenados a un solo arreglo ordenado', function () {
            expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);

        });
    });

    describe('MergeSort', function () {
        it('resuelve bien el mergeSort', function () {
            expect(mergeSort([4, 2, 5, 1, 6, 3])).toEqual([1, 2, 3, 4, 5, 6]);

        });
    });
});