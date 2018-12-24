//   ФОРМА
  document.querySelector('.page-loaded').innerText =
      (new Date()).toLocaleTimeString();
  
  
  document.querySelector('.get-html-ajax')
      .addEventListener('click', getHtmlAjax);
  
  function getHtmlAjax() {
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
              document.querySelector('.html-placeholder').innerHTML = xhr.responseText;
          }
      }
  
      document.querySelector('.login-form input[type=submit]')
          .addEventListener('click', submitForm);
  
      function submitForm(ev) {
          if (document.querySelector('.login-form').checkValidity()) {
              ev.preventDefault();
              const xhr = new XMLHttpRequest();
              xhr.onreadystatechange = function() {
                  if (xhr.readyState === 4 && xhr.status === 200) {
                      document.querySelector('.message').innerHTML = xhr.responseText;
                  }
              }
              xhr.open('POST', 'form.php', true);
              const formData = new FormData(document.querySelector('.login-form'));
              xhr.send(formData);
          }
      }
  }