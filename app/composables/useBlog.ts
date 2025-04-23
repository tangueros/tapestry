export const useBlog = () => {

  const articles = useState('articles', () => [])

  async function fetchList() {
    // articles already loaded?
    if (articles.value.length) { return }

    // articles not loaded? try loading
    try {
      const {data: posts} = await useAsyncData(
        'posts', async () =>
        queryCollection('blog')
        // .where('extension', '=', 'md')
        .order('date', 'DESC').all()
      )
      articles.value = posts.value
        ?.filter(article => article.path !== '/blog')
        || []
    }
    catch (e) {
      articles.value = []
      return e
    }
  }

  return {
    articles,
    fetchList,
  }
}

//export useBlog
