// Паттерн Строитель (Builder)
class Product {
    private parts: string[] = [];
  
    public addPart(part: string) {
      this.parts.push(part);
    }
  
    public listParts() {
      console.log(`Product parts: ${this.parts.join(', ')}`);
    }
  }
  
  interface Builder {
    buildPartA(): void;
    buildPartB(): void;
    getResult(): Product;
  }
  
  class ConcreteBuilder implements Builder {
    private product: Product;
  
    constructor() {
      this.reset();
    }
  
    public reset() {
      this.product = new Product();
    }
  
    public buildPartA() {
      this.product.addPart('Part A');
    }
  
    public buildPartB() {
      this.product.addPart('Part B');
    }
  
    public getResult(): Product {
      const result = this.product;
      this.reset();
      return result;
    }
  }
  
  class Director {
    private builder: Builder;
  
    public setBuilder(builder: Builder) {
      this.builder = builder;
    }
  
    public buildMinimalProduct() {
      this.builder.buildPartA();
    }
  
    public buildFullProduct() {
      this.builder.buildPartA();
      this.builder.buildPartB();
    }
  }
  
  // Пример использования
  const director = new Director();
  const builder = new ConcreteBuilder();
  director.setBuilder(builder);
  
  director.buildMinimalProduct();
  const minimalProduct = builder.getResult();
  minimalProduct.listParts();
  
  director.buildFullProduct();
  const fullProduct = builder.getResult();
  fullProduct.listParts();
  
//   Паттерн Прокси (Proxy)
interface Image {
    display(): void;
  }
  
  class RealImage implements Image {
    private filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
      this.loadFromDisk();
    }
  
    private loadFromDisk() {
      console.log(`Loading image: ${this.filename}`);
    }
  
    public display() {
      console.log(`Displaying image: ${this.filename}`);
    }
  }
  
  class ImageProxy implements Image {
    private image: RealImage | null;
    private filename: string;
  
    constructor(filename: string) {
      this.filename = filename;
      this.image = null;
    }
  
    public display() {
      if (!this.image) {
        this.image = new RealImage(this.filename);
      }
      this.image.display();
    }
  }
  
  // Пример использования
  const image1 = new ImageProxy('image1.jpg');
  image1.display(); // Загрузка и отображение реального изображения
  
  const image2 = new ImageProxy('image2.jpg');
  image2.display(); // Загрузка и отображение реального изображения
  image2.display(); // Отображение ранее загруженного изображения без повторной загрузки

//   Паттерн Медиатор (Mediator)
interface Mediator {
    notify(sender: Colleague, event: string): void;
  }
  
  abstract class Colleague {
    protected mediator: Mediator;
  
    constructor(mediator: Mediator) {
      this.mediator = mediator;
    }
  
    public abstract send(event: string): void;
  
    public abstract receive(event: string): void;
  }
  
  class ConcreteColleague1 extends Colleague {
    public send(event: string) {
      console.log(`Colleague 1 sends event: ${event}`);
      this.mediator.notify(this, event);
    }
  
    public receive(event: string) {
      console.log(`Colleague 1 receives event: ${event}`);
    }
  }
  
  class ConcreteColleague2 extends Colleague {
    public send(event: string) {
      console.log(`Colleague 2 sends event: ${event}`);
      this.mediator.notify(this, event);
    }
  
    public receive(event: string) {
      console.log(`Colleague 2 receives event: ${event}`);
    }
  }
  
  class ConcreteMediator implements Mediator {
    private colleague1: ConcreteColleague1;
    private colleague2: ConcreteColleague2;
  
    public setColleague1(colleague1: ConcreteColleague1) {
      this.colleague1 = colleague1;
    }
  
    public setColleague2(colleague2: ConcreteColleague2) {
      this.colleague2 = colleague2;
    }
  
    public notify(sender: Colleague, event: string) {
      if (sender instanceof ConcreteColleague1) {
        this.colleague2.receive(event);
      } else if (sender instanceof ConcreteColleague2) {
        this.colleague1.receive(event);
      }
    }
  }
  
  // Пример использования
  const mediator = new ConcreteMediator();
  
  const colleague1 = new ConcreteColleague1(mediator);
  const colleague2 = new ConcreteColleague2(mediator);
  
  mediator.setColleague1(colleague1);
  mediator.setColleague2(colleague2);
  
  colleague1.send('Event 1');
  colleague2.send('Event 2');

