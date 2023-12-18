import React from "react"

function Recipe({ recipe, deleteRecipe}) {
    const {name, cuisine, photo, ingredients, preparation } = recipe;

    const imageStyle = {
        width: "100px",
        height: "100px",
        objectFit: "scale-down"
    };
      
    return (
      <tr>
        <td>{name}</td>
        <td>{cuisine}</td>
        <td><img src={photo} alt="image" style={imageStyle} /></td>
        <td className="content_td"><p>{ingredients}</p></td>
        <td className="content_td"><p>{preparation}</p></td>
        <td>
            <button name="delete" onClick={() => deleteRecipe(recipe.id)}>Delete</button>
        </td>
      </tr>
    );
  };

export default Recipe;