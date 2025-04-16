import Item from "./Item.jsx";

function List(props) {

    return (
        <ul>
            {props.list.map((book) => (
                <Item key={book.objectID} {...book} />
            ))}

        </ul>

    )
}
export default List;