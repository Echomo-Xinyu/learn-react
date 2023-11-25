import { render, fireEvent } from "@testing-library/react";
import StarRating from "./starRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

test("renders a specified number of stars", () => {
  const rating = 4;
  const { getAllByTestId } = render(
    <StarRating
      rating={rating}
      total={5}
      onStarClick={(selectedRating) => {
        // setRating(selectedRating);
      }}
    >
      {(isStarFilled) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            size="5x"
            color={isStarFilled ? "green" : "#aaa"}
          />
        );
      }}
    </StarRating>
  );

  // assert
  // check five stars rendered in total
  expect(getAllByTestId("star-button").length).toBe(5);

  // check four stars are filled
  expect(getAllByTestId("filled-star").length).toBe(4);

  // check one star is empty
  expect(getAllByTestId("empty-star").length).toBe(1);
});

test("click on an empty star", () => {
  const rating = 4;
  // function spy to tracks how many times it was called and with what argument
  const onStarClick = jest.fn();

  const { getAllByTestId } = render(
    <StarRating
      rating={rating}
      total={5}
      onStarClick={onStarClick}
    >
      {(isStarFilled) => {
        return (
          <FontAwesomeIcon
            icon={faStar}
            size="5x"
            color={isStarFilled ? "green" : "#aaa"}
          />
        );
      }}
    </StarRating>
  );

  const firstStar = getAllByTestId("star-button")[0];

  fireEvent.click(firstStar);

  // assert

  expect(onStarClick).toHaveBeenCalled();
  expect(onStarClick).toHaveBeenCalledWith(1);
});
