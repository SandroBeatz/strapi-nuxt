import { IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'
import dataTypes from './fragmentTypes.json'
import {InMemoryCache} from "@apollo/client";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: dataTypes
})

export default function () {
  console.log(process.env.unoTeamApiUrl)
  return {
    httpEndpoint: process.env.unoTeamApiUrl ? process.env.unoTeamApiUrl + '/graphql' : 'http://localhost:1337/graphql',
    inMemoryCacheOptions: new InMemoryCache({ fragmentMatcher })
  }
}
