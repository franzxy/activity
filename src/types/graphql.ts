export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};














export type UpdateActivityInput = {
  filter: ActivityFilter;
  set?: Maybe<ActivityPatch>;
  remove?: Maybe<ActivityPatch>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type AddActivityPayload = {
  __typename?: 'AddActivityPayload';
  activity?: Maybe<Array<Maybe<Activity>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddActivityPayloadActivityArgs = {
  filter?: Maybe<ActivityFilter>;
  order?: Maybe<ActivityOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ActivityHasFilter {
  Name = 'name',
  Tags = 'tags',
  Start = 'start',
  End = 'end'
}

export type Activity = {
  __typename?: 'Activity';
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
  tagsAggregate?: Maybe<TagAggregateResult>;
};


export type ActivityTagsArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ActivityTagsAggregateArgs = {
  filter?: Maybe<TagFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};


export type PointListRef = {
  points: Array<PointRef>;
};

export type AddTagPayload = {
  __typename?: 'AddTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type ActivityPatch = {
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type TagPatch = {
  name?: Maybe<Scalars['String']>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type UpdateTagInput = {
  filter: TagFilter;
  set?: Maybe<TagPatch>;
  remove?: Maybe<TagPatch>;
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export enum TagOrderable {
  Name = 'name'
}

export type AddActivityInput = {
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export type AddTagInput = {
  name: Scalars['String'];
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export enum ActivityOrderable {
  Name = 'name',
  Start = 'start',
  End = 'end'
}

export type ActivityOrder = {
  asc?: Maybe<ActivityOrderable>;
  desc?: Maybe<ActivityOrderable>;
  then?: Maybe<ActivityOrder>;
};

export type TagFilter = {
  has?: Maybe<TagHasFilter>;
  and?: Maybe<Array<Maybe<TagFilter>>>;
  or?: Maybe<Array<Maybe<TagFilter>>>;
  not?: Maybe<TagFilter>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type TagOrder = {
  asc?: Maybe<TagOrderable>;
  desc?: Maybe<TagOrderable>;
  then?: Maybe<TagOrder>;
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ActivityFilter = {
  has?: Maybe<ActivityHasFilter>;
  and?: Maybe<Array<Maybe<ActivityFilter>>>;
  or?: Maybe<Array<Maybe<ActivityFilter>>>;
  not?: Maybe<ActivityFilter>;
};

export type Query = {
  __typename?: 'Query';
  queryActivity?: Maybe<Array<Maybe<Activity>>>;
  aggregateActivity?: Maybe<ActivityAggregateResult>;
  queryTag?: Maybe<Array<Maybe<Tag>>>;
  aggregateTag?: Maybe<TagAggregateResult>;
};


export type QueryQueryActivityArgs = {
  filter?: Maybe<ActivityFilter>;
  order?: Maybe<ActivityOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateActivityArgs = {
  filter?: Maybe<ActivityFilter>;
};


export type QueryQueryTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateTagArgs = {
  filter?: Maybe<TagFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addActivity?: Maybe<AddActivityPayload>;
  updateActivity?: Maybe<UpdateActivityPayload>;
  deleteActivity?: Maybe<DeleteActivityPayload>;
  addTag?: Maybe<AddTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
};


export type MutationAddActivityArgs = {
  input: Array<AddActivityInput>;
};


export type MutationUpdateActivityArgs = {
  input: UpdateActivityInput;
};


export type MutationDeleteActivityArgs = {
  filter: ActivityFilter;
};


export type MutationAddTagArgs = {
  input: Array<AddTagInput>;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationDeleteTagArgs = {
  filter: TagFilter;
};


export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type ActivityAggregateResult = {
  __typename?: 'ActivityAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
  startMin?: Maybe<Scalars['DateTime']>;
  startMax?: Maybe<Scalars['DateTime']>;
  endMin?: Maybe<Scalars['DateTime']>;
  endMax?: Maybe<Scalars['DateTime']>;
};

export type ActivityRef = {
  name?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  start?: Maybe<Scalars['DateTime']>;
  end?: Maybe<Scalars['DateTime']>;
};

export enum TagHasFilter {
  Name = 'name'
}

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type DeleteActivityPayload = {
  __typename?: 'DeleteActivityPayload';
  activity?: Maybe<Array<Maybe<Activity>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteActivityPayloadActivityArgs = {
  filter?: Maybe<ActivityFilter>;
  order?: Maybe<ActivityOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TagRef = {
  name?: Maybe<Scalars['String']>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type TagAggregateResult = {
  __typename?: 'TagAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type UpdateActivityPayload = {
  __typename?: 'UpdateActivityPayload';
  activity?: Maybe<Array<Maybe<Activity>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateActivityPayloadActivityArgs = {
  filter?: Maybe<ActivityFilter>;
  order?: Maybe<ActivityOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};
