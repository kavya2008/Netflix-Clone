import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'
const Home = () => {
  return (
    <div>
      <Main/>
      <Row rowId='1'  title='Up Coming' fetchurl={requests.requestUpcoming}/>
      <Row  rowId='2'title='Popular' fetchurl={requests.requestPopular}/>
      <Row  rowId='3'title='Trending' fetchurl={requests.requestTrending}/>
      <Row  rowId='4'title='Top Rated' fetchurl={requests.requestTopRated}/>
      <Row  rowId='5'title='Horror' fetchurl={requests.requestHorror}/>
      </div>
  )
}

export default Home