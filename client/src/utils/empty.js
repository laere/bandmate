import _ from "lodash";
import capitalize from "utils/capitalize";

const empty = val => {
  // if val is a string and includes http
  // must be a uri
  if (typeof val === "string" && val.includes("http://")) {
    return val;
  }

  return _.isEmpty(val) ? "N/A" : capitalize(val);
};

export default empty;
