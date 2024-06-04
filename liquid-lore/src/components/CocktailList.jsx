import { useState , useEffect } from "react";
import axios from 'axios';


const fetchAllCocktails = async () => {

    const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=';
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let allCocktails = [];

    try{
        //Fetch Cocktails for each letter.
        const requests  =  letters.map(letter => axios.get(baseURL + letter));
        console.log(requests);
        const reponses = await Promise.all(requests);

        reponses.forEach(response => {
            if(response.data && response.data.drinks){
                allCocktails = [...allCocktails , ...response.data.drinks];
            }
        });
        console.log(allCocktails);
        return allCocktails;

    }catch(error){
        console.error('Error Fetching all Cocktails:' , error);
    }
}





const CocktailList = () =>{

    fetchAllCocktails();

    return (
        <div>CocktailList</div>
    );
}



export default CocktailList