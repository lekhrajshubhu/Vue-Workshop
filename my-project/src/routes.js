import MovieList from './components/movieList/MovieList'
import MovieDetail from './components/movieDetail/MovieDetail'
export default [
    {
        path:'/',
        component: MovieList,
        name:'MovieList'
    },

    {
        path:'/movie/:id',
        component:MovieDetail,
        name:'MovieDetail'
    }
];