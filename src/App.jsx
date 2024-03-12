import { useState, useEffect, useContext } from 'react'
import * as React from 'react';
import { Grid, CardMedia } from '@mui/material';
import CardComponent from "./component/CardComponent";
import OptionComponent from './component/OptionComponent';
import HeaderComponent from './component/HeaderComponent';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import PageComponent from './component/PageComponent';
import ShortBy from './component/ShortBy';
import  "./CSS/style.css"
// import Item from '@mui/material/Item'

export const LanguageContext = React.createContext("en")
const App = () => {
  const [newItem, setNewItem] = useState([])
  const [language, setlanguage] = useState("en")
  const [showLoader, setShowLoader] = useState(true)
  const[category,setCategory ]= useState("sports")
  const [page,setPage]= useState(1)
  const[sortBy,setSortBy]=useState("publishedAt")
    const changeLanguage = () => {
    setShowLoader(true)
    if (language === "en") {
      setlanguage("es")
    }
    else {
      setlanguage("en")
    }
  }
  function changeCategory(categories){
    setShowLoader(true)
    console.log(categories)
    setCategory(categories)
   
    // alert("hello")
  }
  const handleChange=(event, value)=>{
    window.scrollTo(0,0)
    setPage(value)
  }
  const changeSort = (event) => {
    setShowLoader(true)
    console.log(event.target.value)
    setSortBy(event.target.value);
  };
  const fetchApi = () => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&sortBy=${sortBy}&page=${page}&language=${language}&apiKey=1e4a31161b684da68ffa8f76205cdc84&pageSize=15`)
      .then((response) => {
        return response.json()
      })

      .then((data) =>
       
        setNewItem(data.articles), setShowLoader(false)
      )

  }
  useEffect(() => {
    fetchApi()
  }, [language,category,page,sortBy])

  return (
  
    <div className='mainContainer'>
      {showLoader ? <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}>
        <CircularProgress color="inherit"  />
      </Backdrop> : 
       <LanguageContext.Provider value={language}>
        <HeaderComponent changeLanguage={changeLanguage} />
        <OptionComponent changeCategory={changeCategory} />
        <ShortBy changeSort={changeSort} sortBy={sortBy}/>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {newItem.map((news, index) => (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <CardComponent news={news} />
            </Grid>
          ))}
          <PageComponent  handleChange={handleChange} />
        </Grid>
      </LanguageContext.Provider>}
     
     
    </div>
  );
}
export default App