var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Паттерн Строитель (Builder)
var Product = /** @class */ (function () {
    function Product() {
        this.parts = [];
    }
    Product.prototype.addPart = function (part) {
        this.parts.push(part);
    };
    Product.prototype.listParts = function () {
        console.log("Product parts: ".concat(this.parts.join(', ')));
    };
    return Product;
}());
var ConcreteBuilder = /** @class */ (function () {
    function ConcreteBuilder() {
        this.reset();
    }
    ConcreteBuilder.prototype.reset = function () {
        this.product = new Product();
    };
    ConcreteBuilder.prototype.buildPartA = function () {
        this.product.addPart('Part A');
    };
    ConcreteBuilder.prototype.buildPartB = function () {
        this.product.addPart('Part B');
    };
    ConcreteBuilder.prototype.getResult = function () {
        var result = this.product;
        this.reset();
        return result;
    };
    return ConcreteBuilder;
}());
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.buildMinimalProduct = function () {
        this.builder.buildPartA();
    };
    Director.prototype.buildFullProduct = function () {
        this.builder.buildPartA();
        this.builder.buildPartB();
    };
    return Director;
}());
// Пример использования
var director = new Director();
var builder = new ConcreteBuilder();
director.setBuilder(builder);
director.buildMinimalProduct();
var minimalProduct = builder.getResult();
minimalProduct.listParts();
director.buildFullProduct();
var fullProduct = builder.getResult();
fullProduct.listParts();
var RealImage = /** @class */ (function () {
    function RealImage(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    RealImage.prototype.loadFromDisk = function () {
        console.log("Loading image: ".concat(this.filename));
    };
    RealImage.prototype.display = function () {
        console.log("Displaying image: ".concat(this.filename));
    };
    return RealImage;
}());
var ImageProxy = /** @class */ (function () {
    function ImageProxy(filename) {
        this.filename = filename;
        this.image = null;
    }
    ImageProxy.prototype.display = function () {
        if (!this.image) {
            this.image = new RealImage(this.filename);
        }
        this.image.display();
    };
    return ImageProxy;
}());
// Пример использования
var image1 = new ImageProxy('image1.jpg');
image1.display(); // Загрузка и отображение реального изображения
var image2 = new ImageProxy('image2.jpg');
image2.display(); // Загрузка и отображение реального изображения
image2.display(); // Отображение ранее загруженного изображения без повторной загрузки
var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    return Colleague;
}());
var ConcreteColleague1 = /** @class */ (function (_super) {
    __extends(ConcreteColleague1, _super);
    function ConcreteColleague1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague1.prototype.send = function (event) {
        console.log("Colleague 1 sends event: ".concat(event));
        this.mediator.notify(this, event);
    };
    ConcreteColleague1.prototype.receive = function (event) {
        console.log("Colleague 1 receives event: ".concat(event));
    };
    return ConcreteColleague1;
}(Colleague));
var ConcreteColleague2 = /** @class */ (function (_super) {
    __extends(ConcreteColleague2, _super);
    function ConcreteColleague2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteColleague2.prototype.send = function (event) {
        console.log("Colleague 2 sends event: ".concat(event));
        this.mediator.notify(this, event);
    };
    ConcreteColleague2.prototype.receive = function (event) {
        console.log("Colleague 2 receives event: ".concat(event));
    };
    return ConcreteColleague2;
}(Colleague));
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator() {
    }
    ConcreteMediator.prototype.setColleague1 = function (colleague1) {
        this.colleague1 = colleague1;
    };
    ConcreteMediator.prototype.setColleague2 = function (colleague2) {
        this.colleague2 = colleague2;
    };
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (sender instanceof ConcreteColleague1) {
            this.colleague2.receive(event);
        }
        else if (sender instanceof ConcreteColleague2) {
            this.colleague1.receive(event);
        }
    };
    return ConcreteMediator;
}());
// Пример использования
var mediator = new ConcreteMediator();
var colleague1 = new ConcreteColleague1(mediator);
var colleague2 = new ConcreteColleague2(mediator);
mediator.setColleague1(colleague1);
mediator.setColleague2(colleague2);
colleague1.send('Event 1');
colleague2.send('Event 2');
