import getTag from "./getTag";
import isObjectLike from "./isObjectLike.js";

function isNumber(value) {
  return (
    typeof value === "number" ||
    (isObjectLike(value) && getTag(value) == "[object Number]")
  );
}

export default isNumber;
