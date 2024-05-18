import {useState} from "react";
import {SearchBar} from "./SearchBar";
import {ProductTable} from "./ProductTable";

export function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setChecked] = useState(false);

    return (
        <div>
            <SearchBar searchText={filterText}
                       inStockOnly={inStockOnly}
                       onFilterTextChange={setFilterText}
                       onInStockOnlyPress={setChecked}
            />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    )
}