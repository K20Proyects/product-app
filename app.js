class productos {
	constructor (name, price, year) {
	this.name =name;
	this.price = price;
	this.year = year;	
	}
}

var t = 0;

class userInterface {

	 addProduct(producto) {
		t++;
		const listaProductos = document.getElementById ("list-product");
		const elemento = document.createElement("div");
		elemento.innerHTML = `
			<div class="item" id="onedos">
			
				<img src="images/icon01.png">
			
				<div class="item-main-2">
			
					<div class="item-main-21">
						<h5>ID : </h5>
						<h5>NOMBRE : </h5>
						<h5>PRECIO : </h5>
						<h5>AÑO : </h5>
					</div>

					<div class="item-main-22">
						<h5>${t}</h5>
						<h5 class="product-price-input">${producto.name}</h5>
						<h5 class="product-price-input">$ ${producto.price}</h5> <h5 class="product-price-input">${producto.year}</h5>
					</div>

					<div class='deleteDiv'>
						<h5>Eliminar</h5>		
					</div>

					<div class="delete-icon" id='delete-icon' name="${t}">
						<img src='images/deleteBtn.svg'>
					</div>	

				</div>			
			</div>
			`;
	// TOTAL PRODUCTOS
		const items = document.getElementsByClassName("item").length;
		const boxOne = document.getElementById("container-big");
		const  elementoDos = document.createElement("div");
		elementoDos.innerHTML = `
			<div id="container-2-alert" name="Eliminar" class="container-2-alert">
					<div class="container-2-mainUno">
						<h4>TOTAL PRODUCTOS :</h4>
					</div>

					<div class="container-2-mainDos" id='container-2-mainDos'>
						<h4 id="itemsFrame">${items + 1}</h4>
					</div>
			</div>
			`
		boxOne.appendChild(elementoDos);
		listaProductos.appendChild(elemento);
	}

	resetForm (){
		document.getElementById("form-product").reset();
	}
	
	deleteNum(elementoDos) {
		const boxes = document.getElementsByClassName("item").length;
			if (boxes >= 2 ) {
			const r = document.getElementById("container-big");
			r.removeChild(r.childNodes[1]);	
		}
	}
}

// DOM EVENT

document.getElementById("form-product")
	.addEventListener("submit", function(e) {
		const name = document.getElementById("name-product").value;
		const price = document.getElementById("price-product").value;
		const year = document.getElementById("year-product").value;
		/*console.log("NAME : " + name + " PRICE : " + price + " YEAR : " + year);*/

		const producto = new productos (name, price, year);
		const interfaz = new  userInterface ();

	// LOCAL STORAGE
		window.localStorage.setItem('Nombre', JSON.stringify(producto));

	// SAVE
		interfaz.addProduct(producto);
		interfaz.resetForm();
		interfaz.deleteNum();
		e.preventDefault();
	});


