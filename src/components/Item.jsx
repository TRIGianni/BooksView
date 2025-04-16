import {useContext} from "react";
import WishListContext from "../contexts/WishListContext.jsx";

function Item({id,url,title,author,num_comments,points}) {


    const onCheckChange = useContext(WishListContext)

    function checkChange(event) {
        onCheckChange(title, event.target.checked)
    }

    return (
            <li>
                <a href={url}>{title}</a>
                <span>{author} </span>
                <span>{num_comments} </span>
                <span>{author} </span>
                <span>{points}</span>
                <input type="checkbox" onChange={checkChange} />
            </li>
    )
}
export default Item;