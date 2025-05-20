//task1
setTimeout(()=>{
    console.log("Hello, world!")
},2000);

//task2 
setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
},1000);

//task3
const time = setInterval(() => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
},1000);
setTimeout(() => {
    clearInterval(time);
},5000);

//task4
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        },3000);
    });
}
fetchData().then(res => {
    console.log(res);
});

//task5
function fetchDataWithError(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Ошибка загрузки");
        },2000);
    })
}
fetchDataWithError().catch(error => {
    console.log(error)
});

//task6
function fetchData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Данные получены!");
        },3000);
    });
}

async function fetchDataAsync(){
    try{
    const result = await fetchData();
    console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
fetchDataAsync();

//task7
function fetchDataWithError(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject("Ошибка загрузки");
        },2000);
    })
}


async function fetchDataWithErrorAsync(){
    try{
        const result = await fetchDataWithError();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

fetchDataWithErrorAsync();


//task8
function task1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("first");
        },1000);
    });
}

function task2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("second");
        },2000);
    });
}

async function Sequantly(){
    const first = await task1();
    console.log(first);

    const second = await task2();
    console.log(second);
}

Sequantly();

//task9
function taskA(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("2 seconds");
        },2000)
    });
}
function taskB(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("3 seconds");
        },3000)
    });
}

async function res(){
    try{
    const result = await Promise.all([taskA(),taskB()])
    console.log(result[0],result[1]);
    }
    catch(error){
        console.log(error);
    }
}
res();


//task10
function delay(ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("hiiiii");
        },ms)
    });
}
async function delayedMessage(){
    const result = await delay(2000)
    console.log(result);
}

delayedMessage();




















































































































