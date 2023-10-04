const IDlampada = document.getElementById("IDlampada");
const IDligar = document.getElementById("IDligar");
const IDdesligar = document.getElementById("IDdesligar")
const bg = document.getElementById("bg");
const IDredor_lampada = document.getElementById("IDredor_lampada");
const body = document.getElementById("#body");



function ligar() {
    IDlampada.src = "img/acessa.png";
    IDlampada.alt = "lampada acessa";
    IDligar.style.color = "green";
    IDdesligar.style.color = "rgb(121, 121, 121)";
    IDligar.style.borderBottom = "2px solid rgb(121, 121, 121)";
    IDdesligar.style.borderTop = "7px solid rgb(121, 121, 121)";
    IDlampada.style.boxShadow = "1px 10px 80px 80px rgb(238, 255, 0)";
    IDlampada.style.backgroundColor = "rgb(238, 255, 0)";
    IDlampada.style.borderRadius = "50%";
    IDredor_lampada.style.backgroundColor = "rgba(255, 238, 0, 0.644)";
    IDredor_lampada.style.borderRadius = "50%";
    IDredor_lampada.style.boxShadow = "1px 1px 100px 150px rgba(255, 238, 0, 0.644)";
    body.style.backgroundColor = "rgba(0, 0, 0, 0.623)";
}

function desligar() {
    IDlampada.src = "img/apagada.png";
    IDlampada.alt = "lampada apagada";
    IDdesligar.style.color = "red";
    IDligar.style.color = "rgb(121, 121, 121)";
    IDligar.style.borderBottom = "7px solid rgb(121, 121, 121)";
    IDdesligar.style.borderTop = "2px solid rgb(121, 121, 121)";
    IDligar.style.borderRadius = "0 0 10px 10px";
    IDredor_lampada.style.backgroundColor = "rgba(255, 217, 0, 0)";
    IDredor_lampada.style.boxShadow = "1px 1px 100px 100px rgba(255, 217, 0, 0)";
    IDlampada.style.boxShadow = "1px 1px 100px 100px rgba(255, 217, 0, 0)";
    IDlampada.style.backgroundColor = "rgba(255, 217, 0, 0)";
    body.style.backgroundColor = "rgb(0, 0, 0)"
}


IDligar.addEventListener("click", ligar);
IDdesligar.addEventListener("click", desligar)