fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>response.json())
.then(data=>{
    data.forEach(user => {
        let li = document.createElement("li");
        li.innerText = user.name;
        document.querySelector("ul").appendChild(li);
        li.setAttribute("data-id",user.id-1)
        li.addEventListener("click",function(){
             console.log(this.getAttribute("data-id"));
        })
    });
})