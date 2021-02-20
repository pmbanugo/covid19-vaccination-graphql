import extract from "../data/extract.js";

let data = [];
const getData = () => {
  extract()
    .then((records) => (data = records))
    .catch(console.error);
};
getData();
setInterval(() => getData(), 1 * (360 * 60000));

const resolvers = {
  Query: {
    country: (parent, args) => data.filter((x) => x.location === args.name),
    countries: (parent, { names, date }) => {
      const countries = data.filter((x) => names.includes(x.location));
      if (date) return countries.filter((x) => x.date === date);
      return countries;
    },
    worldData: () => data.filter((x) => x.location === "World"),
  },
};

export default resolvers;
