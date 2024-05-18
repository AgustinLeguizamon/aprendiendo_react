import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const products = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
    { category: "Fruits", price: "$2", stocked: true, name: "Anana" }
]

function ProductCategoryRow({category}) {
  return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
  )
}

function ProductRow({product}) {
    const name = product.stocked ? product.name :
        <span style={{color: 'red'}}>
            {product.name}
        </span>
    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductTable({products, filterText, inStockOnly}) {
    const categoryToProducts = new Map()
    products.forEach(product => {
        if (!product.name.toLowerCase().includes(filterText.toLowerCase())) {
            return;
        }
        if (!product.stocked && inStockOnly) {
            return;
        }
        if (!categoryToProducts.has(product.category)) {
            categoryToProducts.set(product.category, [<ProductCategoryRow category={product.category} key={product.category} />, <ProductRow product={product} key={product.name} />])
        } else {
            categoryToProducts.get(product.category).push(<ProductRow product={product} key={product.name} />)
        }
    })

    const rows = Array.from(categoryToProducts.values())

    return(
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

function SearchBar({searchText, inStockOnly, onFilterTextChange, onInStockOnlyPress}) {
    return(
        <form>
            <input type="text" value={searchText} placeholder="Search..." onChange={(event) => {
                onFilterTextChange(event.target.value);
            }} />
            <label>
                <input type={"checkbox"} checked={inStockOnly} onChange={(e) => {
                    onInStockOnlyPress(e.target.checked);
                }}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    )
}

function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setChecked] = useState(false);

    return(
        <div>
            <SearchBar searchText={filterText}
                       inStockOnly={inStockOnly}
                       onFilterTextChange={setFilterText}
                       onInStockOnlyPress={setChecked}
            />
            <ProductTable products={products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    )
}

function App() {
  return (
      <FilterableProductTable products={products}/>
  );
}

export default App;
