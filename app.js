class productos {
	constructor (name, price, year) {
	this.name =name;
	this.price = price;
	this.year = year;
	}
}

class userInterface {

	addProduct (producto) {
		const listaProductos = document.getElementById ("list-product");
		const elemento = document.createElement("div");
		elemento.innerHTML = `
			<div class="item">
			
				<img src="images/icon01.png">
			
				<div class="item-main-2">
			
					<div class="item-main-21">
						<h5>NAME : </h5>
						<h5>PRICE : </h5>
						<h5>YEAR : </h5>
					</div>

					<div class="item-main-22">
						<h5 class="product-price-input">${producto.name}</h5>
						<h5 class="product-price-input">${producto.price}</h5>
						<h5 class="product-price-input">${producto.year}</h5>
					</div>
				</div>
			
			</div>
			`;

		// const nombreUno = document.getElementById("productName01").innerHTML = producto.name;


		listaProductos.appendChild(elemento);
	}

	resetForm (){
		document.getElementById("form-product").reset();
	}
}




// DOM EVENT

document.getElementById("form-product")
	.addEventListener("submit", function(e) {
		const name = document.getElementById("name-product").value;
		const price = document.getElementById("price-product").value;
		const year = document.getElementById("year-product").value;
		console.log("NAME : " + name + " PRICE : " + price + " YEAR : " + year);

		const producto = new productos (name, price, year);

		const interfaz = new  userInterface ();

		interfaz.addProduct(producto);
		interfaz.resetForm();

		e.preventDefault();

	} );


document.getElementById("list-product")
	.addEventListener("click", function(e) {
		console.log(e.target);
	})