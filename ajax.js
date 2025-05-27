//task1
/*
AJAX дает возможность не перезагружать всю страницу, а только часть 
Например, какую-нибудь таблицу , графики и так далее
Это удобно, потому что не нужно ждать долго пока страница загружается или же 
можно одновременно что то делать на странице пока странице загружается

Допустим Google maps или же соцсети где пишут коментарий и так далее
*/
//task2
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
xhr.onload = function(){
    if (xhr.status === 200){
        const b = JSON.parse(xhr.responseText);
        b.forEach(item =>{
            console.log(item.title);
        });
    }else{
        console.error("errorrr",xhr.status);
    }
};
xhr.onerror = function(){
    console.log('Network error');
};
xhr.send();

//task3
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
xhr.onload = function(){
    if (xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        const ul = document.createElement('ul');
        data.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.title;
            ul.appendChild(li);
        });
        document.getElementById('createlist').appendChild(ul);
    }else{
        console.error("Ошибка данных",xhr.status);
    }
};
xhr.onerror = function(){
    console.log("Network error");
};
xhr.send();

//task4
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
xhr.onload = function(){
    if (xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        const ul = document.createElement('ul');
        data.forEach(item => {
            const main_li = document.createElement('li');
            const ul_un = document.createElement('ul');
            const li1 = document.createElement('li');
            li1.textContent = `Title: ${item.title}`;
            const li2 = document.createElement('li');
            li2.textContent = `Body: ${item.body}`;
            const li3 = document.createElement('li');
            li3.textContent = `Id: ${item.userId}`;
            ul_un.appendChild(li1);
            ul_un.appendChild(li2);
            ul_un.appendChild(li3);
            main_li.appendChild(ul_un);
            ul.appendChild(main_li);
        });
        document.getElementById('big_list').appendChild(ul);
    }
    else{
        console.error('error of data',xhr.status);
    }
    xhr.onerror = function(){
        console.log('Network error');
    } 
};
xhr.send();


//task5
const a = new XMLHttpRequest();
a.open('GET','https://jsonplaceholder.typicode.com/posуts',true);
a.onload = function(){
    if (a.status === 200){
        const data = JSON.parse(a.responseText);
        console.log(data);
    }else{
        showError('error of loading data',a.status);
    }
}
a.onerror = function(){
    showError('Network error');
};

a.send();
function showError(message){
    document.getElementById('error').textContent = message;
}

//task6
const xhr = new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts',true);
xhr.onload = function(){
    document.getElementById('load').style.display = 'none';
    if (xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        console.log(data);
    }else{
        console.error('Error of loading data',xhr.status);
    }
}
xhr.onerror = function(){
    document.getElementById('load').style.display = 'none';
}
xhr.send();






