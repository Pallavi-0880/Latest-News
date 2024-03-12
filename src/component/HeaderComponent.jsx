import { Typography } from "@mui/material"
import { LanguageContext } from "../App"
import { useContext } from "react"
import Button from '@mui/material/Button';
import "../CSS/style.css"
const HeaderComponent = ({changeLanguage}) =>{
    const language = useContext(LanguageContext)
    return(
        <div className="header">
            <Typography variant="h3"
            component="h1"
            >Welcome to latest news</Typography>
           <Button variant="contained" onClick={changeLanguage}>Language: {language==="en"?"english":"spanish"}</Button>
          </div>
    )
}

export default HeaderComponent