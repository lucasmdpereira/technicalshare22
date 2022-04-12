// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {

        //compare passwords
        let password = document.querySelector('#subscribePassword').value
      
        let confirmePassword = document.querySelector('#confirmPassword').value
      
        let passwordsAreEquals = 'false'

        if (password === confirmePassword){
          passwordsAreEquals = 'true'

        } else {
          passwordsAreEquals = 'false' 
          document.querySelector("#feedbackPassword").innerText = "Senhas não conferem"
          document.querySelector('#confirmPassword').value = ''
        }
        
        if (!form.checkValidity()) {
          if(passwordsAreEquals = 'false'){
            event.preventDefault()
            event.stopPropagation()
          }
          }

        form.classList.add('was-validated')

        const subscribeData = {}
        const subscribeFirstName = document.querySelector('#subscribeFirstName').value
        const subscribeLastName = document.querySelector('#subscribeLastName').value

        subscribeData.subscribeName = `${subscribeFirstName} ${subscribeLastName}`

        subscribeData.subscribeEmail = document.querySelector('#subscribeEmail').value
        subscribeData.subscribeTags = document.querySelector('#subscribeTags').value
        subscribeData.subscribePassword = document.querySelector('#subscribePassword').value
        
        
        let dataSubscribe = JSON.stringify(subscribeData)
        form.setAttribute('action', `/subscribe/${dataSubscribe}`)
        form.setAttribute('method', 'POST')   
      }, false)

    })

  

  })
  
  ()
