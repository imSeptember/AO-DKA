'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.navigation');
    const headerOffset = header.offsetTop;

    window.addEventListener('scroll', function () {
        if (window.scrollY > headerOffset) {
            header.style.top = '0';
        }
    });

    const iconMenu = document.querySelector('.menu');
    const offScreenMenu = document.querySelector('.off__screen__menu');

    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('__active');
        offScreenMenu.classList.toggle('__active');
    });

    const form = document.getElementById('form');

    // const submitButton = document.querySelector('.submit__button');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        formSend();
    });
    // const userName = document.getElementById('username');
    // const phone = document.getElementById('tel');
    // const email = document.getElementById('email');

    function formSend() {
        let formData = new FormData(form);
        let messageBody =
            'Name: ' +
            formData.get('username') +
            '\nPhone: ' +
            formData.get('telephone') +
            '\nEmail: ' +
            formData.get('email');
        Email.send({
            SecureToken: '7f4bbe8a-d5be-4fed-af63-d2dbcafd4570',
            To: 'kalensky_advokat@icloud.com',
            From: 'kalenskiyvlad@gmail.com',
            Subject: 'Перезвонить клиенту',
            Body: messageBody,
        })
            .then((message) => {
                alert('Email sent successfully');
                console.log(message);
            })
            .catch((error) => {
                alert('Error sending email. Please try again later.');
                console.error(error);
            });

        // .then((message) => alert(message));

        //     .then((message) => {
        //     if (message == 'OK') {
        //         swal('asdasd', 'fsdfghgh', 'wert');
        //     } else {
        //         swal('gsdfg', 'sdgfa', 'asdf');
        //     }
        // });
        // .then((message) => alert(message));

        // submitButton.classList.add('_sending');
        form.reset();
    }

    // async function formSend(e) {
    //     e.preventDefault();

    //     // let error = formValidate(form);

    //     let formData = new FormData(form);

    //     // if (error === 0) {
    //     submitButton.classList.add('_sending');

    //     let response = await fetch('sendmail.php', {
    //         method: 'POST',
    //         body: formData,
    //     });
    //     if (response.ok) {
    //         let result = await response.json();
    //         alert(result.message);
    //         form.reset();
    //         // form.classList.remove('._sending');
    //     } else {
    //         alert('Ошибка');
    //         console.error();
    //         form.classList.remove('._sending');
    //     }
    //     // } else {
    //     //     alert('Заполните обязательные поля');
    //     // }
    // }

    // function formValidate(form) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const input = formReq[index];
    //         formRemoveError(input);

    //         if (input.classList.contains('_email')) {
    //             if (emailTest(input)) {
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }

    //         if (input.classList.contains('_phone')) {
    //             if (phoneTest(input)) {
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }

    //         if (input.classList.contains('_name')) {
    //             if (nameTest(input)) {
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }
    //     }

    //     return error;
    // }

    // function formAddError(input) {
    //     input.parentElement.classList.add('_error');
    //     input.classList.add('_error');
    // }

    // function formRemoveError(input) {
    //     input.parentElement.classList.remove('_error');
    //     input.classList.remove('_error');
    // }

    // function emailTest(input) {
    //     return !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value);
    // }

    // function phoneTest(input) {
    //     return !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
    //         input.value
    //     );
    // }

    // function nameTest(input) {
    //     return !/([a-zA-Z0-9_\s]+)/.test(input.value);
    // }
});
