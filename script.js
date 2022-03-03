function compute()
{   
    // Get all value from the different input
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //Make sure the amount input is positive and not zero
    if(principal<=0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    }

    // Calculate the amount of money earned and display it on the page
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit \<mark\>" + principal + "\</mark\>,\<br\>at an interest rate of \<mark\>" + rate + "</mark\>%.\<br\>You will receive an amount of \<mark\>" + interest + "</mark\>,\<br\>in the year \<mark\>" + year +"</mark\>";
    
}


function updateRate() {
    //Function called each time the range input is changed, update the value of the span next to it
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}