// Form validation//
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var phone = document.getElementById("phoneNumber");
var form = document.getElementById("myForm");
var errorElement = document.getElementById("error");


form.addEventListener("submit", function(e) {
    let messages = [];
    if (firstName.value === ""|| firstName.value == null)
    {
        messages.push("Please enter First Name");
    }

    if (lastName.value === ""|| lastName.value == null)
    {
        messages.push("Please enter last Name");
    }

    if (phone.value === ""|| phone.value == null)
    {
        messages.push("Please enter phone number");       
    }
    else
    {
        var patternMatch = /^\d{10}$/;
        if(!phone.value.match(patternMatch))
        {       
            messages.push("Please enter valid phone number");              
        } 
    }


    if (messages.length > 0)
    {
        e.preventDefault()
        errorElement.innerText = messages[0]
    }

    
})