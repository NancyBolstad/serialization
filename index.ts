import isUndefined from "./util/isUndefined";
import isBoolean from "./util/isBoolean";
import isNumber from "./util/isNumber";
import isString from "./util/isString";
import isPlainObject from "./util/isPlainObject";
import isNull from "./util/isNull";

export default function isSerializable(obj) {
  if (
    isUndefined(obj) ||
    isNull(obj) ||
    isBoolean(obj) ||
    isNumber(obj) ||
    isString(obj)
  ) {
    return true;
  }

  if (!isPlainObject(obj) && !Array.isArray(obj)) {
    return false;
  }

  for (var key in obj) {
    if (!isSerializable(obj[key])) {
      return false;
    }
  }

  return true;
}
