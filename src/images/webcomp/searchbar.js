import './navbar.css'
import SearchIcon from "@material-ui/icons/Search"
import { createSearchParams, useNavigate } from "react-router-dom";

export default function SearchBar() {
    let navigate = useNavigate();
    function SearchBtn(event) {
        if (event.key === 'Enter') {

            const search = document.getElementById('searchBar').value
            console.log(search)
            navigate({
                pathname: "search",
                search: createSearchParams({
                    query: search,
                    filters: '00'
                }).toString()
            });
            document.getElementById('searchBar').value = null;

        }

    }
    return (
        <div className="searchBarContainer">
            <input id='searchBar' type="text" className='inputBox' placeholder='Search for figures!' onKeyPress={SearchBtn} />
            <SearchIcon style={{ fontSize: '40px' }} />
        </div>
    )
}


