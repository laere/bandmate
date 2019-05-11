import _ from "lodash";
import capitalize from "utils/capitalize";

const empty = val => {
  return _.isEmpty(val) ? "N/A" : capitalize(val);
};

export default empty;
