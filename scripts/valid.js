window.addEventListener('DOMContentLoaded', () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    const registrationFormEl = document.querySelector('#form-registration');
    const registrationBtn = document.querySelector('#form-btn');
    const intranceFormEl = document.querySelector('#form-intrance');
    const footerFormEl = document.querySelector('#footer-form');
    const registrationNameInputEl = registrationFormEl?.querySelector('#form-name-input');
    const registrationSurnameInputEl = registrationFormEl?.querySelector('#form-surname-input');
    const registrationEmailInputEl = registrationFormEl?.querySelector('#form-email-input');
    const registrationTelInputEl = registrationFormEl?.querySelector('#form-tel-input');
    const registrationPasswordInputEl = registrationFormEl?.querySelector('#form-password-input');
    const registrationPasswordRepeatInputEl = registrationFormEl?.querySelector('#form-password-input-repeat');
    const intranceEmailInputEl = intranceFormEl?.querySelector('#form-email-input');
    const intrancePasswordInputEl = intranceFormEl?.querySelector('#form-password-input');
    const intranceErrorEl = intranceFormEl?.querySelector('.form__error');
  
    const checkInputValidity = (input) => input.value;
  
    const submitRegistrationForm = (e) => {
        e.preventDefault();
        [
            registrationNameInputEl,
            registrationSurnameInputEl,
            registrationEmailInputEl,
            registrationTelInputEl,
            registrationPasswordInputEl,
            registrationPasswordRepeatInputEl,
        ].forEach((input) => {
            if (!checkInputValidity(input)) {
                input.classList.add('valEntry--invalid');
                    setTimeout(
                        function () {
                            input.classList.remove('valEntry--invalid')
                        },
                        1000
                    )
                return
            } 
        });
  
        
  
        //   registrationFormEl.submit();
    };

  
  
    [registrationNameInputEl, registrationSurnameInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (input.value.length < 2 || input.value.length > 30) {
                input.classList.add('valEntry--invalid');
                return
            } else {
                input.classList.remove('valEntry--invalid');
            }
        });
    });
  
  
    [registrationEmailInputEl, intranceEmailInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (!emailRegex.test(input.value)) {
                input.classList.add('valEntry--invalid');
                return
            } else {
                input.classList.remove('valEntry--invalid');
            }
        });
    });
  
  
    registrationTelInputEl?.addEventListener('input', () => {
        console.log(registrationTelInputEl.value.length);
        
        if (registrationTelInputEl.value.length < 16) {
            registrationTelInputEl.classList.add('valEntry--invalid');
            return
        } else {
            registrationTelInputEl.classList.remove('valEntry--invalid');
        }
    });
  
  
    [registrationPasswordInputEl, intrancePasswordInputEl].forEach((input) => {
        input?.addEventListener('input', () => {
            if (input.value.length < 6) {
                input.classList.add('valEntry--invalid');
            return
            } else {
                input.classList.remove('valEntry--invalid');
            }
        });
    });
  
    // registrationFormEl?.addEventListener('submit', submitRegistrationForm);
    registrationBtn?.addEventListener('click', submitRegistrationForm);
  });
