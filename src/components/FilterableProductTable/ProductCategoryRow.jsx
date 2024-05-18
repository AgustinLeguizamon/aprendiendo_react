export function ProductCategoryRow({category}) {
    return (
        <tr>
            <th scope="row" colSpan="2">
                {category}
            </th>
        </tr>
    )
}