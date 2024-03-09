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
    form.addEventListener('submit', formSend);

    function formSend() {
        const userName = document.getElementById('username');
        const phone = document.getElementById('telephone');
        const email = document.getElementById('email');
        let formData = new FormData(form);
        // let messageBody =
        //     'Name ' +
        //     userName.value +
        //     '<br/> Phone ' +
        //     phone.value +
        //     '<br/> Email ' +
        //     email.value;
        let messageBody =
            'Name ' +
            userName +
            '<br/> Phone ' +
            phone +
            '<br/> Email ' +
            email;
        console.log(formData);
        console.log(userName.value);
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'kalenskiyvlad@gmail.com',
            Password: '76667601ECF56C5A07E797ABCE54D2D2637C',
            To: 'kalensky_advokat@icloud.com',
            From: 'kalenskiyvlad@gmail.com',
            Subject: 'Перезвонить клиенту',
            Body: messageBody,
        }).then((message) => alert(message));

        // .then((message) => {
        // if (message == 'OK') {
        //     swal('asdasd', 'fsdfghgh', 'wert');
        // } else {
        //     swal('gsdfg', 'sdgfa', 'asdf');
        // }
        // });

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
