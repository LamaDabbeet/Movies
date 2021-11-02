import { differenceInDays, fromUnixTime } from 'date-fns';
import { Movie } from '../movies';
import { Card } from './MovieCard.styled';

export const MovieCard=(props:{movie:Movie,onAddClick:any,onRemoveClick:any,isLeft:boolean,index:number})=> { 
  const {movie,onAddClick,onRemoveClick,isLeft,index} = props;
  return (
    <Card
      id={isLeft?"left-movie-"+index:"right-movie-"+index}
      className="movie"
      style={{ width: 400, height: 100, border: "1px solid black" }}
      onMouseOver={(e:any) => {
        const el = e.currentTarget;
        let l = 0;
        function updateColor(newl: number) {
          l = newl;
          if (isLeft) el.style.backgroundColor = `#64c864${20 + l * 5}`;
          else el.style.backgroundColor = `#c86464${20 + l * 5}`;
          if (l < 10) {
            setTimeout(() => updateColor(l + 1), 25);
          }
        }
        setTimeout(() => updateColor(l + 1), 25);
      }}
      onMouseLeave={(e: any) =>
  
        (e.currentTarget.style.backgroundColor = isLeft ?"#64c86420":"#c8646420")
      }
    >
      <Title id={isLeft?'left-movie-title-'+index:'right-movie-title-'+index}>{movie.title}</Title>
      <DaysAgo>
        Release date:{" "}
        {differenceInDays(new Date(), fromUnixTime(movie.release_date))}{" "}
        days ago
      </DaysAgo>
      {isLeft?
     /*  <button id="add-button" onClick={() => onAddClick(movie)}>
        
      </button> */ <Button variant="success" onClick={()=> onAddClick(movie)}> Add </Button>
      :
     /*  <button id="remove-button" onClick={() => onRemoveClick(movie)}>
         Remove
      </button> */
      <Button variant="danger" onClick={()=> onRemoveClick(movie)}> Remove </Button>
      }
    </Card>
    )
}