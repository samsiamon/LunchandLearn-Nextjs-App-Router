import { createClient } from "@supabase/supabase-js";
import { APIError } from "../../util/APIError";
import Product, { exampleProduct } from "../../util/Product";
import ProductCard from "@/components/ProductCard";

export default async function Page() {
        // initialize supabase client
        const supabaseUrl = "https://zsosigjojmuorshavobx.supabase.co";
        const supabaseKey = process.env.SUPABASE_KEY;
        const supabase = createClient(supabaseUrl, supabaseKey ?? "");

        // initialize data
        const products: [Product] = await getProducts();

        async function getProducts(): Promise<[Product]> {
            let { data: products, error } = await supabase
            .from('products')
            .select('*')
            if ( error ) {
                throw error
            }
            if ( !products || products.length == 0 ) {
                throw new Error(APIError.NO_DATA)
            }
            return products as [Product];
        }

        return (
            <div>
                {products.map((product) => {
                        return ProductCard(product)
                    })}
            </div>
        )
}