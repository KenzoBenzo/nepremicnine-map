import { gql } from "graphql-request";

export const GET_PROPERTIES = gql`
  query GET_PROPERTIES {
    properties {
      data {
        _id
        title
        image
        type
        transaction
        bedRooms
        bathRooms
        location {
          neighborhood
          latitude
          longitude
        }
      }
    }
  }
`;