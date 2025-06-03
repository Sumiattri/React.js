import { memo } from "react";

function DisplayFruits({ fruits }) {
  console.log("hii");

  return (
    <div>
      {fruits.map((fruit) => (
        <div key={fruit.fruitName}>
          <span>{fruit.emoji}</span> <span>{fruit.fruitName}</span>
        </div>
      ))}
    </div>
  );
}

export default memo(DisplayFruits);
