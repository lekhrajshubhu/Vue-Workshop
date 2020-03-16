<template>
    <div id="movieList">
       <div class="container">
           <div class="row">
               <div class="col-md-3 col-lg-3">
                   <div id="profile">
                       <img :src="profileImage" style="height:60px">
                   </div>
                   <div class="sideFilter">
                       <ul>
                           <li class="active">All Movies</li>
                           <li>Trending Movies</li>
                           <li>Most Watched Movies</li>
                           <li>Latest Movies</li>
                           <li>Oscar Award Movies</li>
                       </ul>
                   </div>
               </div>
               <div class="col-md-9 col-lg-9">
                   <div id="topSearch">
                       <div><h4>All Movies List </h4></div>
                       <div><input type="Search Here" class="search-input"><i class="fas fa-search"></i></div>
                   </div>
                   <div class="moviesCard">
                        <div class="movieCardItem" v-for="(movie, index) in movies" :key="index">
                            <div style="width:max-content; position:relative">
                                <div class="imageWrapper">    
                                    <img :src="movie.image.medium" alt="Image">
                                </div>
                                <span class="movieRating">{{ movie.rating.average?movie.rating.average:"0.0"}}</span>
                                <span class="text-white">{{ movie.name }}</span>
                                <div class="genres">
                                    <span v-for="(genre, index) in movie.genres" :key="index">{{ genre }}, </span>
                                </div>
                            </div>
                        </div>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            movies:[],
            profileImage: "https://robohash.org/24.218.243.24.png",
        }
    },
    mounted() {
            axios
            .get("http://api.tvmaze.com/shows?page=1")
            .then(response => {
                this.movies = response.data;
            });
    },

    methods: {
        
    }
}
</script>

<style scoped>
.movieRating{
    background: yellow;
    position: absolute;
    bottom: 70px;
    right: -20px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 12px;
    font-weight: 800;
}
.search-input{
    border-radius: 15px;
    border: 0;
    margin-right: 10px;
    font-size: 12px;
    padding: 5px 18px;
}
.search-input:active,
.search-input:focus{
    outline: none;
}
#movieList{
    background:#33434e;
}
#topSearch{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 0;
    color: #fff;
}
.moviesCard{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.movieCardItem{
    width: 210px;
    margin-bottom: 20px;
    cursor: pointer;
}
.imageWrapper{
    -webkit-box-shadow: 1px 0px 13px 9px #1f2f3a;
    -moz-box-shadow: 1px 0px 13px 9px #1f2f3a;
    box-shadow: 1px 0px 13px 9px #1f2f3a;
    width: max-content;
}
.genres{
    color: #fff;
    font-style: italic;
    font-size: 13px;
}
.sideFilter ul{
    /* background: #374c5a; */
    padding:0;
    margin-top: 20px;
    /* -webkit-box-shadow: 7px 12px 21px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 12px 21px -1px rgba(0,0,0,0.75);
    box-shadow: 7px 12px 21px -1px rgba(0,0,0,0.75); */
    list-style: none;
    /* height: 600px; */

}
.sideFilter ul li{
    padding: 10px 20px;
     border-left: 5px solid #33434e;
     color: #fff;
}
.sideFilter ul li:hover,
.sideFilter ul li.active{
    background:#435d6f;
    cursor: pointer;
    border-left: 5px solid #56c8ed;
}
</style>