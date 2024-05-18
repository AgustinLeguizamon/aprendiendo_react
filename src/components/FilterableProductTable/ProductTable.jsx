import {ProductRow} from "./ProductRow";
import {ProductCategoryRow} from "./ProductCategoryRow";

export function ProductTable({products, filterText, inStockOnly}) {
    const categoryToProducts = new Map()
    products.forEach(product => {
        if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
            return;
        }
        if (!product.stocked && inStockOnly) {
            return;
        }
        if (!categoryToProducts.has(product.category)) {
            categoryToProducts.set(product.category, [<ProductCategoryRow category={product.category}
                                                                          key={product.category}/>,
                <ProductRow product={product} key={product.name}/>])
        } else {
            categoryToProducts.get(product.category).push(<ProductRow product={product} key={product.name}/>)
        }
    })

    const rows = Array.from(categoryToProducts.values())

    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    )
}