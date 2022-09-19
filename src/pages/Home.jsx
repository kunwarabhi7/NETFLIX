import React from 'react'
import Main from '../components/Main'
import Rows from '../components/Rows'
import requests from '../Request'

const Home = () => {
  return (
    <>
        <Main />
        <Rows  rowId='1' title='Upcoming' fetchURL={requests.requestUpcoming}/>
        <Rows rowId='2' title='Horrror' fetchURL={requests.requestHorror}/>
        <Rows rowId='3' title='Popular' fetchURL={requests.requestPopular}/>
        <Rows rowId='4' title='Trending' fetchURL={requests.requestTrending}/>
        <Rows rowId='5' title='TopRated' fetchURL={requests.requestTopRated}/>
        </>
  )
}

export default Home