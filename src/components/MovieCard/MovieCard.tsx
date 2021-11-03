import { differenceInDays, fromUnixTime } from "date-fns";
import { Card, Title, DaysAgo } from "./MovieCard.styled";
import Button from "../Button/Button";
import { Movie } from "../../types/movie";
import { FC } from "react";

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
  return (
    <Card
      id={isLeft ? "left-movie-" + index : "right-movie-" + index}
      onMouseOver={(e: any) => {
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
        (e.currentTarget.style.backgroundColor = isLeft
          ? "#64c86420"
          : "#c8646420")
      }
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
        <Button
          variant="success"
          size="large"
          outline={true}
          onClick={() => onAddClick(movie)}
        >
          {" "}
          Add{" "}
        </Button>
      ) : (
        <Button
          variant="danger"
          size="large"
          outline={true}
          onClick={() => onRemoveClick(movie)}
        >
          {" "}
          Remove{" "}
        </Button>
      )}
    </Card>
  );
};
export default MovieCard;
