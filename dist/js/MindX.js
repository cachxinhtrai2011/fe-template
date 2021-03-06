const api = "https://www.themealdb.com/api/json/v1/1/random.php";
RenderMenu(api)
$(".GetMealUIMain").on("click", function(){
    $(".detailMenu .row .col-sm-4 .item .imageDetail").empty();
    $(".detailMenu .row .col-sm-4 .item .textDetail").empty();
    $(".videoYoutubeAPI").empty();
    RenderMenu(api);
})

function RenderMenu (api) {
    $.get(api, function(data){
        data.meals.map(val =>{
            $(`<img src="${val.strMealThumb}">
            <p>Category: <span>${val.strCategory}</span></p>
            <p>Area: <span>${val.strArea}</span></p>
            `).appendTo(".detailMenu .row .col-sm-4 .item .imageDetail");
        })
        data.meals.map(val =>{
            $(`<h3>Ingredients</h3>
            <nav>
                <ul>
            <li>${val.strIngredient1}  ${val.strMeasure1}</li>
            <li>${val.strIngredient2}  ${val.strMeasure2}</li>
            <li>${val.strIngredient3}  ${val.strMeasure3}</li>
            <li>${val.strIngredient4}  ${val.strMeasure4}</li>
            <li>${val.strIngredient5}  ${val.strMeasure5}</li>            
            <li>${val.strIngredient6}  ${val.strMeasure6}</li>
            <li>${val.strIngredient7}  ${val.strMeasure7}</li>
            <li>${val.strIngredient8}  ${val.strMeasure8}</li>
            <li>${val.strIngredient9}  ${val.strMeasure9}</li>
            <li>${val.strIngredient10}  ${val.strMeasure10}</li>
            <li>${val.strIngredient11}  ${val.strMeasure11}</li>
            <li>${val.strIngredient12}  ${val.strMeasure12}</li>
            <li>${val.strIngredient13}  ${val.strMeasure13}</li>
            <li>${val.strIngredient14}  ${val.strMeasure14}</li>
            <li>${val.strIngredient15}  ${val.strMeasure15}</li>
            <li>${val.strIngredient16}  ${val.strMeasure16}</li>
            <li>${val.strIngredient17}  ${val.strMeasure17}</li>
            <li>${val.strIngredient18}  ${val.strMeasure18}</li>
            <li>${val.strIngredient19}  ${val.strMeasure19}</li>
            <li>${val.strIngredient20}  ${val.strMeasure20}</li>
                </ul>
            </nav>
            `).appendTo(".detailMenu .row .col-sm-4 .item .imageDetail");
        })
        data.meals.map(val =>{
            $(`<h2>${val.strMeal}</h2>
            <p>${val.strInstructions}</p>
            `).appendTo(".detailMenu .row .col-sm-4 .item .textDetail");
        })
        data.meals.map(val =>{
            val.strYoutube = val.strYoutube.split("watch?v=").join("embed/")
            $(`<h2>Video Recipe</h2>
            <iframe width="560" height="315" src="${val.strYoutube}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `).appendTo(".videoYoutubeAPI");
        })
    })
}
