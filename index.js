const separator = "\n" + "-".repeat(50);

// 1) Сума чисел від 1 до N
function task1_SumUpToN() {
    console.log("## 1. Сума чисел від 1 до N");
    // Введення даних, promt це як input на Python
    const N_str = prompt("Введіть число N для підрахунку суми від 1 до N:");
    const N = parseInt(N_str);

    if (isNaN(N) || N < 1) {
        console.log("Некоректний ввід. Пропускаємо.");
        return;
    }

    let sum = 0; 
    
    for (let i = 1; i <= N; i++) {
        sum += i;
    }

    console.log(`Введіть N: ${N}`);
    console.log(`Результат: ${sum}`);
}

// 2) Знайти найбільше число в масиві
function task2_FindLargest() {
    console.log(separator);
    console.log("## 2. Знайти найбільше число в масиві");

    const numbers = [45, 12, 78, 5, 23, 99, 30];

    // Ініціалізуємо max першим елементом масиву
    let max = numbers[0]; 

    for (let i = 1; i < numbers.length; i++) {
        const current = numbers[i];
        
        if (current > max) {
            max = current;
        }
    }

    console.log(`Масив: [${numbers.join(', ')}]`);
    console.log(`Найбільше число: ${max}`);
}

// 3) Порахувати кількість парних чисел в масиві
function task3_CountEven() {
    console.log(separator);
    console.log("## 3. Порахувати кількість парних чисел в масиві");

    const data = [10, 5, 2, 8, 11, 4, 7, 12, 1, 6];
    let evenCount = 0; 

    for (let i = 0; i < data.length; i++) {
        const number = data[i];

        if (number % 2 === 0) {
            evenCount++;
        }
    }

    console.log(`Масив: [${data.join(', ')}]`);
    console.log(`Кількість парних чисел: ${evenCount}`);
}

// 4) Вивести всі числа, більші за 10 з масиву
function task4_FilterGreaterThanTen() {
    console.log(separator);
    console.log("## 4. Вивести всі числа, більші за 10");

    const numbersArray = [8, 15, 3, 22, 10, 50, 9, 11, 1];
    const result = [];
    const threshold = 10;
    
    for (let i = 0; i < numbersArray.length; i++) {
        const number = numbersArray[i];

        if (number > threshold) {
            result.push(number);
        }
    }

    console.log(`Масив: [${numbersArray.join(', ')}]`);
    console.log(`Числа, більші за ${threshold}: [${result.join(', ')}]`);
}

// 5) Множення елементів масиву і вивід на 5
function task5_MultiplyElements() {
    console.log(separator);
    console.log("## 5. Множення елементів масиву на 5");

    const originalArray = [1, 2, 3, 4, 5, 10];
    const multiplier = 5;
    const resultArray = [];

    for (let i = 0; i < originalArray.length; i++) {
        const multipliedNumber = originalArray[i] * multiplier;
        resultArray.push(multipliedNumber);
    }

    console.log(`Початковий масив: [${originalArray.join(', ')}]`);
    console.log(`Результат множення на ${multiplier}: [${resultArray.join(', ')}]`);
}

// 6) Генерація масиву і вивід тільки парних чисел
function task6_GenerateAndFilterEven() {
    console.log(separator);
    console.log("## 6. Генерація масиву та вивід парних чисел");

    const SIZE = 10;
    const randomArray = [];
    const evenNumbers = [];

    for (let i = 0; i < SIZE; i++) {
        // Math.random() генерує [0, 1)
        // Math.floor(Math.random() * 100) + 1 генерує ціле число в діапазоні [1, 100]
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    
    // Цикл для фільтрації
    for (let i = 0; i < randomArray.length; i++) {
        const number = randomArray[i];

        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }

    console.log(`Згенерований масив: [${randomArray.join(', ')}]`);
    console.log(`Тільки парні числа: [${evenNumbers.join(', ')}]`);
}

// 7) Порахувати факторіал числа
// num має за замовчуванням значення 5
function task7_CalculateFactorial(num = 5) {
    console.log(separator);
    console.log("## 7. Порахувати факторіал числа");

    const numberToFactorial = num; 

    if (numberToFactorial < 0) {
        console.log("Факторіал визначений лише для невід'ємних чисел.");
        return;
    }
    if (numberToFactorial === 0) {
        console.log(`Факторіал ${numberToFactorial}! = 1`);
        return;
    }

    let result = 1; 

    for (let i = 1; i <= numberToFactorial; i++) {
        result *= i; 
    }

    console.log(`Обчислення факторіалу ${numberToFactorial}!`);
    console.log(`Результат: ${result}`); // 5! = 120
}

task1_SumUpToN();
task2_FindLargest();
task3_CountEven();
task4_FilterGreaterThanTen();
task5_MultiplyElements();
task6_GenerateAndFilterEven();
task7_CalculateFactorial();