import { differenceInDays, fromUnixTime } from "date-fns";
import { Card, Title, DaysAgo, ButtonWrapper } from "./MovieCard.styled";
import Button from "../Button/Button";
import { Movie } from "../../types/movie";
import { FC, useRef } from "react";
import { colors } from "../../theme/colors";

interface MovieCardInterface {
  movie: Movie;
  onAddClick: any;
  onRemoveClick: any;
  isLeft: boolean;
  index: number;
}

const MovieCard: FC<MovieCardInterface> = ({
  movie,
  onAddClick,
  onRemoveClick,
  isLeft,
  index,
}) => {

const updateColor= (el:any)=> {
  if (isLeft) el.style.backgroundColor = `${colors.lightGreen}`;
  else el.style.backgroundColor = `${colors.lightRed}`;
}
  const timerRef = useRef<any>(null);
  const onMouseEnter = (e:any) => {
    const el = e.currentTarget; 
    if(timerRef){
      timerRef.current = setTimeout(() => {updateColor(el)}, 25);
    }
  }

  const onMouseLeave = (e:any) => {
    if(timerRef.current) {
      clearTimeout(timerRef.current);
      (e.currentTarget.style.backgroundColor = `${colors.white}`)
      }
  }

  return (
    <Card
      id={isLeft ? "left-movie-" + index : "right-movie-" + index}
      onMouseOver={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Title
        id={isLeft ? "left-movie-title-" + index : "right-movie-title-" + index}
      >
        {movie.title}
      </Title>
      <DaysAgo>
        Release date:{" "}
        {differenceInDays(new Date(), fromUnixTime(movie.release_date))} days
        ago
      </DaysAgo>
      {isLeft ? (
        <ButtonWrapper>
          <Button
            variant="success"
            size="medium"
            onClick={() => onAddClick(movie)}
          >
            {" "}
            Add{" "}
          </Button>
        </ButtonWrapper>
 
      ) : (
        <ButtonWrapper>
          <Button
            variant="danger"
            size="medium"
            onClick={() => onRemoveClick(movie)}
          >
            {" "}
            Remove{" "}
          </Button>
        </ButtonWrapper>
      )}
    </Card>
  );
};
export default MovieCard;
