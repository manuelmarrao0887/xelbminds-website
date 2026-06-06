import { useEffect, useState, useCallback } from 'react'
import { getPosts, subscribe } from '../data/postsRepository'

// Hook que carrega os artigos do repositório e re-renderiza quando mudam
// (por exemplo, depois de criar/editar no backoffice). Pronto para Firebase:
// quando a fonte for assíncrona/remota, este hook mantém-se igual.
export function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  const load = useCallback(async () => {
    const data = await getPosts()
    setPosts(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    load()
    const unsub = subscribe(load)
    return unsub
  }, [load])

  return { posts, loading, reload: load }
}
