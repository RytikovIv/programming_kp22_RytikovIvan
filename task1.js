const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findMiddleCharacter(word) {
    let trimmedWord = word.trim(); // Убираем пробелы

    if (trimmedWord === '') {
        return 'Invalid value';
    }

    let length = trimmedWord.length;
    let middle = Math.floor(length / 2);

    if (length % 2 === 0) {
        // Если длина четная, возвращаем две буквы
        return trimmedWord[middle - 1] + trimmedWord[middle];
    } else {
        // Если длина нечетная, возвращаем одну букву
        return trimmedWord[middle];
    }
}
rl.question('Введите слово: ', (userInput) => {
    if (userInput === null || userInput.trim() === '') {
        console.log('Invalid value');
    } else {
        let result = findMiddleCharacter(userInput);
        console.log(result);
    }
    rl.close();
});
