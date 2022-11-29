const container = document.querySelector(".container");

for (let i = 1; i<=100; i++){
    let element;

    if (i%3 == 0 && i%5 == 0){
        element = `<div class"box">${"FizzBuzz"}</div>`
    }

    else if(i%3 == 0){
        element = `<div class"box">${"Fizz"}</div>`
        
    }

    else if(i%5 == 0){
        element = `<div class"box">${"Buzz"}</div>`
        
    }

    else {
        element = `<div class"box">${i}</div>`
    }

    container.innerHTML += element;
    
}