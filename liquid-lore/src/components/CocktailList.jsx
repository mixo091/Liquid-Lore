import { useState , useEffect } from "react";
import { fetchAllCocktails } from "../services/cocktailService";
import SearchBar from "./SearchBar";
import CocktailCard from "./CocktailCard";

const CocktailList = () =>{

    const [cocktails , setCocktails] = useState([]);
    const [loading , setLoading] = useState(false);
    const [searchTerm , setSearchTerm]  = useState('') 

    useEffect(()=>{
        const fetchCocktails = async () => {
          setLoading(true);
          const res = await fetchAllCocktails();
          setCocktails(res);
          setLoading(false);
        }
        fetchCocktails();
      
      } ,[]);

      console.log(searchTerm);


    return (
        <div style={{'width':"70%" , 'margin':'20px 0px' }}>

            <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {
                 cocktails.map((cocktail) => {
                    {

                        return cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase()) ? <CocktailCard  key={cocktail.idDrink} cocktail={cocktail} /> : null

                    }
                 })
            }



        </div>
    );
}



export default CocktailList;