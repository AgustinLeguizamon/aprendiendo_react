export function SearchBar({searchText, inStockOnly, onFilterTextChange, onInStockOnlyPress}) {
    return (
        <form>
            <input type="text" value={searchText} placeholder="Search..." onChange={(event) => {
                onFilterTextChange(event.target.value);
            }}/>
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