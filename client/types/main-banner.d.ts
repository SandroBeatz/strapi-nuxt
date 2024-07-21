interface MainBannerProps {
    __typename: string
    images: {
        data: MainBannerItem[]
    }
}

interface MainBannerItem {
    id: number
    attributes: {
        url
    }
}
