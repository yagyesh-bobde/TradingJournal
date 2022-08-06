import { createContext, useState } from "react";

export const newsContext = createContext()

export const NewsState = (props) => {

    const [news, setnews] = useState([]);


    const getNews = async (q='stock market') => {
      
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '5be64915c7mshabd0016d04022d8p114e85jsn81b59b6abb85',
                'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
            }
        };

        fetch('https://newscatcher.p.rapidapi.com/v1/search?q=stock%20market&lang=en&sort_by=relevancy&page=1&media=True', options)
            .then(response => response.json())
            .then(response => setnews(response.articles))
            .catch(err => console.error(err));
    }

    return (
        <newsContext.Provider value={{ news, getNews}}>
            {props.children}
        </newsContext.Provider>
    )
}
