var importBooks = JSON.parse(books);
console.table(importBooks);


// for (let val of importBooks) {
//     document.getElementById("result").innerHTML += `
//     <div class="col" id="idcard" >
//     <div class="card" style="width: 18rem;">
//     <img src="${val.Image}" class="card-img-top" alt="...">
//     <div class="card-body bg-danger">
//       <h5 class="card-title">${val.Title}</h5>
//       <p class="card-text">${val.Author}</p>
//       <a href="#" class="btn btn-primary">${val.Read}</a>
//     </div>
//   </div>
//   </div>
//   </div>`
// }



// function showDetails() {
//     document.getElementById("idcard").style.background = "yellow"
//   

// }

// document.getElementById("result").addEventListener("click", showDetails)




for (let i in importBooks) {
    document.getElementById("result").innerHTML += `
<div class="col" id="idcard${i}" > <h4 class="d-flex justify-content-center" id="ic${i}"></h4>
<p class="d-flex justify-content-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente saepe, culpa harum expedita veniam similique voluptatum nulla perferendis nemo quia quasi natus ea iure consectetur voluptatibus id tempora totam possimus?
</p>
<div class="card" style="width: 18rem;">
<div>Harry Potter</div>
<img src="${importBooks[i].Image}" class="card-img-top" alt="...">
<div class="card-body bg-danger"><div>Harry Potter</div>
  <h5 class="card-title">${importBooks[i].Title}</h5>
  <p class="card-text">${importBooks[i].Author}</p>
  <a href="#" class="btn btn-primary">${importBooks[i].Read}</a>
</div>
</div>
</div>
</div>`;

}



for (let i in importBooks) {
    document.getElementById(`idcard${i}`).addEventListener("mouseover", function() {
        this.style.background = "yellow";
    })
    document.getElementById(`idcard${i}`).addEventListener("mouseover", function() {
        document.getElementById(`ic${i}`).innerHTML = "This book is about:"
    })
    document.getElementById(`idcard${i}`).addEventListener("mouseout", function() {
        this.style.background = "#555";
    })
    document.getElementById(`idcard${i}`).addEventListener("mouseout", function() {
        document.getElementById(`ic${i}`).innerHTML = ""
    })
}


// function changeColor() {

//     if (this.style.opacity == 0) {
//         this.style.opacity = "1";
//     } else {
//         this.style.opacity = "0"
//     }
// }