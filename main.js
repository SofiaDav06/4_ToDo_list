let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    let input = document.querySelector("input");
    let text = input.value;

    if (text.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
        input.value = "";

        li.appendChild(addDeletBth())
        ul.appendChild(li)
    }
})

function addDeletBth(params){
    let deletBth = document.createElement("button"); 
    deletBth.textContent = " X ";

    deletBth.addEventListener("click", (e)=>{
        let item = e.target.parentElement;
        ul.removeChild(item)
    })

    return deletBth

}

