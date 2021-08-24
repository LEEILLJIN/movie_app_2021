import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import React from 'react';
import axios from "axios";
import Movie from './Movie';

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  }
  getMovies = async () =>{
    const {
      data : {
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies , isLoading : false});
  }
  componentDidMount(){
   this.getMovies(); 
  }
  render(){
    const { isLoading, movies } = this.state;
    return(
       <section className = "container">
        {isLoading ?(
        <div className = "loader">
          <span className = "loader_text">Loading...</span>
        </div>
        ) : (
         <div className = "movies">
           { movies.map(movie => (//map함수는 반드시 무언가를 return해줘야한다. =>이면 return의 의미가 포함되어있는 것이다.
          <Movie 
            key ={movie.id}
            id={movie.id} 
            year={movie.year} 
            title={movie.title} 
            summary={movie.summary} 
            poster={movie.medium_cover_image}
            genres={movie.genres}
           />
            )) }
         </div>
        )}
       </section>
      );
  }
}

export default App;
