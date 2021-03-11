import * as Types from '../../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type AllActivitiesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type AllActivitiesQuery = (
  { __typename?: 'Query' }
  & { queryActivity?: Types.Maybe<Array<Types.Maybe<(
    { __typename?: 'Activity' }
    & Pick<Types.Activity, 'name' | 'start' | 'end'>
    & { tags?: Types.Maybe<Array<Types.Maybe<(
      { __typename?: 'Tag' }
      & Pick<Types.Tag, 'name'>
    )>>> }
  )>>> }
);


export const AllActivitiesDocument = gql`
    query allActivities {
  queryActivity {
    name
    tags {
      name
    }
    start
    end
  }
}
    `;

/**
 * __useAllActivitiesQuery__
 *
 * To run a query within a React component, call `useAllActivitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllActivitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllActivitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllActivitiesQuery(baseOptions?: Apollo.QueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
      }
export function useAllActivitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllActivitiesQuery, AllActivitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllActivitiesQuery, AllActivitiesQueryVariables>(AllActivitiesDocument, options);
        }
export type AllActivitiesQueryHookResult = ReturnType<typeof useAllActivitiesQuery>;
export type AllActivitiesLazyQueryHookResult = ReturnType<typeof useAllActivitiesLazyQuery>;
export type AllActivitiesQueryResult = Apollo.QueryResult<AllActivitiesQuery, AllActivitiesQueryVariables>;