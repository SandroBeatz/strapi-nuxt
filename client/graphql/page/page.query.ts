import gql from 'graphql-tag'

export const PAGE = gql`
    query page($slug: String! $lang: I18NLocaleCode!) {
        page(slug: $slug locale: $lang) {
            data {
                id
                attributes {
                    title
                    description
                    slug
                }
            }
        }
    }`
