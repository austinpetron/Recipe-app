import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
 const initialFormState = {
  name: "",
  cuisine: "",
  photo: "",
  ingredients: "",
  preparation: ""
}
 const [type, setType] = useState("Text");
 const [formData, setFormData] = useState({ ... initialFormState });
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe({ type, ...formData });
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter Name Here"
                />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
               <input
                id="cuisine"
                type="text"
                name="cuisine"
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Enter Cuisine here"
                />
              </label>
              </td>
            <td>
              <label htmlFor="photo">
                <input
                  id="photo"
                  type="url"
                  name="photo"
                  onChange={handleChange}
                  value={formData.photo}
                  placeholder="Enter Photo URL Here"
                />
                </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <textarea
                  id="ingredients"
                  type="text"
                  name="ingredients"
                  onChange={handleChange}
                  value={formData.ingredients}
                  placeholder="Enter Ingredients Here"
                />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <textarea 
                  id="preparation"
                  type="text"
                  name="preparation"
                  onChange={handleChange}
                  value={formData.preparation}
                  placeholder="Enter Preparation Here"
                />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}
  

export default RecipeCreate;