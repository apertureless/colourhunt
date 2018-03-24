import { ApolloLink } from 'apollo-link'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { GC_AUTH_TOKEN } from '~/constants/settings'

export default (ctx) => {
  const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cj23bdhqjezf401017zjz3w27' })

  // middleware
  const middlewareLink = new ApolloLink((operation, forward) => {
    // auth token
    const token = localStorage.getItem(GC_AUTH_TOKEN)
    operation.setContext({
      headers: {
        Authorization: token ? `Bearer ${token}` : null
      }
    })
    return forward(operation)
  })
  // const link = httpLink
  const link = middlewareLink.concat(httpLink)
  return {
    link,
    cache: new InMemoryCache()
  }
}
