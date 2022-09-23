const main = document.querySelector(".main-container");
const thankU = document.querySelector(".thank-you");
const rating = document.getElementById(".rating")
const rates = document.querySelectorAll(".btn")

const submitbtn = document.getElementById("submit");
const ratebtn = document.getElementById("rate-again");

submitbtn.addEventListener("click",() =>{
    thankU.classList.remove("hiddin")
    main.style.display= "none"
})

ratebtn.addEventListener("click",() =>{
    thankU.classList.add("hiddin")
    main.style.display= "block"
})

rates.forEach((rate) =>{
         rate.addEventListener('click', ()=>{
              console.log(rate.innerHTML);
               ratings.innerHTML = rate.innerHTML;
         });
});
 