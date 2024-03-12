import Grid from '@mui/material/Grid';
const Grid = ()=>{
    return(
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          background: "yellow",
          height: 700,
          boder :1,
          gap : 3
        }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={3} sm={5} md={3} key={index} sx={{
            background: "green",
            width :100,
            height: 250,
            margin :1
          }} >
          </Grid>
        ))}
      </Grid>
    )
}
export default Grid