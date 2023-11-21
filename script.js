const submitButton = document.querySelector('#form-submit');

const validateForm = (e) => {
  e.preventDefault();

  const email = document.querySelector('#email-input').value;
  const p = document.querySelector('.validation-message');

  if (email === '' || !validateEmail(email)) {
    const icon = createErrorIcon();
    const formGroup = document.querySelector('.form-group');
    formGroup.classList.add('invalidate');
    formGroup.insertBefore(icon, submitButton);
    return p ?? createMessage('Please provide a valid email');
  }

  document.querySelector('form').submit();
};

// checking for a valid email address
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const createMessage = (message) => {
  const p = document.createElement('p');
  const text = document.createTextNode(message);
  p.className = 'validation-message';
  p.appendChild(text);
  document.querySelector('.form-group').appendChild(p);
};

const createErrorIcon = () => {
  const icon = document.createElement('img');
  icon.src = './images/icon-error.svg';
  icon.className = 'icon-error';
  return icon;
};

submitButton.addEventListener('click', validateForm);
