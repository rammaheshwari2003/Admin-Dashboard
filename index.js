document.getElementById("btnLogin").addEventListener("click",login);



function login(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  if(username=='ram' && password=='1234'){
    // alert(Login successful, welcome ${username});
    alert("Login successfully")
   window.location.href="dashboard.html";

  }
else{
    alert('Indalid Username or Password')
}

}