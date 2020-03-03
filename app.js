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
			<div class="item" id="onedos">
			
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

					<div class="delete-icon">

					</div>
				</div>
			
			</div>
			`;

			const items = document.getElementsByClassName("item").length;
			const boxOne = document.getElementById("container-big");
			const  elementoDos = document.createElement("div");
			elementoDos.innerHTML = `
			<div id="container-2-alert" name="Eliminar	">
					<div class="container-2-mainUno">
						<h4>TOTAL PRODUCTOS :</h4>
					</div>

					<div class="container-2-mainDos">
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
		console.log(boxes);
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
		console.log("NAME : " + name + " PRICE : " + price + " YEAR : " + year);

		const producto = new productos (name, price, year);

		const interfaz = new  userInterface ();

		// SAVE
		interfaz.addProduct(producto);
		interfaz.resetForm();

		// SHIT
		const divs = document.getElementsByClassName("item").length;
		if (divs === 1) {
			console.log("Hay " + divs + " Item");
		} else {
			console.log("Hay " + divs + " Items");
		}


		interfaz.deleteNum();

		e.preventDefault();
	} );


document.getElementById("container-big")
	.addEventListener("click", function(e) {
		// console.log(e.target);
		})

$(".item").mouseover(function(){$(".delete-icon").visible()});
const y = document.getElementsByClassName("item");
const n = document.getElementsByClassName("delete.icon");
	y.onmouseover = function () {
		n.style.visibility="visible"

	}