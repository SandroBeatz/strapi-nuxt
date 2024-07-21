import gql from 'graphql-tag'

export const COMPONENTS = gql`
  fragment MainBanner on ComponentDynamicZoneMainBanner {
      images {
          data {
              id
              attributes {
                  alternativeText
                  url
              }
          }
      }
  }
`
