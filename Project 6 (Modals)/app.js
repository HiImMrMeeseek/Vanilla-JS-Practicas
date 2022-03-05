// Cerrar y abrir ventana de inisio de sesion
const modalBtn = document.querySelector('.modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function () {
    modalOverlay.classList.add('open-modal');
});

closeBtn.addEventListener('click', function () {
    modalOverlay.classList.remove('open-modal');
});

// input validaciones
const email = document.querySelector('#input1');
const password = document.querySelector('#input2');
const isBtn = document.querySelector('.iniciar-sesion');

isBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (email.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese su email',
            text: 'El campo de email no puede esta vacio'
        })
    } else if (email.value.length >= 34) {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese menos caracteres',
            text: 'El campo de email no debe contener mas de 34 caracteres'
        })
    } else if (password.value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese su contraseña',
            text: 'El campo de contraseña no puede esta vacio'
        })
    } else if (password.value.length >= 34) {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese menos caracteres',
            text: 'El campo de contraseña no debe contener mas de 34 caracteres'
        })
    } else if (password.value.length <= 8) {
        Swal.fire({
            icon: 'error',
            title: 'Ingrese mas caracteres',
            text: 'El campo de contraseña no debe contener menos de 8 caracteres'
        })
    } else {
        var pValue = password.value;
        var eValue = email.value;
        password.value = "";
        email.value = "";
        modalOverlay.classList.remove('open-modal');
    }

    return eValue, pValue;
})