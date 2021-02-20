import { gql } from "apollo-server";

const typeDefs = gql`
  # This "Location" type defines the queryable fields for every country that has reported data for Vaccination.
  type Location {
    isoCode: String
    location: String
    date: String
    totalVaccinations: String
    peopleVaccinated: String
    peopleFullyVaccinated: String
  }

  type Query {
    countries(names: [String!]!, date: String): [Location]
    country(name: String!): [Location]
    worldData: [Location]
  }
`;

export default typeDefs;
