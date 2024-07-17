import {defineStore} from "pinia";
import {NAVIGATIONS} from "~/graphql/navigations/navigation.query";

interface QueryResult {
    renderNavigation: any[]
}


export const useNavigationStore = defineStore('navigation', () => {
    const data = ref<any[]>([])
    const loading = ref<boolean>(false)
    const error = ref<Error | null>(null)

    const fetchData = async () => {
        const variables = { lang: "ru" }

        const response = useAsyncQuery<QueryResult>(NAVIGATIONS, variables)

        data.value = response.data.value?.renderNavigation ?? []
    }

    return { data, loading, error, fetchData }
})
