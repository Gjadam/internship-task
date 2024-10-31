
// Components
import Header from "@/components/templates/index/products/header/Header";
import ProductBox from "./productBox/ProductBox";

// DataBase
import { products } from "../../../../../database/db";
import Image from "next/image";
import Banner from "./banner/Banner";

export default function Products() {
    return (
        <div className=" flex flex-col gap-5 w-full">
            <Header />
            {
                products.slice(0, 4).map(product => (
                    <div key={product.id}>
                        <ProductBox  {...product} />
                    </div>
                ))
            }
            <Banner />
            {
                products.slice(4).map(product => (
                    <div key={product.id}>
                        <ProductBox  {...product} />
                    </div>
                ))
            }
        </div>
    )
}
