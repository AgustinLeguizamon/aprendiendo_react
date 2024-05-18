import {useState} from "react";
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

export function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setChecked] = useState(false);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-4">
                    <div className="py-4">
                        <SearchBar searchText={filterText}
                                   inStockOnly={inStockOnly}
                                   onFilterTextChange={setFilterText}
                                   onInStockOnlyPress={setChecked}
                        />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-4">
                    <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
                </div>
            </div>
        </div>
    )
}