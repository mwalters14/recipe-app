<ol>
{ingredients.map((ingredient) => (
  <li>{ingredient.text}</li>
))}
</ol>
<p>Calories: {roundCalories(calories)}</p>


.recipe {
    border-radius: 10px;
    box-shadow: 0px 5px 20px rgb(70, 70, 70);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    align-items: center;
    min-width: 40%;
}