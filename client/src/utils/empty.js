import _ from "lodash";

const empty = val => {
  return _.isEmpty(val) ? "N/A" : val;
};

export default empty;
