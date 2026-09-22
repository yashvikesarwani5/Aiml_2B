class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }
    static compareProducts(p1, p2) {
        if (p1.price > p2.price)
        console.log(p1.productName + " has higher price");
        else
        console.log(p2.productName + " has higher price");
    }
    display() {
    console.log(this.productId);
    console.log(this.productName);
    console.log(this.price);
    }
}
class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
    display() {
        super.display();
        console.log(this.warranty + " years warranty");
    }
}
let p1 = new Product(1, "Laptop", 50000);
let p2 = new Product(2, "Mobile", 30000);
p1.display();
console.log("Discounted Price:", p1.getDiscountedPrice(10));
let e1 = new Electronics(3, "TV", 40000, 2);
e1.display();
Product.compareProducts(p1, p2);