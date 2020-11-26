// variables declaration declaration

var loginDetails=[
    {   username:"ngugidavid",
        password:"ngugidavid"
    },
    {
        username:"samuel",
        password:"samuel"
    }

]



function login(){
    document.getElementById("loginform").addEventListener("click", function(event){
        event.preventDefault()
      }); 
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    for(i=0; i<=loginDetails.length; i++){
        if(username == loginDetails[i].username && loginDetails[i].password == password){
            alert("login succesful");
            
            window.location.href="home.html";
            return;
    
        }
        
        
    }

        alert("Incorrect username or password");
        window.location.href="login.html"
    
    
}