
const items = document.getElementsByClassName("item");

console.log (items);

let activeItem = 0;

// next 

const next = document.querySelector(".next");

next.addEventListener("click" ,

    function () {
        if (activeItem < items.length - 1) {
            // rimuovo active dall'elemento
            items[activeItem].classList.remove("active");
            // incremento indice elemento da visualizzare
            activeItem++;
            //  passo la classe active all'elemento successivo
            items[activeItem].classList.add("active");
        } else {
            // "ciclo infinito"
            items[activeItem].classList.remove("active");
            activeItem = 0;
            items[activeItem].classList.add("active");
        }

    }


)


// previous

const previous = document.querySelector(".previous");

previous.addEventListener("click" ,
    function(){
        // if (activeItem > 0) {
        //     items[activeItem].classList.remove("active");
        //     activeItem--;
        //     items[activeItem].classList.add("active");
        // }

        if (activeItem > 0) {
             // rimuovo active dall'elemento
            items[activeItem].classList.remove("active");
            // decremento indice elemento da visualizzare
            activeItem--;
             // passo la classe active all'elemento precedente
            items[activeItem].classList.add("active");
        } else {
            // "loop infinito"
            items[activeItem].classList.remove("active");
            activeItem = items.length - 1;
            items[activeItem].classList.add("active");
        }
    }


)