//task1

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(a => a.json())
    .then(b => {
        console.log(b);
        console.log("title:",b.title);
        console.log("body:",b.body);
    })
    .catch(error => console.error("error",error));

//task2
fetch('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id: 1,
        title:'Новый пост',
        body:"Содержимое поста",
        userId: 1
    })
})
.then(response => response.json())
.then(res => console.log("успешное создание поста",res))
.catch(error => console.error("Error",error));

//task3
fetch('https://jsonplaceholder.typicode.com/nonexistent')
.then(response => {
    if (!response.ok){
        throw new Error('Ошибка сети: '+ response.status);
    }
    return response.json();
})
.then(data => console.log(data))
.catch(error => console.error('Обработанная ошибка',error));

//task4
fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        id:1,
        title: 'New title',
        body: "Содержимое поста",
        userId: 1
    })
})
.then(response => response.json())
.then(res => console.log("Успешное изменение",res))
.catch(error => console.error("Error",error));

fetch('https://jsonplaceholder.typicode.com/posts/1',{
    method: 'DELETE',
})
.then(response => response.json())
.then(res => console.log('post is deleted'))
.catch(error => console.error('error',error));

//task5
async function wow(){
    try{
        const a = await fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id:1,
            title: 'New title',
            body: "Содержимое поста",
            userId: 1
        })
    });
    const res = await a.json();
    console.log(res);
    }catch(error){
        console.log("EROOOR",error);
    }
}
wow();

//task6
fetch('https://jsonplaceholder.typicode.com/comments',{
    method:'GET',
    headers: {
        'X-Model' : 'samsung',
        'User-Agent': 'Eliana004'
    }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("EROOR",error));





















