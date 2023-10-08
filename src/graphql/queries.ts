import { gql } from "./__generated__";



export const Get_Episodes=gql(`
query getEpisodes {
    episodes{
      results{
        name
        id
        air_date
      }
    }
  }
`) 