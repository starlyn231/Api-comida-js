//let url = `https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id=${ApiId}&app_key=${ApiKeys}`;

//https://api.edamam.com/api/food-database/v2/parser?ingr=red%20apple&app_id={your app_id}&app_key={your app_key}
const container = document.querySelector("#newyork-row");

const buscar = document
    .getElementById("cargar")
    .addEventListener("click", searchRequest);
let ApiId = "7d35aea0";
let ApiKeys = "524d3be7618649f3e2a82406d77fe66a";

// searchRequest

function searchRequest() {
    const input = document.getElementById("inputText").value;
    let url = `https://api.edamam.com/search?app_id=${ApiId}&app_key=${ApiKeys}&q=${input}`;
    fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            let result = data.hits;

            let contenHTML = "";
            result.forEach(function(datos) {
                console.log(datos);

                let calorias = data.hits[0].recipe.calories;
                contenHTML += `
<div class="col-12 col-md-6 col-xl-4">
    <div class="card m-2" id="card" style="width: 18rem;">
  <img src="${datos.recipe.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${datos.recipe.label}</h5>
    <p class="card-text">Calorias totales: ${calorias.toFixed(1)}</p>
<ul id="lista">
<li><small class="badge badge-danger m-1" > ${
          datos.recipe.healthLabels[0]
        }, </small></li>
        <li><small class="badge badge-success m-1" > ${
          datos.recipe.healthLabels[1]
        }, </small></li>
        <li><small class="badge badge-primary m-1" > ${
          datos.recipe.healthLabels[3]
        }, </small></li>
    
</ul>
    
    <a href="${
      datos.recipe.url
    }" class="btn btn-primary" target="_blank">Mas detalle de este plato</a>
    



  </div>
</div>
</div>
    
    `;
                //   let resultado = result.map(data => {
                //    return data;

                let html = "";
                document.getElementById("resultado").innerHTML = contenHTML;
            });
        });
}

/*
                console.log(response)
                let data = await response.json();
                console.log(data);
                console.log(input);
                useApiData(data);
            }


            function useApiData(data) {


                let calorias = data.hits[0].recipe.calories;


                document.querySelector('#resultado').innerHTML = `

                <div class="card" style="width: 18rem;">
              <img src="${data.hits[0].recipe.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${data.hits[0].recipe.label}</h5>
                <p class="card-text">Calorias totales: ${calorias.toFixed(1)}</p>
                <a href="${data.hits[0].recipe.url}" class="btn btn-primary" target="_blank">Go somewhere</a>
              </div>
            </div>
                
                `

            }
            */