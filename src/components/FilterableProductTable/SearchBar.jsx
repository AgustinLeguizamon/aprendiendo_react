export function SearchBar({searchText, inStockOnly, onFilterTextChange, onInStockOnlyPress}) {
    return (
        <form>
            <div className="row">
                <div className="row">
                    <input type="text" value={searchText} placeholder="Search..." onChange={(event) => {
                        onFilterTextChange(event.target.value);
                    }}/>
                </div>
                <div className="gx-0 py-2">
                    <label>
                        <input type={"checkbox"} checked={inStockOnly} onChange={(e) => {
                            onInStockOnlyPress(e.target.checked);
                        }}/>
                        {' '}
                        Only show products in stock
                    </label>
                </div>
            </div>
        </form>

    )
}