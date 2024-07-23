import gql from 'graphql-tag'

export const PRODUCT = gql`
    query product($id: ID, $lang: I18NLocaleCode!) {
        product(id: $id locale: $lang) {
            data {
                id
                attributes {
                    title
                    short_description
                    description
                    price {
                        price
                        old_price
                        currency_code
                    }
                    category {
                        data {
                            id
                            attributes {
                                title
                            }
                        }
                    }
                    subcategory {
                        data {
                            id
                            attributes {
                                title
                            }
                        }
                    }
                    subsubcategory {
                        data {
                            id
                            attributes {
                                title
                            }
                        }
                    }
                    product_items {
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
                                sizes {
                                    barcode
                                    size
                                    stock
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
