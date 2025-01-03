export type NavBarLinksType = {
    links: {
        link: string,
        subLinksData?: {
            title: string,
            sublinks:string[]
        }[]
    }[],
}