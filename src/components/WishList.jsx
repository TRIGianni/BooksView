
function WishList(props) {

    return (
        <ul>
            {props.wishList.map((book) => (
                <li key={book.title}>{book}</li>
            ))}

        </ul>

    )
}
export default WishList;