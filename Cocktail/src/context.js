import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import {logDOM} from "@testing-library/react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchItem, setSearchItem] =useState('a')
  const [cocktails, setCocktails] = useState([])

  const fetchDrinks = useCallback( async () => {
    setLoading(true)
    try{
      const response = await fetch(`${url}${searchItem}`)
      const data =  await response.json();
      console.log(data)
      const { drinks } =data;
      if (drinks){
        const newCocktail = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          }= item

          return {
            id: idDrink,
            name: strDrink,
            image:strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCocktails(newCocktail)
      }else{
        setCocktails([])
      }
      setLoading(false)
    }catch (e) {
      console.log(e)
      setLoading(false)
    }
  },[searchItem])

  useEffect(() => {
    fetchDrinks()
  },[searchItem,fetchDrinks])

  return <AppContext.Provider value={{loading, cocktails, searchItem, setSearchItem}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
