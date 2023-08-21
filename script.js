function check(){
    var check = document.getElementById('check').value;

    if (check == "") {
        alert("Please input a valid Number");
    }

    if(check%2 == 0){
        console.log(check + " " + "is an Even Number");
        document.getElementById('display').innerHTML = check + " " + "is an Even Number";
        display.style.color = "blue";
    }
    else if(check%2 != 0){
        console.log(check + " " + "is an Odd Number");
        document.getElementById('display').innerHTML = check + " " + "is an Odd Number";
        display.style.color = "red";
    }

  
}