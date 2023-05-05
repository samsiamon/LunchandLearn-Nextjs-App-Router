import Image from "next/image";
import Link from "next/link";
import Product from "../util/Product";

export default function ProductCard(product: Product) {
    return (
        <Link href={`/products/${product.id as string}`}>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <Image className="w-full" src={`/src/assets/${product.image}`} alt={product.name} fill/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{product.name}</div>
                    <div className="font-bold text-xl mb-2">{"$" + product.price}</div>
                </div>
            </div>
        </Link>
    )
}