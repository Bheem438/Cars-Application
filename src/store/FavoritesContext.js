import { createContext, useState  } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteCar) =>{},
    removeFavorite: (carId) => {},
    itemIsFavorite: (carId) => {}
});

export function FavoritesContextProvider(props){
   const [userFavorites, setUserFavorites] = useState([]);

   function addFavoriteHandler(favoriteCar){
       setUserFavorites((prevUserFavorites)=>{
           return prevUserFavorites.concat(favoriteCar);
       })
   }
   function removeFavoriteHandler(carId){
       setUserFavorites(prevUserFavorites =>{
           return prevUserFavorites.filter((car) =>{
               return car.id !== carId
           })
       })
   }
   function itemIsFavoriteHandler(carId){
       return userFavorites.some(car =>{
            return car.id === carId
       });
   }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorites: addFavoriteHandler,
        removeFavorites: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    }

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;