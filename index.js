function update() {
    title = document.getElementById("title").value;
    desc = document.getElementById("desc").value;
    if (title == "" && desc == ""){
        console.log("Empty fields")
    }
    else{
    console.log("Updating ..... ");
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        itemsJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else {
        let itemsJsonArraystr = localStorage.getItem('itemsJson');
        let itemsJsonArray = JSON.parse(itemsJsonArraystr);
        itemsJsonArray.push([title, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }}
    loadtable();
}
function loadtable(){
    if (localStorage.getItem('itemsJson') == null) {
        itemsJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    }
    else{
        itemsJsonArraystr = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsJsonArraystr);
    }
    // Display through table
    table = document.getElementById("bodyhaibhai")
    str = "";
    itemsJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <td>${index + 1}</td>
            <td>${element[0]}</td>
            <td>${element[1]}</td> 
            <td><button class="btn btn-sm btn-primary" id="remove" onclick="deleting(${index})">Remove</button></td>
            </tr>`;
    });
    table.innerHTML = str;
}
let add = document.getElementById("add");
add.addEventListener("click", update);
loadtable();
//remove button
function deleting(indexarr) {
    let itemsJsonArraystr = localStorage.getItem('itemsJson');
    let itemsJsonArray = JSON.parse(itemsJsonArraystr);

    itemsJsonArray.splice(indexarr, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemsJsonArray));
    loadtable();
}
function clearkrdo(){
    if(confirm("Do u really want to clear storage ? ")){
        localStorage.clear();
        loadtable();
    }
}