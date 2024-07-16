import gql from 'graphql-tag'

export const NAVIGATIONS = gql`
    query renderNavigation($lang: I18NLocaleCode!) {
        renderNavigation(locale: $lang navigationIdOrSlug: "navigation" type: TREE) {
            id
            title
            path
            menuAttached
            show_in_footer
            externalPath
            parent {
                id
                title
                path
            }
        }
    }`
