const Search = (props) => {
    //function handleChange(event) {
         //props.callback(event);
    //}
    return (

        <div>
            <form onSubmit={props.submitHandler}>
                <label htmlFor="search">Search</label>
                <input id="search" type="text" placeholder="Search" onChange={props.callback} />
                <button type="submit">Submit</button>

            </form>
            <p> recherche: {props.term}</p>
        </div>)
}
export default Search;