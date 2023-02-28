window.addEventListener("load", ()=>{

    
    
    let picture = document.querySelector(".picture");
    let fullName = document.querySelector(".name");
    let address = document.querySelector(".address");
    let dateOfBirth = document.querySelector(".dateOfBirth");
    let phoneNumber = document.querySelector(".phoneNumber");
    let email = document.querySelector(".email");
    let idNumber = document.querySelector(".idNumber");

    fetch("https://randomuser.me/api/?gender=male&nat=es&exc=login,registered")
        .then(response => response.json())
        .then(data => {

            console.log(data.results[0])

            /* Datos Personales */

            console.log(picture);

            picture.src = data.results[0].picture.large;

            fullName.innerHTML = data.results[0].name.first + " " + data.results[0].name.last;

            address.innerHTML += data.results[0].location.street.name + " " + data.results[0].location.street.number + ", " + data.results[0].location.city + ", España";

            dateOfBirth.innerHTML += moment(data.results[0].dob.date).format("DD/MM/YYYY");

            phoneNumber.innerHTML += data.results[0].phone;

            email.innerHTML += data.results[0].email;

            idNumber.innerHTML += data.results[0].id.value;


        });


})