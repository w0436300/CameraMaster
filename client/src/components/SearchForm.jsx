import {useState, useEffect} from 'react'
import axios from 'axios'
import '../css/main.css'




const SearchForm = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


    useEffect(() => {
        if (searchTerm === '') {
            onSearch(searchTerm);
            setSearchResults([]);
        }
    }, [searchTerm, onSearch]);

    const handleSearch = async (event) => {
        event.preventDefault(); 
        onSearch(searchTerm)

        const response = await axios.get(`http://localhost:8000/cameras`, {
            params: { query: searchTerm } 
        });
        
        console.log(response.data);

            // if db have camer_id
            if (response.data && response.data.length > 0) {
                setSearchResults(response.data);
                
            } else {
                console.log("No results found");
                setSearchResults([]);                          
            }
        } 
        
    
    return ( 
        <>
         
            <div className="input-group">
                <input 
                        type="text" 
                        className="form-control" 
                        name="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by Model/Brand/Color" 
                    />
                    <div className="input-group-append">
                        <button className="btn btn-secondary" type="submit" onClick={handleSearch}>
                            <i className="fa fa-search"></i>
                        </button>
                    </div>
                    
                
            </div>
        </>
              
     )
}
 
export default SearchForm;