import data from "../data/data.json";
import dropdown from "../data/Dropdown.json";

export default class MainClass
{
	constructor ()
	{
		this.body = document.body;

		this.arrayOfProduct = data;
		this.arrayOfDropdown = dropdown;
		console.log(this.arrayOfDropdown);

		this.createCategorieSelector();
		this.injectComponent();
	}

	createCategorieSelector()
	{
		this.arrayOfDropdown.forEach((item) => {
			console.log(item)
			switch (item) {
				case item.selected:
					var option = `<option value="${item.value}" selected>${item.text}</option>`;
					break;
				default:
					var option = `<option value="${item.value}">${item.text}</option>`;
					break;
			}
			document.querySelector(".select").innerHTML += option;
		})
		this.selectorListener(document.querySelector(".select"));
	}

	injectComponent()
	{
		this.arrayOfProduct.forEach((item) => {
			let url = new URL(item.image, import.meta.url).href;
			let cardComponent = `<div class="sampleDiv">
				<img src="${url}" alt="" />
				<div>${item.title}</div>
				<div>${item.price}</div>
				</div>`;

			document.querySelector(".productContainer").innerHTML += cardComponent;
		});
	}

	injectFilteredComponent (tag)
	{
		this.arrayOfProduct.forEach((item) => {
			if (item.tag == tag)
			{
				let url = new URL(item.image, import.meta.url).href;
				let cardComponent = `<div class="sampleDiv">
					<img src="${url}" alt="" />
					<div>${item.title}</div>
					<div>${item.price}</div>
					</div>`;

				document.querySelector(".productContainer").innerHTML += cardComponent;
			}
		});
	}

	destroyCard()
	{
		let productContainer = document.querySelector(".productContainer");
		while (productContainer.lastElementChild)
			productContainer.removeChild(productContainer.lastElementChild);
		console.log(productContainer);
	}

	selectorListener(dropdown)
	{
		dropdown.addEventListener("change", (event) => {
			let tag = event.target.value;
			this.destroyCard();
			switch (tag) {
				case "all products":
					this.injectComponent();
					console.log(tag);
					break;
				default:
					this.injectFilteredComponent(tag);
					console.log(tag);
					break;
			}
		})
	}
}
