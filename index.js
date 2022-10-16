const form = {
    email: () => document.getElementById("email"),    
    password: () => document.getElementById("password")
}


function login(){
    firebase.auth().signInWithEmailAndPassword(
        form.email().value, form.password().value
        ).then(response =>{
        window.location.href = "pages/paudios.html";
   }).catch(error => {
    alert(getErrorMessage(error));
    console.log(error, error)
   });
}
function getErrorMessage(error) {
    if (error.code == "auth/user-not-found"){
        return "usuário não encontrado";
    }
    else if (error.code == "auth/invalid-email"){
        return "usuário ou senha inválidos";
    }
    else if (error.code == "auth/wrong-password"){
        return "Senha incorreta!"
    }
    
return error.message;
}