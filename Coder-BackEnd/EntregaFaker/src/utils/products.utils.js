import { faker } from "@faker-js/faker";
import { uuid } from 'uuidv4';
faker.locale = "es";

export default function generateProduct() {
  return {
    id:uuid(),
    nombre: faker.commerce.product(),
    price: faker.commerce.price(),
    imagen: faker.image.imageUrl(),
  };
}