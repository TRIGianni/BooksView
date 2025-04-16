import {useEffect, useState} from "react";
import axios from "axios";
import Search from "../components/Search.jsx";
import WishList from "../components/WishList.jsx";
import WishListContext from "../contexts/WishListContext.jsx";
import List from "../components/List.jsx";
import {useDispatch, useSelector} from "react-redux";

function BooksView() {
    const welcome = {
        greeting: 'Hey',
        title: 'React',
    };
    //const [filterBook, setFilterBook] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(false);
    const [url, setUrl] = useState("http://freetestapi.com/api/v1/books?limit=10");
    const [searchTerm, setSearchTerm] = useState("");
    const[wishList, setWishList] = useState([]);

    const dispatchBook = useDispatch();
    const books = useSelector(state => state)

    useEffect(() => {
        axios.get(url)
            .then((response) => {
                //setFilterBook(response.data);
                console.log(response.data);
                dispatchBook({type:"SET_BOOKS", payload: response.data})
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
                setHttpError(error.message);
            })
    }, [url]);



    function handleChange(e) {
        let searchTerm = e.target.value;
        searchTerm = searchTerm.toLowerCase();
        setSearchTerm(searchTerm);
    };


    if (isLoading){
        return (
            <h1>Loading...</h1>
        )
    }

    if (httpError){
        return (
            <h1>{httpError}</h1>
        )
    }
    const handleSearchSubmit = (event) =>{
        setUrl("http://freetestapi.com/api/v1/books?search="+ searchTerm);
        event.preventDefault();
    }

    function handleCheckbox(title, isChecked) {
        if (isChecked) {
            let wlist = [...wishList];
            wlist.push(title);
            setWishList(wlist);

        }
        else {
            let wlist = [...wishList];
            let res = wlist.filter((item) => {
                return item!=title;
            });
            setWishList(res);
        }
    }


    return (
        <>
            <h1>{welcome.greeting} {welcome.title}</h1>
            <Search callback={handleChange} submitHandler={handleSearchSubmit} term={searchTerm} />
            <WishList wishList={wishList} />
            <WishListContext.Provider value={handleCheckbox}>
                <List list={books} />
            </WishListContext.Provider>

        </>
    )
}

export default BooksView;
