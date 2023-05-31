let login = document.forms.login 
let requiredInps = document.querySelectorAll('.box-required input')
let text1 = document.querySelector('.text1')
let error = 0
let success = 0


    login.onsubmit = (event) => {
    event.preventDefault()
    let isError = false

    requiredInps.forEach((inp) => {
        let label = inp.previousElementSibling.previousElementSibling
        inp.classList.remove('error')
        inp.nextElementSibling.classList.remove('icon-error-active')
        inp.nextElementSibling.nextElementSibling.innerHTML = `need to fill`
        label.style.color = '#8D7FD9'
        inp.nextElementSibling.nextElementSibling.style.color = 'gray'

        if(inp.value.length === 0) {
            inp.classList.add('error')
            inp.nextElementSibling.classList.add('icon-error-active')
            isError = true
            inp.nextElementSibling.nextElementSibling.innerHTML = `need to fill ${label.innerHTML}!`
            label.style.color = 'red'
            console.log(label);
            inp.nextElementSibling.nextElementSibling.style.color = 'red'
            error++
            
        } 
    })
    console.log(alert(error));

    if(isError === true) {
    } else{
        sumbit()
    }

}

// form.onsubmit = (e) => {
//     e.preventDefault();

//     let valid = true;

//     inputs.forEach(inp => {
//         if (inp.value.trim() === '' && inp.name !== 'age') {
//             inp.style.border = "2px solid red";
//             valid = false;
//         } else {
//             validation(patterns[inp.name], inp);
//         }
//     });

//     if (valid) {
//         submit(e);
//     } else {
//         alert("Please fill in all required fields");
//     }
// }

function submit(e) {
    let user = {}

    let fm = new FormData(e.target)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

let redirectBtn = document.getElementById("redirect-btn");
  
redirectBtn.addEventListener("click", function() {
  window.location.href = "./loader/loader.html";
  

  setTimeout(function() {
    window.location.href = "./index.html";
  }, 5000);
});

