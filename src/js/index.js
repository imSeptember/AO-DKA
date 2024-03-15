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

    const submitButton = document.querySelector('.submit__button');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formSend();
    });

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
            // SecureToken: '7f4bbe8a-d5be-4fed-af63-d2dbcafd4570',
            SecureToken: 'c78767f2-6446-4b0f-bd2c-1edb3406a340',
            To: 'kalensky_advokat@icloud.com',
            From: 'kalenskiyvlad@gmail.com',
            Subject: 'Перезвонить клиенту',
            Body: messageBody,
        })
            .then((message) => {
                if (message === 'OK') {
                    form.classList.add('form-disabled');
                    Array.from(form.elements).forEach((element) => {
                        if (
                            element.tagName === 'INPUT' &&
                            element.type !== 'submit'
                        ) {
                            element.disabled = true;
                        }
                    });
                    submitButton.style.backgroundColor = '#03ab00';
                    submitButton.value = 'ВІДПРАВЛЕНО!';
                    submitButton.disabled = true;
                    submitButton.style.border = '3px solid #03ab00';
                    submitButton.style.cursor = 'default';

                    setTimeout(() => {
                        form.classList.remove('form-disabled');
                        Array.from(form.elements).forEach((element) => {
                            if (element.tagName === 'INPUT') {
                                element.disabled = false;
                            }
                        });
                        submitButton.style.backgroundColor = '#005aab';
                        submitButton.value = 'ВІДПРАВИТИ';
                        submitButton.disabled = false;
                        submitButton.style.border = '3px solid #e5e5e5';
                        submitButton.style.cursor = 'pointer';
                    }, 5000);
                }
            })
            .catch((error) => {
                alert(
                    'Виникла помилка при відправці, спробуйте повторно та уважно заповніть поля'
                );
                console.error(error);
            });
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
