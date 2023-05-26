const inputbox= document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function AddTask(){
    if(inputbox.value=='') alert("You must write something!");
    else{
        let li= document.createElement("li");
        // creating an html with tag name li
        li.innerHTML= inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    inputbox.value= '';
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI") e.target.classList.toggle("checked");
    else if(e.target.tagName === "SPAN") e.target.parentElement.remove();
},false);


