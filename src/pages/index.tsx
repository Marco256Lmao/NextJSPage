import { Button } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { mockedProducts, Product } from "../data/MockedData";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex absolute top-20 md:left-72 md:w-[calc(100%-18rem)] md:h-[calc(100%-5rem)] flex-grow">
      <div className="w-full md:h-[calc(100%-1rem)] m-4 md:mt-2 bg-white shadow-xl rounded-xl flex items-center flex-col overflow-hidden">
        <header className="w-full h-20 rounded-t-xl relative">
          <div className="flex flex-col h-full pl-10 justify-center">
            <p className="text-lg font-bold text-blue-400 pb-1 pt-2">Product Management</p>
            <p className="text-sm text-gray-400">List of your products</p>
          </div>
          <Button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 border border-orange-500 text-orange-500 bg-white hover:bg-orange-100 rounded-lg flex items-center justify-center normal-case"
            variant="outlined"
          >
            <AddCircleOutline className="text-orange-500 mr-2" />
            <p>Add</p>
          </Button>
          <div className="absolute bottom-0 left-0 right-0 w-full h-0.5 bg-slate-200" />
        </header>
        <div className="p-4 w-[95%] flex-grow overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-6">
            {mockedProducts.map((item: Product) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
