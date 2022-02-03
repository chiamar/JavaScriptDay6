var importData = JSON.parse(data);
console.table(importData);


for (let value of importData) {
    document.getElementById("result").innerHTML += `${value.FirstName}`
}