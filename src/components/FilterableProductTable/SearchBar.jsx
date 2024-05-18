export function SearchBar({searchText, inStockOnly, onFilterTextChange, onInStockOnlyPress, onClearFilterPress}) {
    return (
        <form>
            <div className="row">
                <div className="col-10">
                    <div className="row">
                        <input type="text" value={searchText} placeholder="Search..." onChange={(event) => {
                            onFilterTextChange(event.target.value);
                        }}/>
                    </div>
                </div>
                <div className="col-2">
                    <button type="button" className="btn btn-primary" onClick={(event) => {
                        onClearFilterPress()
                    }} >Limpiar</button>
                </div>
            </div>
            <div className="row">
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