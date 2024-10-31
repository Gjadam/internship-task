
// Components
import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";
import Products from "./products/Products";


export default function Index() {
    return (
        <div className=" container mx-auto px-5 xl:container-fluid ">
            <div className=" hidden md:block">
            <Breadcrumb />
            </div>
            <div className=" my-12">
                <Header />
                <div className=" flex gap-5 mt-5">
                    <Sidebar />
                    <Products />
                </div>
            </div>
        </div>
    )
}
