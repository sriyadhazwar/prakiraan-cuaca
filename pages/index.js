import Head from 'next/head'
import SearchBox from '../components/SearchBox'

export default function Home() {
  return (
   <div> 
    <head>
      <title>prakiraan cuaca app</title>
    </head>

    <div className="home">

      <div className="container">
        <h1><center>Prakiraan Cuaca App</center></h1>
        <SearchBox placeholder="search for a city" />
      </div>
    </div>


   </div>
  )
}


