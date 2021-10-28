const send = document.querySelector('#send');


send.addEventListener('click', () => {

    validate();
    // console.log(
    //     name,
    //     email,
    //     number,
    //     city,
    //     message,
    // )
});




function validate() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const number = document.querySelector('#number');
    const city = document.querySelector('#city');
    const message = document.querySelector('#message');
    const nameVal = document.querySelector('#name').value.trim();
    const emailVal = document.querySelector('#email').value.trim();
    const numberVal = document.querySelector('#number').value.trim();
    const cityVal = document.querySelector('#city').value.trim();
    const messageVal = document.querySelector('#message').value.trim();



    // for name 
    if (nameVal === '') {
        seterrormsg(name, 'name can not be blank');
    } else if (nameVal.length < 2) {
        seterrormsg(name, 'atleast 3 word required');
    } else {
        setsuccess(name, 'Success')
    }

    // for email 
    if (emailVal === '') {
        seterrormsg(email, 'email can not be blank');
    } else if (emailVal.length < 2) {
        seterrormsg(email, 'Not a valid email');
    } else {
        setsuccess(email, 'Success');
    }

    // for number 
    if (numberVal === '') {
        seterrormsg(number, 'number can not be blank');
    } else if (numberVal.length != 10) {
        seterrormsg(number, 'Number must be 10 digit long');
    } else {
        setsuccess(number, 'Success');
    }

    // for cicty 
    if (cityVal === '') {
        seterrormsg(city, 'city can not be blank');
    } else if (cityVal.length < 2) {
        seterrormsg(city, 'city can not be less then 2 digit');
    } else {
        setsuccess(city, 'Success');
    }

    // for cicty 
    if (messageVal === '') {
        seterrormsg(message, 'message can not be blank');
    } else if (messageVal.length < 2) {
        seterrormsg(message, 'message can not be less then 2 digit');
    } else {
        setsuccess(message, 'Success');
    }

}



// defining error message function
function seterrormsg(field, msg) {
    field.classList.add('error');
    const FieldParent = field.parentElement;
    const smallTag = FieldParent.querySelector('small');
    smallTag.innerText = msg;
}



// defining success 

function setsuccess(field, msg) {
    field.classList.add('success');
    const FieldParent = field.parentElement;
    const smallTag = FieldParent.querySelector('small');
    smallTag.innerText = msg;
    smallTag.style.color = 'green';
}