const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_WWvvS5UcZ9hXy8carjUplrjDA5pYcCK6o1ZNdVogzu5CXMVFJbtgl5oh35rTtFTl"
let storedBreeds = []

fetch(url,{headers: {
    'x-api-key': api_key
  }})

  .then((response) => {
    return response.json();
  })
 .then((data) => {
    data = data.filter(img=> img.image?.url!=null)
    ///esto solo incluye los gatos que contienen imágenes

storedBreeds = data;
   
    for (let i = 0; i < storedBreeds.length; i++) {
     const breed = storedBreeds[i];
     let option = document.createElement('option');
        ///omite cualquier raza que no tenga una imagen
        if(!breed.image)continue
    
    //usar el índice de matriz actual
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);

    }
    //mostrar la primera raza por defecto
    showBreedImage(0)
})
.catch(function(error) {
    console.log(error);
});

function showBreedImage(index)
{ 
    document.getElementById("breed_image").src= 
storedBreeds[index].image.url;

    document.getElementById("breed_json").textContent= 
storedBreeds[index].temperament

    document.getElementById("wiki_link").href=
storedBreeds[index].wikipedia_url
    document.getElementById("wiki_link").innerHTML= 
storedBreeds[index].wikipedia_url
}