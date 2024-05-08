const condition = 2;
console.log('statement before promise ........');

const promiseOne = new Promise((resolve, reject) => {
    console.log('start promise ------');

    if (condition == 1) {
        resolve('simple promise statement');        
    } else if (condition == 2) {
        setTimeout(() => {
            resolve('setTimeout promise statement');
        }, 3000);
    } else if (condition == 3) {
        const currentTime = new Date().getTime();
        while (currentTime + 3000 > new Date().getTime());
        resolve('while promise statement');
    } else if (condition == 4) {
        resolve(() => 'simple promise statement >>');
    } else if (condition == 5) {
        resolve(() => {
            setTimeout(() => 'setTimeout promise statement >>', 3000);
        });
    } else if (condition == 6) {
        resolve(() => {
            const currentTime = new Date().getTime();
            while (currentTime + 3000 > new Date().getTime());
            return 'while promise statement >>';
        });
    }

    console.log('end promise --------');
});

console.log('statement after promise .......');

promiseOne
    .then((res) => {
        console.log(JSON.stringify(res));
    })
    .catch((err) => {
        console.log(err);
    });

console.log('last statement ..........');