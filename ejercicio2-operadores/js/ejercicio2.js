/* validar que la edad es mayor a 18
    validar el usuario y contraseña coincidan con unos datos dados */

const name = document.querySelector("#nombre");
const email = document.querySelector("#email");
const pass = document.querySelector("#pass");
const age = document.querySelector("#edad");
const msjAge = document.querySelector(".msjEdad");
const msjLogin = document.querySelector(".msjLogin");
const ValidPass = "123456";

msjAge.innerHTML = parseInt(age.value) > 18 ? `Bienvenida ${name.value}` : `${name.value} no puedes ingresar`;
msjLogin.innerHTML = pass.value === ValidPass ? `${name.value} Login Exitoso` : `Revisa tu contraseña ${name.value}`;

