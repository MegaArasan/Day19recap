var selectRow= null;
function onFormSubmit(){
    event.preventDefault();
    var Data = readData();
    if(selectRow === null){
        insertNewData(Data);
    }
}
function readData(){
    var Data ={};
    Data["fname"] = document.getElementById("fname").value;
    Data["lname"] = document.getElementById("lname").value;
    Data["Address"] = document.getElementById("Address").value;
    Data["state"] = document.getElementById("state").value;
    Data["Country"] = document.getElementById("Country").value;
    Data["pcode"] = document.getElementById("pcode").value;
    Data["gender"] = document.getElementsByName("gender")[0].value;
    Data["food"] = document.getElementsByName("section").value;
    return Data;
}

function insertNewData(data){
    var table = document.getElementById("storedata").getElementsByTagName("tbody")[0];
    var newrow = table.insertRow(table.length);
    var cell1 = newrow.insertCell(0);
     cell1.innerHTML = data.fname;
    var cell2 = newrow.insertCell(1);
     cell2.innerHTML = data.lname;
    var cell3 = newrow.insertCell(2);
     cell3.innerHTML = data.Address;
    var cell4 = newrow.insertCell(3);
     cell4.innerHTML = data.state;
    var cell5 = newrow.insertCell(4);
     cell5.innerHTML = data.Country;
    var cell6 = newrow.insertCell(5);
     cell6.innerHTML = data.pcode;
    var cell7 = newrow.insertCell(6);
     cell7.innerHTML = data.gender;
    var cell8 = newrow.insertCell(7);
     cell8.innerHTML = data.food;
}