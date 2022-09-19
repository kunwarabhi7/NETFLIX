import React,{useState, useEffect} from 'react'
import axios from 'axios'
import MovieComponent from './MovieComponent'
import {MdChevronLeft , MdChevronRight} from 'react-icons/md'

const Rows = ({title , fetchURL , rowId}) => {
  const [movies , setMovies] = useState([])
  

  useEffect(()=>{
axios.get(fetchURL).then((response)=>{
  setMovies(response.data.results)
})
  },[fetchURL])

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4 pt-20'>{title}</h2>
    <div className='relative flex items-center group'>
 <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
      <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
    {movies.map((movie , id)=>{
  return (
<MovieComponent  movie={movie} key={id} />
  )
 })}
      </div>
      <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
    </div>
        

    </>
  )
}

export default Rows