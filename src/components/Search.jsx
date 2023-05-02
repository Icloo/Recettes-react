import React from "react";
import { useState} from "react";
import { recipes } from "../recettes";

function Search(){

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTerm = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        setSearchTerm(value);
    }

    const test = recipes.filter((val) => {

        return val.name.toLowerCase().includes(searchTerm.toLowerCase());

    });

    console.log(searchTerm);

    return(
        <>
            <div className="searchBar">
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Rechercher"
                    onChange={handleSearchTerm}
                    />
            </div>
            <div className="searchresult_liste">
            
                {

test.length > 0 ? 
(
  test.map((val) => {
                
                    

                    return(
                        
                    <div className="searchresult" key={val.id}>
                        <h2>{val.name}</h2>
                        <img src= {require (`../images_recettes/${val.name}.jpg`)} alt="recette" className="photo" />
                        <h3>Pour {val.servings} personnes</h3>
                        <h3>{val.time} minutes de préparation</h3>
                        <h4>{val.description}</h4>
                        <h4>Ingrédients</h4>
                        {val.ingredients.map(ingredient => {
                            return (
                                <li>{ingredient.ingredient} {ingredient.quantity} {ingredient.unit}</li>
                            )
                        })}
                    </div>
                    );

                })
) : 

(

  <p className="no-results">Aucune recette trouvée.</p>
)

                    
                // test.map((val) => {
                
                    

                //     return(
                        
                //     <div className="searchresult" key={val.id}>
                //         <h2>{val.name}</h2>
                //         <img src= {require (`../images_recettes/${val.name}.jpg`)} alt="recette" className="photo" />
                //         <h3>Pour {val.servings} personnes</h3>
                //         <h3>{val.time} minutes de préparation</h3>
                //         <h4>{val.description}</h4>
                //     </div>
                //     );

                // })
                }

                

            </div>
        </>
    );
}
export default Search;