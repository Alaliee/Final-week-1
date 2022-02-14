function idCard(){
    var firstName=document.getElementById('firstName').value;
    var lastName=document.getElementById('lastName').value;
    var age=document.getElementById('age').value;
    var phoneNumber=document.getElementById('phoneNumber').value;
    var address=document.getElementById('address').value;

    
    var postFullName=firstName+" "+lastName;
    document.getElementById('postFullName').innerHTML=postFullName;
    document.getElementById('postAddress').innerHTML=address;

    
    var numberArray = [];
    numberArray.push(age, phoneNumber)

    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] <= 100) {
            document.getElementById('postAge').innerHTML="Age: " + age;
        } else if (numberArray[i] > 100) {
            document.getElementById('postPhoneNumber').innerHTML="Phone Number: " + phoneNumber;
        }
    }

} 
