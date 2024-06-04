import axios from 'axios';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1';

// Fetch all cocktails by first letter
export const fetchAllCocktails = async () => {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let allCocktails = [];

    try {
        const requests = letters.map(letter => axios.get(`${baseURL}/search.php?f=${letter}`));
        const responses = await Promise.all(requests);

        responses.forEach(response => {
            if (response.data && response.data.drinks) {
                allCocktails = [...allCocktails, ...response.data.drinks];
            }
        });
        return allCocktails;
    } catch (error) {
        console.error('Error Fetching all Cocktails:', error);
    }
};

// Fetch cocktail by ID
export const fetchCocktailById = async (id) => {
    try {
        const response = await axios.get(`${baseURL}/lookup.php?i=${id}`);
        return response.data.drinks[0];
    } catch (error) {
        console.error(`Error Fetching Cocktail with ID ${id}:`, error);
    }
};

// Search cocktails by name
export const searchCocktailsByName = async (name) => {
    try {
        const response = await axios.get(`${baseURL}/search.php?s=${name}`);
        return response.data.drinks;
    } catch (error) {
        console.error(`Error Searching Cocktails by Name ${name}:`, error);
    }
};

// Fetch random cocktail
export const fetchRandomCocktail = async () => {
    try {
        const response = await axios.get(`${baseURL}/random.php`);
        return response.data.drinks[0];
    } catch (error) {
        console.error('Error Fetching Random Cocktail:', error);
    }
};