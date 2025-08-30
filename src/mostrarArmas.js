export default function mostrarArmas(data) {
    const armas = data.data //mostramos el array de armas, el código se vuelve más legible.
    console.log(armas);

    const app = document.getElementById('app') //creamos el contenedor para mostrar todas las cards.
    console.log(app)

    //mostrar propiedades de la compra
    let costo = 0
    const totalCompra = document.createElement('h2')
    totalCompra.id = 'costo-compra'
    totalCompra.innerText = "Total de la Compra: $" + costo
    app.appendChild(totalCompra);

    //recibimos cada elemento dentro de nuestra función por medio del forEach
    armas.forEach(arma => {

        const contenedorArma = document.createElement('div') //creamos el contenedor para el arma 
        contenedorArma.style = 'display: flex; flex-direction: column; align-items: center'
        contenedorArma.id = arma.uuid //asignamis el identificador unico a cada arma 
        
        const tituloArma = document.createElement('p') //por cada arma se creará el nuevo elemento definido. En este caso p
        tituloArma.textContent = arma.displayName //asignamos un texto dentro de p
        contenedorArma.appendChild(tituloArma) //agregamos el nuevo componente en nuestro contenedor del arma, se convierte en un hijo.
        
        const imagenArma = document.createElement('img') //creamos una constante para asignarle su respectiva img a cada arma.
        imagenArma.src = arma.displayIcon //seleccionamos la clase correspondiente a la img de cada arma
        contenedorArma.appendChild(imagenArma);
        
        const btnArma = document.createElement('button')
        btnArma.textContent = 'Comprar';
        contenedorArma.appendChild(btnArma);

        app.appendChild(contenedorArma) //ingresamos el contenedor de arma al contenedor general app

        btnArma.addEventListener('click', () => {
        costo = costo + arma.shopData.cost //agregamos los atributos del valor de la arma
        
        //actualizamos el componente pq lo escribirmos hace mucho tiempo
        const totalCompra = document.getElementById('costo-compra')
        totalCompra.innerText = "Total de la Compra: $" + costo

        btnArma.innerText = 'Comprado'
        btnArma.disabled = true  //desactivamos el btn después de que el usuario lo presione

        //obtengo las armas ya guardadas, si no existe ningun registro guardado, por defecto guarde en armasGuardadas un arreglo vacío como string
        const armasGuardadas = localStorage.getItem('armasGuardadas') || '[]' //lo obtenemos solo SI existe, el array vacío significa que si es null o undefined nos devolverá vacío
        const armasGuardadasList = JSON.parse(armasGuardadas) //convertimos a un objeto para modificarlo

        armasGuardadasList.push(arma.uuid)
        localStorage.setItem('armasGuardads', JSON.stringify(armasGuardadasList))
        })
    });
}
