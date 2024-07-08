class Product {
	country: string;
	region: string;
	category: string;
	name: string;
	price: number;
	photoUrl?: string;
	description?: string;

	constructor(
		country: string,
		region: string,
		category: string,
		name: string,
		price: number,
		photoUrl?: string,
		description?: string
	) {
		this.country = country;
		this.region = region;
		this.category = category;
		this.name = name;
		this.price = price;
		this.photoUrl = photoUrl;
		this.description = description;
	}

	static fromJson(json: any): Product {
		return new Product(
			json.country,
			json.region,
			json.category,
			json.name,
			json.price,
			json.photoUrl ?? null,
			json.description
		);
	}
}

export default Product;
