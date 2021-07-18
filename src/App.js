import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Row from './Row';
import request from './request'
import Banner from './Banner'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
      <Header title="NETFLIX"/>
      <Banner title={request.fetchNetflixOriginals}/>
      <Row title="NEFLIX ORIGINALS"  fetchURL={request.fetchNetflixOriginals} isLargeRow='true'/>
      <Row title="Trending Now" fetchURL={request.fetchTrending} isLargeRow='true'/>
      <Row title="Top Rated" fetchURL={request.fetchTopRated} isLargeRow='true'/>
      <Row title="Action" fetchURL = {request.fetchActionMovies} isLargeRow='true'/>
      <Row title="Comedy" fetchURL = {request.fetchComedyMovies} isLargeRow='true'/>
      <Row title="Romance" fetchURL = {request.fetchRomanceMovies} isLargeRow='true'/>
      <Row title="Horror" fetchURL = {request.fetchHorrorMovies} isLargeRow='true'/>
      <Row title="Documentaries" fetchURL = {request.fetchDocumentaries}isLargeRow='true'/>      
    </div>
  );
}

export default App;
