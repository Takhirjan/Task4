let user = {"email" : "admin@gmai.com",
"password" : "qweqwe",
"fullname": "Imenov Takhirzhan",
"country":"Kazakhstan",
 "birthday": "24.06.2003"}

 function register(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let fullname = document.getElementById('fullname');
    let country=document.getElementById('country');
    let birthday=document.getElementById('birthday');

    let userObj={
            "email": email.value,
            "password": password.value,
            "fullname": fullname.value,
            "country": country.value, 
            "birthday":birthday.value
    };
    let jsonText=JSON.stringify(userObj);
    localStorage.setItem("user",jsonText);
   
    if(user.email!=email.value){
        alert("welcome")
    }else{
        document.getElementById('validate_email').style="display:block;color:red;"
        email.style='border: 1px solid red'
    }   
    if(user.password==password.value){
        password.style='border: 1px solid red';
        document.getElementById('validate_password').style="display:block;color:red;"
    }
    if(user.fullname==null){
        fullname.style='border: 1px solid red';
        document.getElementById('validate_fullname').style="display:block;color:red;"
    }
 }