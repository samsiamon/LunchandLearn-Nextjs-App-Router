export default interface Product {
    id: string,
    price: number,
    name: string,
    description: string,
    image: string,
}

export interface ProductProps {
    params: string
}

export const exampleProduct: Product = {
    id: "",
    price: 0,
    name: "",
    description: "",
    image: ""
}
