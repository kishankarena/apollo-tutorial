import React from "react";
import { useQuery,gql } from "@apollo/client";
import {Layout,QueryResult} from '../components'
import TrackDetail from '../components/track-detail'
 
 export const GET_TRACK = gql`
 query GetTrack($trackId: ID!) {
  track(id: $trackId) {
    id
    title
    author {
      id
      name
      photo
    }
    thumbnail
    length
    modulesCount
    numberOfViews
    modules {
      id
      title
      length
    }
    description
  }
}`

const Track = ({trackId}) =>{
    const {data,loading,error} = useQuery(GET_TRACK,{
        variables:{trackId}
    })
  return<Layout>
    <QueryResult error={error} loading={loading} data={data}>
      <TrackDetail track={data?.track} />
    </QueryResult>
  </Layout>
}

 export default Track;