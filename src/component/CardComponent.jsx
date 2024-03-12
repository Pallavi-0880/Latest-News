import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

const CardComponent =({ news })=> {
  return (
    <div>
      <Card sx={{ maxWidth: 345,mt:3 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={news.urlToImage} 
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.publishedAt}
          </Typography>
        </CardContent>
      </Card>


    </div>

  )
}

export default CardComponent