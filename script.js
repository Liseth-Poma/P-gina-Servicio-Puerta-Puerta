let formulario = document.getElementById("formulario");//obtener el elemtos con el id

let enviar = ()=>{
    formulario.innerHTML = `
    <div class="bg-light py-3 px-1">
        <p>mensaje enviado correctamente</p>
    </div>
    `;
}