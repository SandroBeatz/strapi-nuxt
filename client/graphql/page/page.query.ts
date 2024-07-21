import gql from 'graphql-tag'
import {COMPONENTS} from "~/graphql/components.query";

export const PAGE = gql`
    query page($slug: String! $lang: I18NLocaleCode!) {
        page(slug: $slug locale: $lang) {
            data {
                id
                attributes {
                    title
                    description
                    slug
                    dynamic_zone {
                        __typename
                        ...on ComponentDynamicZoneMainBanner {
                            ...MainBanner
                        }
#                        ... on ComponentDynamicZoneMainBanner {
#                            images {
#                                data {
#                                    id
#                                    attributes {
#                                        alternativeText
#                                        url
#                                    }
#                                }
#                            }
#                        }
                    }
                }
            }
        }
    }
    ${COMPONENTS}
`
