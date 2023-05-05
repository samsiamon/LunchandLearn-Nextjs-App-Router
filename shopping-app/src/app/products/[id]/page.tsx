import Product, { ProductProps } from "./Product"
import { createClient } from '@supabase/supabase-js'
import { APIError } from "@/app/APIError";

export default async function Page({ params }: ProductProps) {
    // initialize supabase client
    const supabaseUrl = 'https://zsosigjojmuorshavobx.supabase.co';
    const supabaseKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseKey ?? "");
    
    // initialize data
    const productInfo: Product = await getProductInformation();

    async function getProductInformation(): Promise<Product> {
        let { data, error } = await supabase
          .from('product')
          .select()
          .eq('id', params)
        if ( error ) {
            throw error
        }
        if ( !data || data.length == 0 ) {
            throw new Error(APIError.NO_DATA)
        }
        return data[0] as Product
    }

    return (
    <div className="container mx-auto">
        
    </div>
    )
}

