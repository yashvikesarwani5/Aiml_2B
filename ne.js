class Product {
    constructor(productId, productName, price, quantity) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.quantity = quantity;
    }

    totalPrice() {
        return this.price * this.quantity;
    }

    updateQuantity(newQuantity) {
        this.quantity = newQuantity;
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
        console.log("Quantity:", this.quantity);
        console.log("Total Price:", this.totalPrice());
    }
}

const product1 = new Product(101, "Laptop", 50000, 2);

product1.display();

product1.updateQuantity(3);

console.log("After Updating Quantity:");
product1.display();