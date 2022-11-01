const $openClose = document.getElementById("open-close"),
$aside = document.getElementById("aside");

$openClose.addEventListener("click", ()=>{
$aside.classList.toggle("desplegar")
}); 

const $openClose2 = document.getElementById("open-close-menu"),
$aside2 = document.getElementById("aside");
$openClose2.addEventListener("click", ()=>{
    $aside.classList.toggle("desplegar")
}); 


const contenedor = document.querySelector('.section2-container__content-vid');
const cargarDatos = async () =>{
    let url = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=301ee803ef8d0f4a0f3e338554491240');
    let data = await url.json();
    let peliculas = data.results.slice(0, 7);
     peliculas.map( (pel) =>{
         
         contenedor.innerHTML += `
        <div class="section2-container__content-video">
          <div class="section2-container__content-video-images">
            <img class="section2-container__content-video-images-img" src="https://image.tmdb.org/t/p/w500/${pel.poster_path}" alt="">
          </div>
          <div class="section2-container__content-video-description">
            <h2 class="section2-container__content-video-description-title">${pel.title }</h2>
            <div class="section2-container__content-video-description-div">
              <p class="section2-container__content-video-description-autor">JC</p>
              <p class="section2-container__content-video-description-visualization">27.000 visualizaciones</p>
            </div>
          </div>
        </div>
        `
     });
}
cargarDatos();