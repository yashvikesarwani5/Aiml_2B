class Product {
    productId;
    productName;
    price;

    Product(int productId, String productName, double price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }
    double getDiscountedPrice(double discount) {
        return price - (price * discount / 100);
    }
    static void compareProducts(Product p1, Product p2) {
        if (p1.price > p2.price)
            System.out.println(p1.productName + " has higher price.");
        else if (p2.price > p1.price)
            System.out.println(p2.productName + " has higher price.");
        else
            System.out.println("Both products have the same price.");
    }
    void display() {
        System.out.println("Product ID: " + productId);
        System.out.println("Product Name: " + productName);
        System.out.println("Price: " + price);
    }
}
class Electronics extends Product {
    int warranty;

    Electronics(int productId, String productName, double price, int warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }
    @Override
    void display() {
        super.display();
        System.out.println("Warranty: " + warranty + " years");
    }
}
public class Main {
    public static void main(String[] args) {
        Product p1 = new Product(101, "Laptop", 50000);
        Product p2 = new Product(102, "Phone", 30000);
        p1.display();
        System.out.println("Discounted Price: " + p1.getDiscountedPrice(10));
        Electronics e1 = new Electronics(103, "TV", 40000, 2);
        e1.display();
        Product.compareProducts(p1, p2);
    }
}