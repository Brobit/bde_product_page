export default class Product
{
	constructor()
	{
		this.arrayOfProduct = [];

		// price variabilisation
		this.annualMembershipPrice = "30€";
		this.trimestrialMembershipPrice = "13€";
		this.monthlyMembershipPrice = "4€";

		this.memberCardPrice = "7€";
		this.cardPrice = "8€";

		this.canPrice = "0.80€";
		this.waterPrice = "0.30€";
		this.redBullPrice = "1.20€";
		this.otherDrinkPrice = "0.60€";

		this.candyPrice = "0.60€";
		this.smartiesPrice = "0.20€";
		this.unityCandyPrice = "0.1€";

		this.cakePriceFifty = "0.50€";
		this.cakePriceOne = "1€";
		this.cakePriceEighty = "0.80€";
		this.cakePriceSixty = "0.60";

		this.iceCreamPrice = "0.80€";
		this.waterBasedIceCreamPrice = "0.40€";

		this.chipsPrice = "0.50€";
		this.cookeddishesPrice = "2.60€";

		// tag variabilisation
		this.membershipTag = "membership";
		this.cardTag = "card";
		this.drinkTag = "drink";
		this.candyTag = "candy";
		this.cakeTag = "cake";
		this.iceCreamTag = "iceCream";
		this.saltyTag = "salty";

		// default image
		this.defaultImg = "../../public/default.png";
		this.createDrinkProduct();
		this.createCandyProduct();
		this.createCakeProduct();
		this.createIceCreamProduct();
		this.createSaltyProduct();
	}

	createMembershipProduct()
	{
		let annualMembership = this.createData("Adhésion annuelle", "../../public/logo_without_text.jpg", this.annualMembershipPrice, this.membershipTag);
		let trimestrialMembership = this.createData("Adhésion trimestrielle", "../../public/logo_without_text.jpg", this.trimestrialMembershipPrice, this.membershipTag);
		let monthlyMembership = this.createData("Adhésion mensuel", "../../public/logo_without_text.jpg", this.monthlyMembershipPrice, this.membershipTag);
		this.arrayOfProduct.push(annualMembership, trimestrialMembership, monthlyMembership);
	}

	createCardProduct()
	{
		let memberCard = this.createData("Carte prépayée adhérant", "../../public/logo_without_text.jpg", this.memberCardPrice, this.cardTag);
		let card = this.createData("Carte prépayée", "../../public/logo_without_text.jpg", this.cardPrice, this.cardTag);
		this.arrayOfProduct.push(memberCard, card);
	}

	createDrinkProduct()
	{
		let cherryCoke = this.createData("Coca cherry", this.defaultImg, this.canPrice, this.drinkTag);
		let coke = this.createData("Coca cola", this.defaultImg, this.canPrice, this.drinkTag);
		let zeroCoke = this.createData("Coca zero", this.defaultImg, this.canPrice, this.drinkTag);
		let water = this.createData("Eau", this.defaultImg, this.waterPrice, this.drinkTag);
		let iceTea = this.createData("Ice tea", this.defaultImg, this.canPrice, this.drinkTag);
		let appleJuice = this.createData("Jus de pomme", this.defaultImg, this.otherDrinkPrice, this.drinkTag);
		let orangeJuice = this.createData("Jus d'orange", this.defaultImg, this.otherDrinkPrice, this.drinkTag);
		let multivitamineJuice = this.createData("Jus multivitaminé", this.defaultImg, this.otherDrinkPrice, this.drinkTag);
		let chocolateMilk = this.createData("Lait chocolaté", this.defaultImg, this.otherDrinkPrice, this.drinkTag);
		let appleOasis = this.createData("Oasis pomme", this.defaultImg, this.canPrice, this.drinkTag);
		let tropicalOasis = this.createData("Oasis tropical", this.defaultImg, this.canPrice, this.drinkTag);
		let orangina = this.createData("Orangina", this.defaultImg, this.canPrice, this.drinkTag);
		let redBull = this.createData("Redbull", this.defaultImg, this.redBullPrice, this.drinkTag)

		this.arrayOfProduct.push(cherryCoke, coke, zeroCoke, water, iceTea, appleJuice, orangeJuice, multivitamineJuice, chocolateMilk, appleOasis, tropicalOasis, orangina, redBull);
	}

	createCandyProduct()
	{
		let mAndM = this.createData("M&M's", this.defaultImg, this.candyPrice, this.candyTag);
		let smarties = this.createData("Smarties", this.defaultImg, this.smartiesPrice, this.candyTag);
		let unityCandy = this.createData("Bonbon unité", this.defaultImg, this.unityCandyPrice, this.candyTag);

		this.arrayOfProduct.push(mAndM, smarties, unityCandy);
	}

	createCakeProduct()
	{
		let balistoMiel = this.createData("Balisto miel", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let cerealBar = this.createData("Barre de céréale", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let compote = this.createData("Compote", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let milkaCake = this.createData("Gâteau milka", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let kinderBueno = this.createData("Kinder bueno", this.defaultImg, this.cakePriceOne, this.cakeTag);
		let kinderCountry = this.createData("Kinder Country", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let kinderMaxi = this.createData("Kinder maxi", this.defaultImg, this.cakePriceFifty, this.cakeTag);
		let kitkat = this.createData("Kitkat", this.defaultImg, this.cakePriceEighty, this.cakeTag);
		let lion = this.createData("Lion", this.defaultImg, this.cakePriceSixty, this.cakeTag);
		let mars = this.createData("Mars", this.defaultImg, this.cakePriceSixty, this.cakeTag);
		let miniBounty = this.createData("Bounty mini", this.defaultImg, this.cakePriceSixty, this.cakeTag);
		let snickers = this.createData("Snickers", this.defaultImg, this.cakePriceSixty, this.cakeTag);
		let twix = this.createData("Twix", this.defaultImg, this.cakePriceSixty, this.cakeTag);

		this.arrayOfProduct.push(balistoMiel, cerealBar, compote, milkaCake, kinderBueno, kinderCountry, kinderMaxi, kitkat, lion, mars, miniBounty, snickers, twix);
	}

	createIceCreamProduct()
	{
		let extremeChocolate = this.createData("Extrême chocolat", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let extremeMintChocolate = this.createData("Extrême menthe chocolat", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let extremePistachioChocolate = this.createData("Extrême pistache chocolat", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let extremeSorbetRedFruit = this.createData("Extrême sorbet fruit rouge", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let extremeVanilla = this.createData("Extrême vanille", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let extremeStrawberryVanilla = this.createData("Extrême vanille fraise", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let magnumAlmond = this.createData("Magnum amande", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let magnumDoubleCaramel = this.createData("Magnum double caramel", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let magnumClassic = this.createData("Magnum classique", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let icedMars = this.createData("Mars glacé", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let icedTwix = this.createData("Twix glacé", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let icedSnickers = this.createData("Snickers glacé", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let triumWhiteChocolate = this.createData("Trium chocola blanc", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let triumRedFruitVanilla = this.createData("Trium vanille fruit rouge", this.defaultImg, this.iceCreamPrice, this.iceCreamTag);
		let mrFreeze = this.createData("Mr.Freeze", this.defaultImg, this.waterBasedIceCreamPrice, this.iceCreamTag);
		let oasisVanilla = this.createData("Oasis vanille", this.defaultImg, this.waterBasedIceCreamPrice, this.iceCreamTag);
		let pots = this.createData("Petit pot", this.defaultImg, this.waterBasedIceCreamPrice, this.iceCreamTag);

		this.arrayOfProduct.push(extremeChocolate, extremeMintChocolate, extremePistachioChocolate, extremeSorbetRedFruit, extremeVanilla, extremeStrawberryVanilla, magnumAlmond, magnumDoubleCaramel, magnumClassic, icedMars, icedTwix, icedSnickers, triumWhiteChocolate, triumRedFruitVanilla, mrFreeze, oasisVanilla, pots);
	}

	createSaltyProduct()
	{
		let natureChips = this.createData("Chips nature", this.defaultImg, this.chipsPrice, this.saltyTag);
		let cookedDishes = this.createData("Plats cuisiné", this.defaultImg, this.cookeddishesPrice, this.saltyTag);

		this.arrayOfProduct.push(natureChips, cookedDishes);
	}

	createData(title , imgPath, price, tag)
	{
		let dataTemplate = {
			title : title,
			img : imgPath,
			price : price,
			tag : tag
		}
		return (dataTemplate);
	}
}
