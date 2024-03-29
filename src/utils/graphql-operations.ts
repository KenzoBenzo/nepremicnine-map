import { gql } from 'graphql-request';

export const GET_PROPERTIES = gql`
  query GET_PROPERTIES {
    houses {
      data {
        _id
        title
        naslov
        description
        opis
        images
        type
        transaction
        bedRooms
        bathRooms
        floorSize
        plotSize
        totalPrice
        location {
          neighborhood
          latitude
          longitude
        }
      }
    }
  }
`;
