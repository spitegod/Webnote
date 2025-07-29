document.addEventListener('DOMContentLoaded', () => {
  const loginTab = document.getElementById('login_tab');
  const registerTab = document.getElementById('register_tab');
  const authBlock = document.querySelector('.auth_block');

  const passwordRepeatInput = document.querySelector('.password_input_repeat');
  const loginButton = document.querySelector('.button_sign_in');
  const registerButton = document.querySelector('.button_register');

  // Скрываем "повтор пароля" и кнопку регистрации по умолчанию
  function showLogin() {
    loginTab.classList.add('tab_active');
    registerTab.classList.remove('tab_active');

    passwordRepeatInput.classList.remove('input-visible');
    passwordRepeatInput.classList.add('input-animate');

    registerButton.classList.remove('input-visible');
    registerButton.classList.add('input-animate');

    loginButton.classList.add('input-visible');
    loginButton.classList.remove('input-animate');

    authBlock.style.minHeight = '399px';
  }

  function showRegister() {
    registerTab.classList.add('tab_active');
    loginTab.classList.remove('tab_active');

    passwordRepeatInput.classList.add('input-visible');
    passwordRepeatInput.classList.remove('input-animate');

    registerButton.classList.add('input-visible');
    registerButton.classList.remove('input-animate');

    loginButton.classList.remove('input-visible');
    loginButton.classList.add('input-animate');

    authBlock.style.minHeight = '437px';
  }

  loginTab.addEventListener('click', showLogin);
  registerTab.addEventListener('click', showRegister);

  // По умолчанию — показать login
  showLogin();
  });