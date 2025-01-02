
const apikey="c45a857c193f6302f2b5061c3b85e743";
const base_url="https://api.themoviedb.org/3/";
const imagepath="https://image.tmdb.org/t/p/w500";
 export const fetchmovies=async()=>{
     const url= `${base_url}/movie/popular?api_key=${apikey}&language=en-US&page=1`;
     const response=await fetch(url);
     const data= await response.json();

     return data.return.map(movie =>({
        id:movie.id,
        title:movie.title,
        backdrop_path:`${base_url}${movie.backdrop_path}`,
        vote_average:movie.vote_average,
     }))
}