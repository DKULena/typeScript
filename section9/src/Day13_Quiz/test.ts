interface Product {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    company: string;
  };
}

type IsProductKey<T> = Product extends T ? true : false;

const product1: Product = {
    id: 0,
  name: "string",
  price: 0,
  seller: {
    id: 0,
    name: "string",
    company: "string",
  },
}

type ProductKey = {
  [key in keyof Product]: Product[key];
};


let a: IsProductKey<"id">