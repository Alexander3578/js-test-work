// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем
    // В return стоит "заглушка", чтоб typescript не ругался
    return nums.reduce((acc, b) => acc + b, 0)
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return a === b && b === c && a === c
        ? '10' : (a + b < c) || (a + c < b) || (c + b < a)
            ? '00' : a === b || a === c || b === c
                ? '01' : '11'
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return Number(number.toString().split('').reduce((a, b) => Number(a) + Number(b), 0))
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    let even: number = 0;
    let odd: number = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            even += arr[i];
        } else {
            odd += arr[i]
        }
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return even > odd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    let resultArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 1 === 0 && array[i] >= 0) {
            resultArr.push(array[i] ** 2)
        }
    }
    // В return стоит "заглушка", чтоб typescript не ругался
    return resultArr;
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    let result = 0;
    for (let i = 1; i <= N; i++)
        result += i;
    // В return стоит "заглушка", чтоб typescript не ругался
    return result;
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    // let result = [];
    // //...здесь пишем код.
    // // В return стоит "заглушка", чтоб typescript не ругался
    // while(amountOfMoney >= 1000){
    //     result.push(1000)
    //     amountOfMoney -= 1000;
    // }
    // while(amountOfMoney >= 500){
    //     result.push(500)
    //     amountOfMoney -= 500;
    // }
    // while(amountOfMoney >= 100){
    //     result.push(100)
    //     amountOfMoney -= 100;
    // }
    // while(amountOfMoney >= 50){
    //     result.push(50)
    //     amountOfMoney -= 50;
    // }
    // while(amountOfMoney >= 20){
    //     result.push(20)
    //     amountOfMoney -= 20;
    // }
    // while(amountOfMoney >= 10){
    //     result.push(10)
    //     amountOfMoney -= 10;
    // }
    // while(amountOfMoney >= 5){
    //     result.push(5)
    //     amountOfMoney -= 5;
    // }
    // while(amountOfMoney >= 2){
    //     result.push(2)
    //     amountOfMoney -= 2;
    // }
    // while(amountOfMoney >= 1){
    //     result.push(1)
    //     amountOfMoney -= 1;
    // }
    // return result;
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    let result = [];

    for (let i = 0; i < banknotes.length; i++) {
        const currentBanknote = banknotes[i];
        let count = Math.floor(amountOfMoney / currentBanknote);

        if (count > 0) {
            while(count > 0){
                result.push(currentBanknote);
                count = count - 1;
            }
            amountOfMoney = amountOfMoney % currentBanknote;
        }
    }
    return result;
}

