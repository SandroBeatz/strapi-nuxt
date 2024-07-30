import gql from 'graphql-tag'

export const CATEGORY = gql`
    query category($lang: I18NLocaleCode! $category: String!) {
        category(slug: $category locale: $lang) {
            data {
                id
                attributes {
                    title
                    slug
                    subcategories {
                        data {
                            id
                            attributes {
                                title
                                slug
                                subsubcategories {
                                    data {
                                        id
                                        attributes {
                                            title
                                            slug
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
