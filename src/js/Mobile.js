import Product from "./Product";

export default class Mobile
{
	constructor ()
	{
		this.header = document.querySelector('header');
		this.body = document.body;

		this.product = new Product();
		this.arrayOfProduct = this.product.arrayOfProduct;
		// console.log(this.arrayOfProduct);

		this.createHeader()
		this.createTextArea();
		this.createCategorieSelector();
		// this.displayProduct();
	}

	createHeader()
	{
		let header = document.createElement("div");
		header.classList.add("header_mobile");
		this.header.appendChild(header);
	}

	createTextArea()
	{
		let textArea = document.createElement("div");
		textArea.classList.add("textArea_mobile");

		let text = document.createElement("div");
		text.classList.add("text_banderole_mobile");
		text.textContent = "Pour toutes ventes, s'adresser à un membre du bde";

		textArea.appendChild(text);
		this.body.appendChild(textArea);
	}

	async createCategorieSelector()
	{
		let divLabel = document.createElement("div");
		divLabel.classList.add("dropdown_mobile");

		let label = document.createElement("label");
		label.textContent = "Catégories : ";
		label.classList.add("label");

		let selector = document.createElement("select");
		selector.name = "product dropdown";
		selector.classList.add("select");

		let allProduct = document.createElement("option");
		Object.assign(allProduct, {
			value : "all product",
			textContent : " Tout les produits",
			selected : true
		});
		let membership = document.createElement("option");
		Object.assign(membership, {
			value : "membership",
			textContent : "Adhésion"
		});
		let card = document.createElement("option");
		Object.assign(card, {
			value: "card",
			textContent : "Carte prépayée"
		});
		let drink = document.createElement("option");
		Object.assign(drink, {
			value : "drink",
			textContent : "Boissons"
		});
		let candy = document.createElement("option");
		Object.assign(candy, {
			value : "candy",
			textContent : "Bonbons"
		});
		let cake = document.createElement("option");
		Object.assign(cake, {
			value : "cake",
			textContent : "Gâteaux"
		});
		let iceCream = document.createElement("option");
		Object.assign(iceCream, {
			value : "iceCream",
			textContent : "Glace"
		});
		let salty = document.createElement("option");
		Object.assign(salty, {
			value : "salty",
			textContent : "Salé"
		});

		selector.appendChild(allProduct);
		selector.appendChild(membership);
		selector.appendChild(card);
		selector.appendChild(drink);
		selector.appendChild(candy);
		selector.appendChild(cake);
		selector.appendChild(iceCream);
		selector.appendChild(salty);
		label.appendChild(selector);
		divLabel.appendChild(label);
		this.body.appendChild(divLabel);

		await this.displayProduct().then(this.selectorListener(selector));
	}

	displayProduct()
	{
		return new Promise((resolve, reject) => {
			let container = document.createElement("div");
			container.classList.add("container_mobile");

			let productContainer = document.createElement("div");
			productContainer.classList.add("productContainer_mobile");


			let counter = 1;
			for (let index of this.arrayOfProduct)
			{
					let sampleDiv = document.createElement("div");
					sampleDiv.classList.add("sampleDiv_mobile");
					sampleDiv.style.backgroundColor = 'rgb(' + (Math.random() * 255) + ',' + (Math.random() * 255) + ',' + (Math.random() * 255) + ')';
					// sampleDiv.style.backgroundImage = "url(" + index.img + ")";
					// sampleDiv.style.backgroundImage = "../../public/logo_without_text.jpg";
					let titleProduct = document.createElement("div");
					titleProduct.textContent = index.title;

					sampleDiv.appendChild(titleProduct);
					productContainer.appendChild(sampleDiv);
					console.log(index.img);
			}
			container.appendChild(productContainer);
			this.body.appendChild(container);
		});
	}

	selectorListener(dropdown)
	{
		dropdown.addEventListener("change", (event) => {
			console.log(event.target.value);
		})
	}
}
