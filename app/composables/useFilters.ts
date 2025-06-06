// modify the current routing so that
// a URL maps into different params
// based on filter arguments

export const useFilters = (entity: string) => {
  const route = useRoute()
  const router = useRouter()

  const replaceRoute =
    (name: string, param: string | { key: string }) => {
    router.replace({
      name: entity,
      query: {
        ...route.query,
        [name]: typeof param === 'string'
                ? param
                : param?.key  || undefined
      },
      state: {
        smooth: '#smooth',
      },
    })
  }

  return {
    replaceRoute,
  }
}
