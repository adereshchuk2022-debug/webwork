class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    info() {
        return `${this.name} (${this.category}) - $${this.price}`;
    }
}

class User {
    constructor(name) {
        this.name = name;
    }

    getInfo() {
        return `User: ${this.name}`;
    }
}

class Customer extends User {
    constructor(name) {
        super(name);
        this.orders = [];
    }

    addOrder(order) {
        this.orders.push(order);
    }

    viewOrders() {
        if (this.orders.length === 0) {
            console.log(`${this.name} has no orders.`);
            return;
        }
        console.log(`Orders for ${this.name}:`);
        this.orders.forEach((order, index) => {
            console.log(`Order #${index + 1}:`);
            order.listProducts();
            console.log(`Total: $${order.totalPrice()}`);
        });
    }
}

class Order {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    totalPrice() {
        return this.products.reduce((sum, product) => sum + product.price, 0);
    }

    listProducts() {
        this.products.forEach(product => {
            console.log(`- ${product.info()}`);
        });
    }
}
const product1 = new Product("Laptop", 1200, "Electronics");
const product2 = new Product("Headphones", 150, "Electronics");
const product3 = new Product("Coffee Mug", 20, "Kitchen");

const customer1 = new Customer("Adam Dereshchuk");

const order1 = new Order();
order1.addProduct(product1);
order1.addProduct(product2);

const order2 = new Order();
order2.addProduct(product3);

customer1.addOrder(order1);
customer1.addOrder(order2);

customer1.viewOrders();
