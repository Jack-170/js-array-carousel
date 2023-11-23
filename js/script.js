
const items = document.getElementsByClassName("item");

console.log (items);

let activeItem = 0;

// nav

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
        } 

        if (activeItem === items.length - 1) {

            next.classList.add("d-none");

        }
    }


)