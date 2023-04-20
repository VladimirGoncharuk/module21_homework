function usePromise() {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.round(Math.random() * 99) + 1;

            if (number % 2 === 0) {
                resolve({message: "Успешное выполнение promise", number: number});
            } else {
                reject({message: "Неуспешное выполнение promise", number: number});
            }
        
    }, 3000);
});
    // Выполняем promise
    myPromise
        .then((result) => {
            console.log('Завершено успешно. Сгенерированное число — ' + result.number);
        })
        .catch((error) => {
            console.log('Завершено с ошибкой. Сгенерированное число — ' + error.number);
        })
        . finally(() => {
            console.log('Конец работы');
        });
};

usePromise();