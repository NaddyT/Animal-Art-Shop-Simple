export class Product {
    id: number;
    name: string;
    price: number;
    image_url: string;

    constructor(id: number = 0, name: string = "", price: number = 0, image_url: string = "") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image_url = image_url;
      }

}
