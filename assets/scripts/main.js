//Obtner los elementos de la clase .close
let links = document.querySelectorAll(".close");

//Recorrerlos
links.forEach(function (link) {

    //agregar un evento click a cad uno de ellos
    //case sensitive
    link.addEvenListener("click", function (ev) {
        ev.preventDefault();
        let content = document.querySelector('.content');
        //Quitar la clase de animacion que ya tiene
        content.classList.remove(animate__heartBeat);
        content.classList.remove(animate__animate);
        //agregar animaciones que ya tiene
        content.classList.add("animate_heartBeat");
        content.classList.add("animate_animate");

        setTimeout(function () {
            window.history.go(-1);
        }, 6);
        setInterval

        return false;
    });
});