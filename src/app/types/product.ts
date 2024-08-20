// class Product {
// 	_id: string;
// 	country: string;
// 	region: string;
// 	category: string;
// 	name: string;
// 	price: number;
// 	photoUrl: string;
// 	description: string;
// 	like: number;

// 	constructor(
// 		_id: string,
// 		country: string,
// 		region: string,
// 		category: string,
// 		name: string,
// 		price: number,
// 		photoUrl: string,
// 		description: string,
// 		like: number
// 	) {
// 		this._id = _id;
// 		this.country = country;
// 		this.region = region;
// 		this.category = category;
// 		this.name = name;
// 		this.price = price;
// 		this.photoUrl = photoUrl;
// 		this.description = description;
// 		this.like = like;
// 	}

// 	static fromJson(json: any): Product {
// 		return new Product(
// 			json._id,
// 			json.country,
// 			json.region,
// 			json.category,
// 			json.name,
// 			json.price,
// 			json.photoUrl ?? null,
// 			json.description,
// 			json.like
// 		);
// 	}
// }

// export default Product;
