import moment from "moment";

const generateDate = async (date) => {
  const generateDate = await moment(date).locale("es").format("LLLL");

  return generateDate;
};

export { generateDate };
