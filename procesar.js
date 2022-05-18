$(document).ready(function(){
   $("#buscador").hide();
  $("#cajaprincipal").hide();
  $("#cajavideos").hide();

    $("#iniciarsesion").click( function iniciar(){
        if ( $('#usuario').val() === "miguel" && $('#contraseña').val() === "12345")  { 
         $("#login").fadeOut("fast"); $("#cajaprincipal").show("slow"); $("#buscador").show("slow"); $("#cajavideos").show();}else{ alert("Usuario invalido")}  });

    $("#misamigos").on('click',".boton", funcionborrar);
    
 function funcionborrar(){ 
    ($(this).parent().remove());
 }


});

const contenedor= document.getElementById("resultados");

const cajamigos= document.getElementById("misamigos");
const cajaprincipal= document.getElementById("cajaprincipal");

function obtenerusuario(){
if (document.getElementById("hombre").checked){
    fetch('https://randomuser.me/api/?gender=male')
    .then(res => res.json() )
    .then(data => { mostrarusuario(data) } )
    .catch(err=>console.log(err))
}   
 else if (document.getElementById("mujer").checked){

 
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json() )
    .then(data => { mostrarusuario(data) } )
    .catch(err=>console.log(err))

}else{fetch('https://randomuser.me/api/')
.then(res => res.json() )
.then(data => { mostrarusuario(data) } )
.catch(err=>console.log(err))}
}

function mostrarusuario(usuario){

    while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);}

    const nombre= document.createElement('h2');
    nombre.setAttribute("id","nombre");
    const lugar= document.createElement('h2');
    lugar.setAttribute("id","lugar");
    
    const correo=document.createElement('h2');
    correo.setAttribute("id","correo");
    const cell=document.createElement('h2');
    cell.setAttribute("id","cell");
    const imagen=document.createElement('img')
    imagen.setAttribute("id","imagen");
    const div= document.createElement('div');
    div.setAttribute("id","datos");

    nombre.textContent = "Nombre: "+usuario.results[0].name.first +" "+ usuario.results[0].name.last;
    lugar.textContent = "Lugar: "+usuario.results[0].location.city+", "+usuario.results[0].location.country;
    correo.textContent = "Correo: "+usuario.results[0].email;
    cell.textContent = "Cel: "+usuario.results[0].cell;
    imagen.src =usuario.results[0].picture.large;
    
   

   contenedor.appendChild(imagen);
   contenedor.appendChild(div);
   div.appendChild(nombre);
   div.appendChild(lugar);
   div.appendChild(correo);
   div.appendChild(cell);
  

   const boton1 = document.createElement('button');
     boton1.textContent = "siguiente";
     boton1.setAttribute( "onclick","siguiente()");
     boton1.setAttribute("id","boton1");
     boton1.setAttribute("class","boton");

     contenedor.appendChild(boton1);

     const boton2 = document.createElement('button');
     boton2.textContent = "Agregar";
     boton2.setAttribute( "onclick","guardarusuario()");
     boton2.setAttribute("id","boton2");
     boton2.setAttribute("class","boton");

     contenedor.appendChild(boton2);

    console.log(usuario.results);
}

function siguiente(){
   

     obtenerusuario();
};

function guardarusuario(){

     nombreusuario= document.getElementById('nombre');
     const h1= document.createElement('h2');
     
     h1.textContent = nombreusuario.textContent;
     h1.setAttribute("id","nombreagrgado");

     

     const boton3 = document.createElement('button');
     boton3.textContent = "Borrar";
     //boton3.setAttribute( "onclick","eliminar()");
     boton3.setAttribute( "id","boton3");
     boton3.setAttribute( "class","boton");
      
     const div= document.createElement('div');
     div.setAttribute( "id","amigos");
     
     

     cajaprincipal.appendChild(cajamigos);
     cajamigos.appendChild(div);
    
     div.appendChild(h1);
     div.appendChild(boton3);
     
  
 
}



  

