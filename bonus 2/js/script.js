const container = document.querySelector(".container");

for (let i = 1; i<=100; i++){
    let element;

    if (i%3 == 0 && i%5 == 0){
        element = `<div class="box box-pink">${"FizzBuzz"}</div>`
    }

    else if(i%3 == 0){
        element = `<div class="box box-lightblue">${"Fizz"}</div>`
        
    }

    else if(i%5 == 0){
        element = `<div class="box box-yellow">${"Buzz"}</div>`
        
    }

    else {
        element = `<div class="box box-blue">${i}</div>`
    }

    container.innerHTML += element;
    
}