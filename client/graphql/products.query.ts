import gql from 'graphql-tag'

export const PRODUCTS = gql`
    query productsItems($lang: I18NLocaleCode! $category: StringFilterInput $subCategory: StringFilterInput) {
        productItems(locale: $lang filters: {
            product: {
                category: {
                    slug: $category
                }
                subcategory: {
                    slug: $subCategory
                }
            }
        }) {
            data {
                id
                attributes {
                    images {
                        data {
                            id
                            attributes {
                                url
                                alternativeText
                            }
                        }
                    }
                    product {
                        data {
                            id
                            attributes {
                                title
                                price {
                                    price
                                    old_price
                                    currency_code
                                }
                                category {
                                    data {
                                        attributes {
                                            title
                                            slug
                                        }
                                    }
                                }
                                subcategory {
                                    data {
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
