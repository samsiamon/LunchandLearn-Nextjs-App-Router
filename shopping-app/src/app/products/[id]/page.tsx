import Product, { ProductProps } from "../../../util/Product"
import { createClient } from '@supabase/supabase-js'
import { APIError } from "@/util/APIError";
import Image from "next/image";

export default async function Page({params}: {params: string}) {
    // initialize supabase client
    const supabaseUrl = 'https://zsosigjojmuorshavobx.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey ?? "");
    
    // initialize data
    const productInfo: Product = await getProductInformation();

    async function getProductInformation(): Promise<Product> {
        console.log("id:" + params)
        let { data: product, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', params)
        if ( error ) {
            throw error
        }
        if ( !product || product.length == 0 ) {
            throw new Error(APIError.NO_DATA)
        }
        return product[0] as Product
    }

    return (
    <div className="container mx-auto">
        <h2>{productInfo.name}</h2>
        <Image title={productInfo.name} src={productInfo.image} alt={productInfo.name} />
        <h3>{productInfo.price}</h3>
        <p>{productInfo.description}</p>
    </div>
    )
}

