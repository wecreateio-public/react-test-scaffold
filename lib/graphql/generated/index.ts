import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  /** Date and time in RFC3339, e.g. 2006-01-02T15:04:05Z or 2006-01-02T15:02:05+02:00 */
  DateTime: { input: Date; output: Date; }
  Duration: { input: any; output: any; }
  Int64: { input: any; output: any; }
  Time: { input: any; output: any; }
  URL: { input: any; output: any; }
};

export type Account = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type AccountConnection = Connection & {
  __typename?: 'AccountConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
};

export type AccountEdge = Edge & {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Account;
};

export enum AccountType {
  OnlineAccount = 'ONLINE_ACCOUNT'
}

export type AccountsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Account is referenced */
export type AccountsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Address = Thing & {
  __typename?: 'Address';
  _permissions?: Maybe<Permissions>;
  _viewer: AddressViewer;
  addressCountry: Scalars['String']['output'];
  addressLocality: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type AddressLocatesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AddressLocatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type AddressConnection = Connection & {
  __typename?: 'AddressConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<AddressEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AddressEdge = Edge & {
  __typename?: 'AddressEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Address;
};

export type AddressMatch = {
  __typename?: 'AddressMatch';
  addressCategory: Scalars['String']['output'];
  addressType: AddressType;
  displayName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
  placeRank: Scalars['Int']['output'];
};

export type AddressMatches = {
  __typename?: 'AddressMatches';
  matches: Array<AddressMatch>;
  nextPageParams: PaginationData;
};

export type AddressMatchesCriteria = {
  /** Country to filter for, e.g. ["de", "gb"] */
  countryCodes?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Maximum number of results */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Allows to query new results. */
  nextPageParams?: InputMaybe<PaginationDataInput>;
  /** The term address matches shall be found for */
  searchString?: InputMaybe<Scalars['String']['input']>;
};

export type AddressScope = Thing & {
  __typename?: 'AddressScope';
  _permissions?: Maybe<Permissions>;
  _viewer: AddressScopeViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type AddressScopeLocatesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AddressScopeLocatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type AddressScopeConnection = Connection & {
  __typename?: 'AddressScopeConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<AddressScopeEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AddressScopeEdge = Edge & {
  __typename?: 'AddressScopeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: AddressScope;
};

export type AddressScopeViewer = {
  __typename?: 'AddressScopeViewer';
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
};


export type AddressScopeViewerLocatesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AddressScopeViewerLocatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

/** Possible filter fields when the AddressScope is queried */
export type AddressScopesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the AddressScope is referenced */
export type AddressScopesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

/** RelationsFilter */
export type AddressScopesRelationsFilter = {
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

export enum AddressType {
  Administrative = 'ADMINISTRATIVE',
  Apartments = 'APARTMENTS',
  Continent = 'CONTINENT',
  Residential = 'RESIDENTIAL',
  Suburb = 'SUBURB',
  Unknown = 'UNKNOWN',
  Village = 'VILLAGE'
}

export type AddressViewer = {
  __typename?: 'AddressViewer';
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
};


export type AddressViewerLocatesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AddressViewerLocatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

/** Possible filter fields when the Address is queried */
export type AddressesFilter = {
  addressCountry_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressCountry_eq?: InputMaybe<Scalars['String']['input']>;
  addressCountry_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressCountry_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_eq?: InputMaybe<Scalars['String']['input']>;
  addressCountry_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressCountry_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressCountry_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressLocality_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressLocality_eq?: InputMaybe<Scalars['String']['input']>;
  addressLocality_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressLocality_not_contains?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_eq?: InputMaybe<Scalars['String']['input']>;
  addressLocality_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  addressLocality_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  addressLocality_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Address is referenced */
export type AddressesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

/** RelationsFilter */
export type AddressesRelationsFilter = {
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

export enum Admittance {
  /** To join a collective, a confirmation of an admin is required. */
  Closed = 'CLOSED',
  /** Everybody can join the collective without a confirmation required. */
  Open = 'OPEN'
}

export type Agent = {
  _permissions?: Maybe<Permissions>;
  _viewer: AgentViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imagedByImage?: Maybe<Image>;
  info?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managesContent: ContentConnection;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type AgentKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AgentKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AgentLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type AgentManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type AgentConnection = Connection & {
  __typename?: 'AgentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<AgentEdge>;
  pageInfo: PageInfo;
};

export type AgentEdge = Edge & {
  __typename?: 'AgentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Agent;
};

export enum AgentType {
  Group = 'GROUP',
  Network = 'NETWORK',
  Person = 'PERSON'
}

export type AgentViewer = {
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  managesContent: ContentConnection;
};


export type AgentViewerKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AgentViewerKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type AgentViewerManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

export type AgentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Agent is referenced */
export type AgentsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
};

/** RelationsFilter */
export type AgentsRelationsFilter = {
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
};

export type Article = Content & Thing & {
  __typename?: 'Article';
  _permissions?: Maybe<Permissions>;
  _viewer: ArticleViewer;
  categorizedByCategory: CategoryConnection;
  categorizedByChannel: ChannelConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedByComment: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Group>;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  id: Scalars['ID']['output'];
  imagedByImage: ImageConnection;
  intro?: Maybe<Scalars['String']['output']>;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managedByAgent: AgentConnection;
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  /** Affects the ordering in Feeds */
  publishedSince?: Maybe<Scalars['DateTime']['output']>;
  ratedByContentRating: ContentRatingConnection;
  slug?: Maybe<Scalars['ID']['output']>;
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']['output']>;
};


export type ArticleCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleCategorizedByChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ArticleRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleConnection = Connection & {
  __typename?: 'ArticleConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ArticleEdge = Edge & {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Article;
};

export type ArticleViewer = ContentViewer & {
  __typename?: 'ArticleViewer';
  commentedByComment: CommentConnection;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  imagedByImage: ImageConnection;
  managedByAgent: AgentConnection;
  ratedByContentRating: ContentRatingConnection;
};


export type ArticleViewerCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type ArticleViewerCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type ArticleViewerDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type ArticleViewerImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ArticleViewerManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ArticleViewerRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Article is queried */
export type ArticlesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Possible filter fields when the Article is referenced */
export type ArticlesRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type ArticlesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type BoundingBox = {
  __typename?: 'BoundingBox';
  x1: Scalars['Float']['output'];
  x2: Scalars['Float']['output'];
  y1: Scalars['Float']['output'];
  y2: Scalars['Float']['output'];
};

export type BoundingBoxInput = {
  x1: Scalars['Float']['input'];
  x2: Scalars['Float']['input'];
  y1: Scalars['Float']['input'];
  y2: Scalars['Float']['input'];
};

/** Possible filter fields when the Category is queried */
export type CategoriesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Category is referenced */
export type CategoriesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Category = Thing & {
  __typename?: 'Category';
  _permissions?: Maybe<Permissions>;
  _viewer: CategoryViewer;
  categorizesContent: ContentConnection;
  categorizesGroup: GroupConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CategoryCategorizesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type CategoryCategorizesGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type CategoryConnection = Connection & {
  __typename?: 'CategoryConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryEdge = Edge & {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Category;
};

export type CategoryViewer = {
  __typename?: 'CategoryViewer';
  categorizesContent: ContentConnection;
  categorizesGroup: GroupConnection;
};


export type CategoryViewerCategorizesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type CategoryViewerCategorizesGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

export type Channel = Thing & {
  __typename?: 'Channel';
  _permissions?: Maybe<Permissions>;
  _viewer: ChannelViewer;
  categorizes: ContentConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  managedBy: NetworkConnection;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ChannelCategorizesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type ChannelManagedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type ChannelConnection = Connection & {
  __typename?: 'ChannelConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ChannelEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ChannelEdge = Edge & {
  __typename?: 'ChannelEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Channel;
};

export type ChannelViewer = {
  __typename?: 'ChannelViewer';
  categorizes: ContentConnection;
  managedBy: NetworkConnection;
};


export type ChannelViewerCategorizesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type ChannelViewerManagedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

/** Possible filter fields when the Channel is queried */
export type ChannelsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Channel is referenced */
export type ChannelsRelationFilter = {
  categorizes?: InputMaybe<ContentsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** RelationsFilter */
export type ChannelsRelationsFilter = {
  categorizes?: InputMaybe<ContentsRelationFilter>;
};

export type ClearAddressFields = {
  name?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearArticleFields = {
  intro?: InputMaybe<Scalars['Boolean']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['Boolean']['input']>;
  warning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearCollabTextFields = {
  info?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearEventFields = {
  locationDescription?: InputMaybe<Scalars['Boolean']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['Boolean']['input']>;
  warning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearFileFields = {
  info?: InputMaybe<Scalars['Boolean']['input']>;
  path?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearGroupFields = {
  chatChannel?: InputMaybe<Scalars['Boolean']['input']>;
  contactInfo?: InputMaybe<Scalars['Boolean']['input']>;
  info?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearImageFields = {
  info?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearImpulseFields = {
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['Boolean']['input']>;
  warning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearMembershipInviteFields = {
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearMembershipRequestFields = {
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearNetworkFields = {
  contactInfo?: InputMaybe<Scalars['Boolean']['input']>;
  info?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearPersonFields = {
  info?: InputMaybe<Scalars['Boolean']['input']>;
  intro?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearTaskFields = {
  completedAt?: InputMaybe<Scalars['Boolean']['input']>;
  deadline?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearTopicFields = {
  intro?: InputMaybe<Scalars['Boolean']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['Boolean']['input']>;
  warning?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ClearVideoMeetingFields = {
  text?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollabText = Thing & {
  __typename?: 'CollabText';
  _permissions?: Maybe<Permissions>;
  _viewer: CollabTextViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  managedBy: GroupConnection;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CollabTextManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type CollabTextConnection = Connection & {
  __typename?: 'CollabTextConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<CollabTextEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollabTextEdge = Edge & {
  __typename?: 'CollabTextEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: CollabText;
};

export type CollabTextViewer = {
  __typename?: 'CollabTextViewer';
  managedBy: GroupConnection;
};


export type CollabTextViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

/** Possible filter fields when the CollabText is queried */
export type CollabTextsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the CollabText is referenced */
export type CollabTextsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type CollabTextsRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** Allowed mutations for relations referring to more than one entity. */
export enum CollectionRelationMutation {
  Add = 'ADD',
  Delete = 'DELETE',
  Set = 'SET'
}

export type Comment = Thing & {
  __typename?: 'Comment';
  _permissions?: Maybe<Permissions>;
  _viewer: CommentViewer;
  commentsContent?: Maybe<Content>;
  commentsTask?: Maybe<Task>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ownedBy?: Maybe<OnlineAccount>;
  ratedBy: CommentRatingConnection;
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type CommentRatedByArgs = {
  filter?: InputMaybe<CommentRatingsFilter>;
  orderBy: OrderCommentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type CommentConnection = Connection & {
  __typename?: 'CommentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentEdge = Edge & {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Comment;
};

export type CommentRating = Rating & Thing & {
  __typename?: 'CommentRating';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  rates?: Maybe<Comment>;
  updatedAt: Scalars['DateTime']['output'];
};

export type CommentRatingConnection = Connection & {
  __typename?: 'CommentRatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<CommentRatingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentRatingEdge = Edge & {
  __typename?: 'CommentRatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: CommentRating;
};

/** Possible filter fields when the CommentRating is queried */
export type CommentRatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the CommentRating is referenced */
export type CommentRatingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<CommentsRelationFilter>;
};

/** RelationsFilter */
export type CommentRatingsRelationsFilter = {
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<CommentsRelationFilter>;
};

export type CommentViewer = {
  __typename?: 'CommentViewer';
  ratedBy: CommentRatingConnection;
};


export type CommentViewerRatedByArgs = {
  filter?: InputMaybe<CommentRatingsFilter>;
  orderBy: OrderCommentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentRatingsRelationsFilter>;
};

/** Possible filter fields when the Comment is queried */
export type CommentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Comment is referenced */
export type CommentsRelationFilter = {
  commentsContent?: InputMaybe<ContentsRelationFilter>;
  commentsTask?: InputMaybe<TasksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type CommentsRelationsFilter = {
  commentsContent?: InputMaybe<ContentsRelationFilter>;
  commentsTask?: InputMaybe<TasksRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Connection = {
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  pageInfo: PageInfo;
};

export type Content = {
  _permissions?: Maybe<Permissions>;
  _viewer: ContentViewer;
  categorizedByCategory: CategoryConnection;
  categorizedByChannel: ChannelConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedByComment: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Group>;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  id: Scalars['ID']['output'];
  imagedByImage: ImageConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managedByAgent: AgentConnection;
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  publishedSince?: Maybe<Scalars['DateTime']['output']>;
  ratedByContentRating: ContentRatingConnection;
  slug?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']['output']>;
};


export type ContentCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentCategorizedByChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ContentRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentConnection = Connection & {
  __typename?: 'ContentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ContentEdge>;
  pageInfo: PageInfo;
};

export type ContentEdge = Edge & {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Content;
};

export type ContentRating = Rating & Thing & {
  __typename?: 'ContentRating';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  rates?: Maybe<Content>;
  updatedAt: Scalars['DateTime']['output'];
};

export type ContentRatingConnection = Connection & {
  __typename?: 'ContentRatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ContentRatingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContentRatingEdge = Edge & {
  __typename?: 'ContentRatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: ContentRating;
};

/** Possible filter fields when the ContentRating is queried */
export type ContentRatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the ContentRating is referenced */
export type ContentRatingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

/** RelationsFilter */
export type ContentRatingsRelationsFilter = {
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

export enum ContentType {
  Article = 'ARTICLE',
  Event = 'EVENT',
  Impulse = 'IMPULSE',
  Topic = 'TOPIC'
}

export type ContentViewer = {
  commentedByComment: CommentConnection;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  imagedByImage: ImageConnection;
  managedByAgent: AgentConnection;
  ratedByContentRating: ContentRatingConnection;
};


export type ContentViewerCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type ContentViewerCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type ContentViewerDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type ContentViewerImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ContentViewerManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ContentViewerRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

export type ContentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Possible filter fields when the Content is referenced */
export type ContentsRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type ContentsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type CreatedFileData = {
  __typename?: 'CreatedFileData';
  created: File;
  signedID: Scalars['String']['output'];
};

export type CreatedImageData = {
  __typename?: 'CreatedImageData';
  created: Image;
  signedID: Scalars['String']['output'];
};

export type Document = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  resourceLocation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<DocumentEdge>;
  pageInfo: PageInfo;
};

export type DocumentEdge = Edge & {
  __typename?: 'DocumentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Document;
};

export enum DocumentType {
  File = 'FILE',
  Image = 'IMAGE'
}

export type DocumentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Document is referenced */
export type DocumentsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Holds the cursor of the current item, plus the item. */
export type Edge = {
  /** Cursor of the item to be used for pagination */
  cursor?: Maybe<Scalars['String']['output']>;
};

export type Event = Content & Thing & {
  __typename?: 'Event';
  _permissions?: Maybe<Permissions>;
  _viewer: EventViewer;
  attendedBy: OnlineAccountConnection;
  categorizedByCategory: CategoryConnection;
  categorizedByChannel: ChannelConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedByComment: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Group>;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  id: Scalars['ID']['output'];
  imagedByImage: ImageConnection;
  intro: Scalars['String']['output'];
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  locationDescription?: Maybe<Scalars['String']['output']>;
  managedByAgent: AgentConnection;
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  /** Affects the ordering in Feeds */
  publishedSince?: Maybe<Scalars['DateTime']['output']>;
  ratedByContentRating: ContentRatingConnection;
  slug?: Maybe<Scalars['ID']['output']>;
  startTime: Scalars['DateTime']['output'];
  text: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']['output']>;
};


export type EventAttendedByArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventCategorizedByChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type EventRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type EventConnection = Connection & {
  __typename?: 'EventConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<EventEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EventEdge = Edge & {
  __typename?: 'EventEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Event;
};

export type EventViewer = ContentViewer & {
  __typename?: 'EventViewer';
  commentedByComment: CommentConnection;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  imagedByImage: ImageConnection;
  managedByAgent: AgentConnection;
  ratedByContentRating: ContentRatingConnection;
};


export type EventViewerCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type EventViewerCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type EventViewerDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type EventViewerImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type EventViewerManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type EventViewerRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Event is queried */
export type EventsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  startTime_eq?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  startTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Possible filter fields when the Event is referenced */
export type EventsRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type EventsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Feed = Article | Event | Impulse | Topic;

export type FeedConnection = Connection & {
  __typename?: 'FeedConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<FeedEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type FeedEdge = Edge & {
  __typename?: 'FeedEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Feed;
};

export enum FeedType {
  Article = 'ARTICLE',
  Event = 'EVENT',
  Impulse = 'IMPULSE',
  Topic = 'TOPIC'
}

export type FeedsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Aggregate RelationsFilter */
export type FeedsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** A random uploaded file */
export type File = Document & Thing & {
  __typename?: 'File';
  _permissions?: Maybe<Permissions>;
  _viewer: FileViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  managedBy: GroupConnection;
  name: Scalars['String']['output'];
  path?: Maybe<Scalars['String']['output']>;
  resourceLocation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


/** A random uploaded file */
export type FileManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type FileConnection = Connection & {
  __typename?: 'FileConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<FileEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FileEdge = Edge & {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: File;
};

export type FileViewer = {
  __typename?: 'FileViewer';
  managedBy: GroupConnection;
};


export type FileViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

/** Possible filter fields when the File is queried */
export type FilesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  path_contains?: InputMaybe<Scalars['String']['input']>;
  path_ends_with?: InputMaybe<Scalars['String']['input']>;
  path_eq?: InputMaybe<Scalars['String']['input']>;
  path_in?: InputMaybe<Array<Scalars['String']['input']>>;
  path_not_contains?: InputMaybe<Scalars['String']['input']>;
  path_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  path_not_eq?: InputMaybe<Scalars['String']['input']>;
  path_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  path_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  path_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the File is referenced */
export type FilesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type FilesRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

export type Group = Agent & Thing & {
  __typename?: 'Group';
  _permissions?: Maybe<Permissions>;
  _viewer: GroupViewer;
  administeredBy: MembershipConnection;
  blockedBy: OnlineAccountConnection;
  blocks: OnlineAccountConnection;
  categorizedBy?: Maybe<Category>;
  chatChannel?: Maybe<Scalars['String']['output']>;
  contactInfo?: Maybe<Scalars['String']['output']>;
  covers?: Maybe<Impulse>;
  createdAt: Scalars['DateTime']['output'];
  creates: ContentConnection;
  id: Scalars['ID']['output'];
  imagedByImage?: Maybe<Image>;
  info?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managesCollabText: CollabTextConnection;
  managesContent: ContentConnection;
  managesFile: FileConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
  managesTask: TaskConnection;
  managesVideoMeeting: VideoMeetingConnection;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['ID']['output']>;
  supervisedBy: NetworkConnection;
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
};


export type GroupAdministeredByArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupBlockedByArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupBlocksArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupCreatesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type GroupKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type GroupKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type GroupLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesCollabTextArgs = {
  filter?: InputMaybe<CollabTextsFilter>;
  orderBy: OrderCollabTextsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type GroupManagesFileArgs = {
  filter?: InputMaybe<FilesFilter>;
  orderBy: OrderFilesBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesMembershipRequestArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesTaskArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupManagesVideoMeetingArgs = {
  filter?: InputMaybe<VideoMeetingsFilter>;
  orderBy: OrderVideoMeetingsBy;
  pagination?: InputMaybe<Pagination>;
};


export type GroupSupervisedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type GroupConnection = Connection & {
  __typename?: 'GroupConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<GroupEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupEdge = Edge & {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Group;
};

export type GroupViewer = AgentViewer & {
  __typename?: 'GroupViewer';
  administeredBy: MembershipConnection;
  creates: ContentConnection;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  managesContent: ContentConnection;
  managesFile: FileConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
  supervisedBy: NetworkConnection;
};


export type GroupViewerAdministeredByArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipsRelationsFilter>;
};


export type GroupViewerCreatesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type GroupViewerKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type GroupViewerKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type GroupViewerManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type GroupViewerManagesFileArgs = {
  filter?: InputMaybe<FilesFilter>;
  orderBy: OrderFilesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<FilesRelationsFilter>;
};


export type GroupViewerManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipInvitesRelationsFilter>;
};


export type GroupViewerManagesMembershipRequestArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipRequestsRelationsFilter>;
};


export type GroupViewerSupervisedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

/** Possible filter fields when the Group is queried */
export type GroupsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Group is referenced */
export type GroupsRelationFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  blockedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  blocks?: InputMaybe<OnlineAccountsRelationFilter>;
  categorizedBy?: InputMaybe<CategoriesRelationFilter>;
  covers?: InputMaybe<ImpulsesRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesCollabText?: InputMaybe<CollabTextsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesFile?: InputMaybe<FilesRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  supervisedBy?: InputMaybe<NetworksRelationFilter>;
};

/** RelationsFilter */
export type GroupsRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  blockedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  blocks?: InputMaybe<OnlineAccountsRelationFilter>;
  categorizedBy?: InputMaybe<CategoriesRelationFilter>;
  covers?: InputMaybe<ImpulsesRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesCollabText?: InputMaybe<CollabTextsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesFile?: InputMaybe<FilesRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  supervisedBy?: InputMaybe<NetworksRelationFilter>;
};

export type Image = Document & Thing & {
  __typename?: 'Image';
  _permissions?: Maybe<Permissions>;
  _viewer: ImageViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imagesAgent: AgentConnection;
  imagesContent: ContentConnection;
  info?: Maybe<Scalars['String']['output']>;
  logos: NetworkConnection;
  name: Scalars['String']['output'];
  resourceLocation?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type ImageImagesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ImageImagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type ImageLogosArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImageConnection = Connection & {
  __typename?: 'ImageConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ImageEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageEdge = Edge & {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Image;
};

export type ImageViewer = {
  __typename?: 'ImageViewer';
  imagesAgent: AgentConnection;
  imagesContent: ContentConnection;
  logos: NetworkConnection;
};


export type ImageViewerImagesAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ImageViewerImagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type ImageViewerLogosArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

/** Possible filter fields when the Image is queried */
export type ImagesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Image is referenced */
export type ImagesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Impulse = Content & Thing & {
  __typename?: 'Impulse';
  _permissions?: Maybe<Permissions>;
  _viewer: ImpulseViewer;
  categorizedByCategory: CategoryConnection;
  categorizedByChannel: ChannelConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedByComment: CommentConnection;
  coveredBy: GroupConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Group>;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  id: Scalars['ID']['output'];
  imagedByImage: ImageConnection;
  intro: Scalars['String']['output'];
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managedByAgent: AgentConnection;
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  /** Affects the ordering in Feeds */
  publishedSince?: Maybe<Scalars['DateTime']['output']>;
  ratedByContentRating: ContentRatingConnection;
  relevance: Scalars['Float']['output'];
  slug?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']['output']>;
};


export type ImpulseCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseCategorizedByChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseCoveredByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ImpulseRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseConnection = Connection & {
  __typename?: 'ImpulseConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ImpulseEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImpulseEdge = Edge & {
  __typename?: 'ImpulseEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Impulse;
};

export type ImpulseViewer = ContentViewer & {
  __typename?: 'ImpulseViewer';
  commentedByComment: CommentConnection;
  coveredBy: GroupConnection;
  curatedByTopic: TopicConnection;
  displayedByNetwork: NetworkConnection;
  imagedByImage: ImageConnection;
  managedByAgent: AgentConnection;
  ratedByContentRating: ContentRatingConnection;
};


export type ImpulseViewerCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type ImpulseViewerCoveredByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};


export type ImpulseViewerCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type ImpulseViewerDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type ImpulseViewerImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type ImpulseViewerManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type ImpulseViewerRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Impulse is queried */
export type ImpulsesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  relevance_eq?: InputMaybe<Scalars['Float']['input']>;
  relevance_not_eq?: InputMaybe<Scalars['Float']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Possible filter fields when the Impulse is referenced */
export type ImpulsesRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type ImpulsesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** Links an Account to a Group, i.e. tells which Access or Role an Account has in a specific Group */
export type Membership = Thing & {
  __typename?: 'Membership';
  _permissions?: Maybe<Permissions>;
  administersGroup?: Maybe<Group>;
  administersNetwork?: Maybe<Network>;
  createdAt: Scalars['DateTime']['output'];
  definedBy?: Maybe<Role>;
  id: Scalars['ID']['output'];
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipConnection = Connection & {
  __typename?: 'MembershipConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<MembershipEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipEdge = Edge & {
  __typename?: 'MembershipEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Membership;
};

export type MembershipInvite = Thing & {
  __typename?: 'MembershipInvite';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipInviteConnection = Connection & {
  __typename?: 'MembershipInviteConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<MembershipInviteEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipInviteEdge = Edge & {
  __typename?: 'MembershipInviteEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: MembershipInvite;
};

/** Possible filter fields when the MembershipInvite is queried */
export type MembershipInvitesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted_eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the MembershipInvite is referenced */
export type MembershipInvitesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type MembershipInvitesRelationsFilter = {
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type MembershipRequest = Thing & {
  __typename?: 'MembershipRequest';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: Maybe<Scalars['Boolean']['output']>;
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type MembershipRequestConnection = Connection & {
  __typename?: 'MembershipRequestConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<MembershipRequestEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipRequestEdge = Edge & {
  __typename?: 'MembershipRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: MembershipRequest;
};

/** Possible filter fields when the MembershipRequest is queried */
export type MembershipRequestsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted_eq?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the MembershipRequest is referenced */
export type MembershipRequestsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type MembershipRequestsRelationsFilter = {
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** Possible filter fields when the Membership is queried */
export type MembershipsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Membership is referenced */
export type MembershipsRelationFilter = {
  administersGroup?: InputMaybe<GroupsRelationFilter>;
  administersNetwork?: InputMaybe<NetworksRelationFilter>;
  definedBy?: InputMaybe<RolesRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type MembershipsRelationsFilter = {
  administersGroup?: InputMaybe<GroupsRelationFilter>;
  administersNetwork?: InputMaybe<NetworksRelationFilter>;
  definedBy?: InputMaybe<RolesRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new Address and returns it */
  addressCreate: Address;
  /** Deletes an existing Address and returns the success */
  addressDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Addresses and returns the success */
  addressDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Address and returns the result */
  addressModify: Address;
  /** Creates a new AddressScope and returns it */
  addressScopeCreate: AddressScope;
  /** Deletes an existing AddressScope and returns the success */
  addressScopeDelete: Scalars['Boolean']['output'];
  /** Deletes the existing AddressScopes and returns the success */
  addressScopeDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing AddressScope and returns the result */
  addressScopeModify: AddressScope;
  /** Creates a new Article and returns it */
  articleCreate: Article;
  /** Deletes an existing Article and returns the success */
  articleDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Articles and returns the success */
  articleDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Article and returns the result */
  articleModify: Article;
  articleModifyCategorizedByCategoryRelation: Article;
  articleModifyCategorizedByChannelRelation: Article;
  articleModifyCategorizedByNetworkCategoryRelation: Article;
  articleModifyDisplayedByNetworkRelation: Article;
  articleModifyImagedByImageRelation: Article;
  articleModifyLocatedByAddressScopeRelation: Article;
  articleModifyManagedByAgentRelation: Article;
  articleSetCreatedByGroupRelation: Article;
  articleSetLocatedByAddressRelation: Article;
  articleSetOwnedByMyOnlineAccountRelation: Article;
  articleSetOwnedByOnlineAccountRelation: Article;
  /** Creates a new Category and returns it */
  categoryCreate: Category;
  /** Deletes an existing Category and returns the success */
  categoryDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Categories and returns the success */
  categoryDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Category and returns the result */
  categoryModify: Category;
  /** Creates a new Channel and returns it */
  channelCreate: Channel;
  /** Deletes an existing Channel and returns the success */
  channelDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Channels and returns the success */
  channelDeleteBulk: Scalars['Boolean']['output'];
  channelModifyManagedByNetworkRelation: Channel;
  /** Creates a new CollabText and returns it */
  collabTextCreate: CollabText;
  /** Deletes an existing CollabText and returns the success */
  collabTextDelete: Scalars['Boolean']['output'];
  /** Deletes the existing CollabTexts and returns the success */
  collabTextDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing CollabText and returns the result */
  collabTextModify: CollabText;
  collabTextModifyManagedByGroupRelation: CollabText;
  collabTextSetOwnedByMyOnlineAccountRelation: CollabText;
  /** Creates a new Comment and returns it */
  commentCreate: Comment;
  /** Deletes an existing Comment and returns the success */
  commentDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Comments and returns the success */
  commentDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Comment and returns the result */
  commentModify: Comment;
  /** Creates a new CommentRating and returns it */
  commentRatingCreate: CommentRating;
  /** Deletes an existing CommentRating and returns the success */
  commentRatingDelete: Scalars['Boolean']['output'];
  /** Deletes the existing CommentRatings and returns the success */
  commentRatingDeleteBulk: Scalars['Boolean']['output'];
  commentRatingSetOwnedByMyOnlineAccountRelation: CommentRating;
  commentRatingSetOwnedByOnlineAccountRelation: CommentRating;
  commentRatingSetRatesCommentRelation: CommentRating;
  commentSetOwnedByMyOnlineAccountRelation: Comment;
  commentSetOwnedByOnlineAccountRelation: Comment;
  /** Creates a new ContentRating and returns it */
  contentRatingCreate: ContentRating;
  /** Deletes an existing ContentRating and returns the success */
  contentRatingDelete: Scalars['Boolean']['output'];
  /** Deletes the existing ContentRatings and returns the success */
  contentRatingDeleteBulk: Scalars['Boolean']['output'];
  contentRatingSetOwnedByMyOnlineAccountRelation: ContentRating;
  contentRatingSetOwnedByOnlineAccountRelation: ContentRating;
  contentRatingSetRatesContentRelation: ContentRating;
  /** Creates a new Event and returns it */
  eventCreate: Event;
  /** Deletes an existing Event and returns the success */
  eventDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Events and returns the success */
  eventDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Event and returns the result */
  eventModify: Event;
  eventModifyCategorizedByCategoryRelation: Event;
  eventModifyCategorizedByChannelRelation: Event;
  eventModifyCategorizedByNetworkCategoryRelation: Event;
  eventModifyDisplayedByNetworkRelation: Event;
  eventModifyImagedByImageRelation: Event;
  eventModifyLocatedByAddressScopeRelation: Event;
  eventModifyManagedByAgentRelation: Event;
  eventSetCreatedByGroupRelation: Event;
  eventSetLocatedByAddressRelation: Event;
  eventSetOwnedByMyOnlineAccountRelation: Event;
  eventSetOwnedByOnlineAccountRelation: Event;
  /** Creates a new File and returns it */
  fileCreate: CreatedFileData;
  /** Deletes an existing File and returns the success */
  fileDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Files and returns the success */
  fileDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing File and returns the result */
  fileModify: File;
  fileModifyManagedByGroupRelation: File;
  fileSetOwnedByMyOnlineAccountRelation: File;
  /** Creates a new Group and returns it */
  groupCreate: Group;
  /** Deletes an existing Group and returns the success */
  groupDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Groups and returns the success */
  groupDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Group and returns the result */
  groupModify: Group;
  groupModifyBlocksOnlineAccountRelation: Group;
  groupModifyKnowsAgentRelation: Group;
  groupModifyLocatedByAddressScopeRelation: Group;
  groupModifySupervisedByNetworkRelation: Group;
  groupSetCategorizedByCategoryRelation: Group;
  groupSetCoversImpulseRelation: Group;
  groupSetImagedByImageRelation: Group;
  groupSetLocatedByAddressRelation: Group;
  groupSetOwnedByMyOnlineAccountRelation: Group;
  /** Creates a new Image and returns it */
  imageCreate: CreatedImageData;
  /** Deletes an existing Image and returns the success */
  imageDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Images and returns the success */
  imageDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Image and returns the result */
  imageModify: Image;
  imageSetOwnedByMyOnlineAccountRelation: Image;
  /** Creates a new Impulse and returns it */
  impulseCreate: Impulse;
  /** Deletes an existing Impulse and returns the success */
  impulseDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Impulses and returns the success */
  impulseDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Impulse and returns the result */
  impulseModify: Impulse;
  impulseModifyCategorizedByCategoryRelation: Impulse;
  impulseModifyCategorizedByChannelRelation: Impulse;
  impulseModifyCategorizedByNetworkCategoryRelation: Impulse;
  impulseModifyDisplayedByNetworkRelation: Impulse;
  impulseModifyImagedByImageRelation: Impulse;
  impulseModifyLocatedByAddressScopeRelation: Impulse;
  impulseModifyManagedByAgentRelation: Impulse;
  impulseSetCreatedByGroupRelation: Impulse;
  impulseSetLocatedByAddressRelation: Impulse;
  impulseSetOwnedByMyOnlineAccountRelation: Impulse;
  impulseSetOwnedByOnlineAccountRelation: Impulse;
  /** Creates a new Membership and returns it */
  membershipCreate: Membership;
  /** Deletes an existing Membership and returns the success */
  membershipDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Memberships and returns the success */
  membershipDeleteBulk: Scalars['Boolean']['output'];
  /** Creates a new MembershipInvite and returns it */
  membershipInviteCreate: MembershipInvite;
  /** Deletes an existing MembershipInvite and returns the success */
  membershipInviteDelete: Scalars['Boolean']['output'];
  /** Deletes the existing MembershipInvites and returns the success */
  membershipInviteDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing MembershipInvite and returns the result */
  membershipInviteModify: MembershipInvite;
  /** Creates a new MembershipRequest and returns it */
  membershipRequestCreate: MembershipRequest;
  /** Deletes an existing MembershipRequest and returns the success */
  membershipRequestDelete: Scalars['Boolean']['output'];
  /** Deletes the existing MembershipRequests and returns the success */
  membershipRequestDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing MembershipRequest and returns the result */
  membershipRequestModify: MembershipRequest;
  membershipSetDefinedByRoleRelation: Membership;
  myOnlineAccountModifyAttendsToEventRelation: MyOnlineAccount;
  myOnlineAccountModifyBlocksGroupRelation: MyOnlineAccount;
  myOnlineAccountModifyBlocksOnlineAccountRelation: MyOnlineAccount;
  myOnlineAccountModifyFollowsContentRelation: MyOnlineAccount;
  myOnlineAccountSetRepresentsPersonRelation: MyOnlineAccount;
  /** Creates a new NetworkCategory and returns it */
  networkCategoryCreate: NetworkCategory;
  /** Deletes an existing NetworkCategory and returns the success */
  networkCategoryDelete: Scalars['Boolean']['output'];
  /** Deletes the existing NetworkCategories and returns the success */
  networkCategoryDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing NetworkCategory and returns the result */
  networkCategoryModify: NetworkCategory;
  /** Creates a new Network and returns it */
  networkCreate: Network;
  /** Deletes an existing Network and returns the success */
  networkDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Networks and returns the success */
  networkDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Network and returns the result */
  networkModify: Network;
  networkModifyKnowsAgentRelation: Network;
  networkModifyLocatedByAddressScopeRelation: Network;
  networkSetImagedByImageRelation: Network;
  networkSetLocatedByAddressRelation: Network;
  networkSetLogoedByImageRelation: Network;
  networkSetOwnedByMyOnlineAccountRelation: Network;
  /** Creates a new OnlineAccount and returns it */
  onlineAccountCreate: OnlineAccount;
  /** Deletes an existing OnlineAccount and returns the success */
  onlineAccountDelete: Scalars['Boolean']['output'];
  /** Deletes the existing OnlineAccounts and returns the success */
  onlineAccountDeleteBulk: Scalars['Boolean']['output'];
  onlineAccountModifyAttendsToEventRelation: OnlineAccount;
  onlineAccountModifyBlocksGroupRelation: OnlineAccount;
  onlineAccountModifyBlocksOnlineAccountRelation: OnlineAccount;
  onlineAccountSetRepresentsPersonRelation: OnlineAccount;
  /** Creates a new Person and returns it */
  personCreate: Person;
  /** Deletes an existing Person and returns the success */
  personDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Persons and returns the success */
  personDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Person and returns the result */
  personModify: Person;
  personModifyKnowsAgentRelation: Person;
  personModifyLocatedByAddressScopeRelation: Person;
  personSetImagedByImageRelation: Person;
  personSetLocatedByAddressRelation: Person;
  personSetOwnedByMyOnlineAccountRelation: Person;
  /** Creates a new Preference and returns it */
  preferenceCreate: Preference;
  /** Deletes an existing Preference and returns the success */
  preferenceDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Preferences and returns the success */
  preferenceDeleteBulk: Scalars['Boolean']['output'];
  preferenceSetOwnedByMyOnlineAccountRelation: Preference;
  preferenceSetOwnedByOnlineAccountRelation: Preference;
  /** Creates a new Role and returns it */
  roleCreate: Role;
  /** Deletes an existing Role and returns the success */
  roleDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Roles and returns the success */
  roleDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Role and returns the result */
  roleModify: Role;
  /** Creates a new Task and returns it */
  taskCreate: Task;
  /** Deletes an existing Task and returns the success */
  taskDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Tasks and returns the success */
  taskDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Task and returns the result */
  taskModify: Task;
  taskModifyImplementedByOnlineAccountRelation: Task;
  taskModifyManagedByGroupRelation: Task;
  /** Creates a new Topic and returns it */
  topicCreate: Topic;
  /** Deletes an existing Topic and returns the success */
  topicDelete: Scalars['Boolean']['output'];
  /** Deletes the existing Topics and returns the success */
  topicDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing Topic and returns the result */
  topicModify: Topic;
  topicModifyCategorizedByCategoryRelation: Topic;
  topicModifyCategorizedByChannelRelation: Topic;
  topicModifyCategorizedByNetworkCategoryRelation: Topic;
  topicModifyCuratesContentRelation: Topic;
  topicModifyDisplayedByNetworkRelation: Topic;
  topicModifyImagedByImageRelation: Topic;
  topicModifyLocatedByAddressScopeRelation: Topic;
  topicModifyManagedByAgentRelation: Topic;
  topicSetCreatedByGroupRelation: Topic;
  topicSetLocatedByAddressRelation: Topic;
  topicSetOwnedByMyOnlineAccountRelation: Topic;
  topicSetOwnedByOnlineAccountRelation: Topic;
  /** Creates a new VideoMeeting and returns it */
  videoMeetingCreate: VideoMeeting;
  /** Deletes an existing VideoMeeting and returns the success */
  videoMeetingDelete: Scalars['Boolean']['output'];
  /** Deletes the existing VideoMeetings and returns the success */
  videoMeetingDeleteBulk: Scalars['Boolean']['output'];
  /** Modifies an existing VideoMeeting and returns the result */
  videoMeetingModify: VideoMeeting;
  videoMeetingSetManagedByGroupRelation: VideoMeeting;
};


export type MutationAddressCreateArgs = {
  input: NewAddress;
};


export type MutationAddressDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAddressModifyArgs = {
  deletion?: InputMaybe<ClearAddressFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateAddress>;
};


export type MutationAddressScopeCreateArgs = {
  input: NewAddressScope;
};


export type MutationAddressScopeDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationAddressScopeDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationAddressScopeModifyArgs = {
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateAddressScope>;
};


export type MutationArticleCreateArgs = {
  input: NewArticle;
  relationInput: NewArticleRelations;
};


export type MutationArticleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationArticleDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyArgs = {
  deletion?: InputMaybe<ClearArticleFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateArticle>;
};


export type MutationArticleModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyCategorizedByChannelRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleModifyManagedByAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationArticleSetCreatedByGroupRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArticleSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArticleSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationArticleSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCategoryCreateArgs = {
  input: NewCategory;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCategoryDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCategoryModifyArgs = {
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateCategory>;
};


export type MutationChannelCreateArgs = {
  input: NewChannel;
  relationInput: NewChannelRelations;
};


export type MutationChannelDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationChannelDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationChannelModifyManagedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationCollabTextCreateArgs = {
  input: NewCollabText;
  relationInput: NewCollabTextRelations;
};


export type MutationCollabTextDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCollabTextDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCollabTextModifyArgs = {
  deletion?: InputMaybe<ClearCollabTextFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateCollabText>;
};


export type MutationCollabTextModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationCollabTextSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCommentCreateArgs = {
  input: NewComment;
  relationInput: NewCommentRelations;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommentDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCommentModifyArgs = {
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateComment>;
};


export type MutationCommentRatingCreateArgs = {
  relationInput: NewCommentRatingRelations;
};


export type MutationCommentRatingDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCommentRatingDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationCommentRatingSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCommentRatingSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCommentRatingSetRatesCommentRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCommentSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCommentSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationContentRatingCreateArgs = {
  relationInput: NewContentRatingRelations;
};


export type MutationContentRatingDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationContentRatingDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationContentRatingSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationContentRatingSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationContentRatingSetRatesContentRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEventCreateArgs = {
  input: NewEvent;
  relationInput: NewEventRelations;
};


export type MutationEventDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEventDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyArgs = {
  deletion?: InputMaybe<ClearEventFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateEvent>;
};


export type MutationEventModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyCategorizedByChannelRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventModifyManagedByAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationEventSetCreatedByGroupRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEventSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEventSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationEventSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationFileCreateArgs = {
  input: NewFile;
  relationInput: NewFileRelations;
};


export type MutationFileDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationFileDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationFileModifyArgs = {
  deletion?: InputMaybe<ClearFileFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateFile>;
};


export type MutationFileModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationFileSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGroupCreateArgs = {
  input: NewGroup;
  relationInput: NewGroupRelations;
};


export type MutationGroupDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGroupDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationGroupModifyArgs = {
  deletion?: InputMaybe<ClearGroupFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateGroup>;
};


export type MutationGroupModifyBlocksOnlineAccountRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationGroupModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationGroupModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationGroupModifySupervisedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationGroupSetCategorizedByCategoryRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGroupSetCoversImpulseRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGroupSetImagedByImageRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGroupSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationGroupSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImageCreateArgs = {
  input: NewImage;
};


export type MutationImageDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationImageDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationImageModifyArgs = {
  deletion?: InputMaybe<ClearImageFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateImage>;
};


export type MutationImageSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImpulseCreateArgs = {
  input: NewImpulse;
  relationInput: NewImpulseRelations;
};


export type MutationImpulseDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationImpulseDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyArgs = {
  deletion?: InputMaybe<ClearImpulseFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateImpulse>;
};


export type MutationImpulseModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyCategorizedByChannelRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseModifyManagedByAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationImpulseSetCreatedByGroupRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImpulseSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImpulseSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationImpulseSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMembershipCreateArgs = {
  relationInput: NewMembershipRelations;
};


export type MutationMembershipDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMembershipDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMembershipInviteCreateArgs = {
  input: NewMembershipInvite;
  relationInput: NewMembershipInviteRelations;
};


export type MutationMembershipInviteDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMembershipInviteDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMembershipInviteModifyArgs = {
  deletion?: InputMaybe<ClearMembershipInviteFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateMembershipInvite>;
};


export type MutationMembershipRequestCreateArgs = {
  input: NewMembershipRequest;
  relationInput: NewMembershipRequestRelations;
};


export type MutationMembershipRequestDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationMembershipRequestDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationMembershipRequestModifyArgs = {
  deletion?: InputMaybe<ClearMembershipRequestFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateMembershipRequest>;
};


export type MutationMembershipSetDefinedByRoleRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationMyOnlineAccountModifyAttendsToEventRelationArgs = {
  operation: CollectionRelationMutation;
  target: Array<Scalars['ID']['input']>;
};


export type MutationMyOnlineAccountModifyBlocksGroupRelationArgs = {
  operation: CollectionRelationMutation;
  target: Array<Scalars['ID']['input']>;
};


export type MutationMyOnlineAccountModifyBlocksOnlineAccountRelationArgs = {
  operation: CollectionRelationMutation;
  target: Array<Scalars['ID']['input']>;
};


export type MutationMyOnlineAccountModifyFollowsContentRelationArgs = {
  operation: CollectionRelationMutation;
  target: Array<Scalars['ID']['input']>;
};


export type MutationMyOnlineAccountSetRepresentsPersonRelationArgs = {
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNetworkCategoryCreateArgs = {
  input: NewNetworkCategory;
  relationInput: NewNetworkCategoryRelations;
};


export type MutationNetworkCategoryDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationNetworkCategoryDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationNetworkCategoryModifyArgs = {
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateNetworkCategory>;
};


export type MutationNetworkCreateArgs = {
  input: NewNetwork;
};


export type MutationNetworkDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationNetworkDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationNetworkModifyArgs = {
  deletion?: InputMaybe<ClearNetworkFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateNetwork>;
};


export type MutationNetworkModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationNetworkModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationNetworkSetImagedByImageRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNetworkSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNetworkSetLogoedByImageRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationNetworkSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationOnlineAccountDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationOnlineAccountDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationOnlineAccountModifyAttendsToEventRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationOnlineAccountModifyBlocksGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationOnlineAccountModifyBlocksOnlineAccountRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationOnlineAccountSetRepresentsPersonRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPersonCreateArgs = {
  input: NewPerson;
};


export type MutationPersonDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPersonDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPersonModifyArgs = {
  deletion?: InputMaybe<ClearPersonFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdatePerson>;
};


export type MutationPersonModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationPersonModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationPersonSetImagedByImageRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPersonSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPersonSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPreferenceCreateArgs = {
  relationInput: NewPreferenceRelations;
};


export type MutationPreferenceDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationPreferenceDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationPreferenceSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationPreferenceSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRoleCreateArgs = {
  input: NewRole;
};


export type MutationRoleDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationRoleDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationRoleModifyArgs = {
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateRole>;
};


export type MutationTaskCreateArgs = {
  input: NewTask;
  relationInput: NewTaskRelations;
};


export type MutationTaskDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTaskDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationTaskModifyArgs = {
  deletion?: InputMaybe<ClearTaskFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateTask>;
};


export type MutationTaskModifyImplementedByOnlineAccountRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTaskModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicCreateArgs = {
  input: NewTopic;
  relationInput: NewTopicRelations;
};


export type MutationTopicDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationTopicDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyArgs = {
  deletion?: InputMaybe<ClearTopicFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateTopic>;
};


export type MutationTopicModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyCategorizedByChannelRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyCuratesContentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyLocatedByAddressScopeRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicModifyManagedByAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID']['input'];
  target: Array<Scalars['ID']['input']>;
};


export type MutationTopicSetCreatedByGroupRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationTopicSetLocatedByAddressRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationTopicSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationTopicSetOwnedByOnlineAccountRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationVideoMeetingCreateArgs = {
  input: NewVideoMeeting;
  relationInput: NewVideoMeetingRelations;
};


export type MutationVideoMeetingDeleteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationVideoMeetingDeleteBulkArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type MutationVideoMeetingModifyArgs = {
  deletion?: InputMaybe<ClearVideoMeetingFields>;
  id: Scalars['ID']['input'];
  modification?: InputMaybe<UpdateVideoMeeting>;
};


export type MutationVideoMeetingSetManagedByGroupRelationArgs = {
  source: Scalars['ID']['input'];
  target?: InputMaybe<Scalars['ID']['input']>;
};

/** MeRelationsFilter */
export type MyAddressScopesRelationsFilter = {
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyAddressesRelationsFilter = {
  locatesAgent?: InputMaybe<AgentsRelationFilter>;
  locatesContent?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyAgentsRelationsFilter = {
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  manages?: InputMaybe<ContentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyArticlesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdBy?: InputMaybe<GroupsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<AgentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyChannelsRelationsFilter = {
  categorizes?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCollabTextsRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCommentRatingsRelationsFilter = {
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<CommentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCommentsRelationsFilter = {
  commentsContent?: InputMaybe<ContentsRelationFilter>;
  commentsTask?: InputMaybe<TasksRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyContentRatingsRelationsFilter = {
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyContentsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdBy?: InputMaybe<GroupsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<AgentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyDocumentsRelationsFilter = {
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyEventsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdBy?: InputMaybe<GroupsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<AgentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyFilesRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyGroupsRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  blockedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  blocks?: InputMaybe<OnlineAccountsRelationFilter>;
  categorizedBy?: InputMaybe<CategoriesRelationFilter>;
  covers?: InputMaybe<ImpulsesRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesCollabText?: InputMaybe<CollabTextsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesFile?: InputMaybe<FilesRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  supervisedBy?: InputMaybe<NetworksRelationFilter>;
};

/** MeRelationsFilter */
export type MyImagesRelationsFilter = {
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyImpulsesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdBy?: InputMaybe<GroupsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<AgentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyMembershipInvitesRelationsFilter = {
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyMembershipRequestsRelationsFilter = {
  managedByGroup?: InputMaybe<GroupsRelationFilter>;
  managedByNetwork?: InputMaybe<NetworksRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyMembershipsRelationsFilter = {
  administersGroup?: InputMaybe<GroupsRelationFilter>;
  administersNetwork?: InputMaybe<NetworksRelationFilter>;
  definedBy?: InputMaybe<RolesRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyNetworkCategoriesRelationsFilter = {
  managedBy?: InputMaybe<NetworksRelationFilter>;
};

/** MeRelationsFilter */
export type MyNetworksRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  logoedBy?: InputMaybe<ImagesRelationFilter>;
  managesChannel?: InputMaybe<ChannelsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type MyOnlineAccount = Account & Thing & {
  __typename?: 'MyOnlineAccount';
  attendsTo: EventConnection;
  blockedByGroup: GroupConnection;
  blockedByOnlineAccount: OnlineAccountConnection;
  blocksGroup: GroupConnection;
  blocksOnlineAccount: OnlineAccountConnection;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  follows: ContentConnection;
  id: Scalars['ID']['output'];
  implements: TaskConnection;
  managesMembership: MembershipConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
  owns?: Maybe<Preference>;
  ownsAgent: AgentConnection;
  ownsComment: CommentConnection;
  ownsContent: ContentConnection;
  ownsDocument: DocumentConnection;
  ownsRating: RatingConnection;
  represents?: Maybe<Person>;
  updatedAt: Scalars['DateTime']['output'];
};


export type MyOnlineAccountAttendsToArgs = {
  filter?: InputMaybe<EventsFilter>;
  orderBy: OrderEventsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyEventsRelationsFilter>;
};


export type MyOnlineAccountBlockedByGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyGroupsRelationsFilter>;
};


export type MyOnlineAccountBlockedByOnlineAccountArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyOnlineAccountsRelationsFilter>;
};


export type MyOnlineAccountBlocksGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyGroupsRelationsFilter>;
};


export type MyOnlineAccountBlocksOnlineAccountArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyOnlineAccountsRelationsFilter>;
};


export type MyOnlineAccountFollowsArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type MyOnlineAccountImplementsArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyTasksRelationsFilter>;
};


export type MyOnlineAccountManagesMembershipArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyMembershipsRelationsFilter>;
};


export type MyOnlineAccountManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyMembershipInvitesRelationsFilter>;
};


export type MyOnlineAccountManagesMembershipRequestArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyMembershipRequestsRelationsFilter>;
};


export type MyOnlineAccountOwnsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyAgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type MyOnlineAccountOwnsCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyCommentsRelationsFilter>;
};


export type MyOnlineAccountOwnsContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type MyOnlineAccountOwnsDocumentArgs = {
  filter?: InputMaybe<DocumentsFilter>;
  orderBy: OrderDocumentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyDocumentsRelationsFilter>;
  type?: InputMaybe<Array<DocumentType>>;
};


export type MyOnlineAccountOwnsRatingArgs = {
  filter?: InputMaybe<RatingsFilter>;
  orderBy: OrderRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyRatingsRelationsFilter>;
  type?: InputMaybe<Array<RatingType>>;
};

/** MeRelationsFilter */
export type MyOnlineAccountsRelationsFilter = {
  blockedByGroup?: InputMaybe<GroupsRelationFilter>;
  blockedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  blocksGroup?: InputMaybe<GroupsRelationFilter>;
  blocksOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  follows?: InputMaybe<ContentsRelationFilter>;
  implements?: InputMaybe<TasksRelationFilter>;
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  ownsContent?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyPersonsRelationsFilter = {
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  manages?: InputMaybe<ContentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyRatingsRelationsFilter = {
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyTasksRelationsFilter = {
  commentedBy?: InputMaybe<CommentsRelationFilter>;
  implementedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyTopicsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdBy?: InputMaybe<GroupsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<AgentsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Network = Agent & Thing & {
  __typename?: 'Network';
  _permissions?: Maybe<Permissions>;
  _viewer: NetworkViewer;
  administeredBy: MembershipConnection;
  admittance: Admittance;
  contactInfo?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displaysFeed: FeedConnection;
  id: Scalars['ID']['output'];
  imagedByImage?: Maybe<Image>;
  info?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  logoedBy?: Maybe<Image>;
  managesChannel: ChannelConnection;
  managesContent: ContentConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
  managesNetworkCategory: NetworkCategoryConnection;
  name: Scalars['String']['output'];
  slug?: Maybe<Scalars['ID']['output']>;
  supervises: GroupConnection;
  text?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
};


export type NetworkAdministeredByArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkDisplaysFeedArgs = {
  filter?: InputMaybe<FeedsFilter>;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<FeedsRelationsFilter>;
  type?: InputMaybe<Array<FeedType>>;
};


export type NetworkKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type NetworkKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type NetworkLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkManagesChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type NetworkManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkManagesMembershipRequestArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkManagesNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type NetworkSupervisesArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

/** Possible filter fields when the NetworkCategory is queried */
export type NetworkCategoriesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the NetworkCategory is referenced */
export type NetworkCategoriesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  managedBy?: InputMaybe<NetworksRelationFilter>;
};

/** RelationsFilter */
export type NetworkCategoriesRelationsFilter = {
  managedBy?: InputMaybe<NetworksRelationFilter>;
};

export type NetworkCategory = Thing & {
  __typename?: 'NetworkCategory';
  _permissions?: Maybe<Permissions>;
  _viewer: NetworkCategoryViewer;
  categorizes: ContentConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  managedBy?: Maybe<Network>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type NetworkCategoryCategorizesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type NetworkCategoryConnection = Connection & {
  __typename?: 'NetworkCategoryConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<NetworkCategoryEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NetworkCategoryEdge = Edge & {
  __typename?: 'NetworkCategoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: NetworkCategory;
};

export type NetworkCategoryViewer = {
  __typename?: 'NetworkCategoryViewer';
  categorizes: ContentConnection;
};


export type NetworkCategoryViewerCategorizesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

export type NetworkConnection = Connection & {
  __typename?: 'NetworkConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<NetworkEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NetworkEdge = Edge & {
  __typename?: 'NetworkEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Network;
};

export type NetworkViewer = AgentViewer & {
  __typename?: 'NetworkViewer';
  administeredBy: MembershipConnection;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  managesContent: ContentConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
  supervises: GroupConnection;
};


export type NetworkViewerAdministeredByArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipsRelationsFilter>;
};


export type NetworkViewerKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type NetworkViewerKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type NetworkViewerManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type NetworkViewerManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipInvitesRelationsFilter>;
};


export type NetworkViewerManagesMembershipRequestArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipRequestsRelationsFilter>;
};


export type NetworkViewerSupervisesArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

/** Possible filter fields when the Network is queried */
export type NetworksFilter = {
  admittance_contains?: InputMaybe<Scalars['String']['input']>;
  admittance_ends_with?: InputMaybe<Scalars['String']['input']>;
  admittance_eq?: InputMaybe<Scalars['String']['input']>;
  admittance_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admittance_not_contains?: InputMaybe<Scalars['String']['input']>;
  admittance_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  admittance_not_eq?: InputMaybe<Scalars['String']['input']>;
  admittance_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  admittance_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  admittance_starts_with?: InputMaybe<Scalars['String']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Network is referenced */
export type NetworksRelationFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  logoedBy?: InputMaybe<ImagesRelationFilter>;
  managesChannel?: InputMaybe<ChannelsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
};

/** RelationsFilter */
export type NetworksRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  logoedBy?: InputMaybe<ImagesRelationFilter>;
  managesChannel?: InputMaybe<ChannelsRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
};

export type NewAddress = {
  addressCountry: Scalars['String']['input'];
  addressLocality: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type NewAddressScope = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type NewArticle = {
  intro?: InputMaybe<Scalars['String']['input']>;
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['ID']['input']>;
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type NewArticleRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByAgent: Array<Scalars['ID']['input']>;
};

export type NewCategory = {
  name: Scalars['String']['input'];
};

export type NewChannel = {
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['ID']['input']>;
};

export type NewChannelRelations = {
  managedBy: Array<Scalars['ID']['input']>;
};

export type NewCollabText = {
  info?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type NewCollabTextRelations = {
  managedBy: Array<Scalars['ID']['input']>;
};

export type NewComment = {
  text: Scalars['String']['input'];
};

export type NewCommentRatingRelations = {
  rates?: InputMaybe<Scalars['ID']['input']>;
};

export type NewCommentRelations = {
  commentsContent?: InputMaybe<Scalars['ID']['input']>;
  commentsTask?: InputMaybe<Scalars['ID']['input']>;
};

export type NewContentRatingRelations = {
  rates?: InputMaybe<Scalars['ID']['input']>;
};

export type NewEvent = {
  intro: Scalars['String']['input'];
  locationDescription?: InputMaybe<Scalars['String']['input']>;
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['ID']['input']>;
  startTime: Scalars['DateTime']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type NewEventRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByAgent: Array<Scalars['ID']['input']>;
};

export type NewFile = {
  info?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
};

export type NewFileRelations = {
  managedBy: Array<Scalars['ID']['input']>;
};

export type NewGroup = {
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['ID']['input']>;
  visibility: Visibility;
};

export type NewGroupRelations = {
  covers?: InputMaybe<Scalars['ID']['input']>;
};

export type NewImage = {
  info?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type NewImpulse = {
  intro: Scalars['String']['input'];
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type NewImpulseRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByAgent: Array<Scalars['ID']['input']>;
};

export type NewMembershipInvite = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type NewMembershipInviteRelations = {
  managedByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByNetwork?: InputMaybe<Scalars['ID']['input']>;
  managedByOnlineAccount?: InputMaybe<Scalars['ID']['input']>;
};

export type NewMembershipRelations = {
  administersGroup?: InputMaybe<Scalars['ID']['input']>;
  administersNetwork?: InputMaybe<Scalars['ID']['input']>;
  definedBy?: InputMaybe<Scalars['ID']['input']>;
  managedByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByNetwork?: InputMaybe<Scalars['ID']['input']>;
  managedByOnlineAccount?: InputMaybe<Scalars['ID']['input']>;
};

export type NewMembershipRequest = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type NewMembershipRequestRelations = {
  managedByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByNetwork?: InputMaybe<Scalars['ID']['input']>;
  managedByOnlineAccount?: InputMaybe<Scalars['ID']['input']>;
};

export type NewNetwork = {
  admittance: Admittance;
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['ID']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  visibility: Visibility;
};

export type NewNetworkCategory = {
  name: Scalars['String']['input'];
};

export type NewNetworkCategoryRelations = {
  managedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type NewPerson = {
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['ID']['input']>;
};

export type NewPreferenceRelations = {
  ownedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type NewRole = {
  name: Scalars['String']['input'];
};

export type NewTask = {
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  progressStatus: Scalars['String']['input'];
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type NewTaskRelations = {
  managedBy: Array<Scalars['ID']['input']>;
};

export type NewTopic = {
  intro?: InputMaybe<Scalars['String']['input']>;
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  slug?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type NewTopicRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']['input']>;
  managedByAgent: Array<Scalars['ID']['input']>;
};

export type NewVideoMeeting = {
  text?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type NewVideoMeetingRelations = {
  managedBy?: InputMaybe<Scalars['ID']['input']>;
};

export type OnlineAccount = Account & Thing & {
  __typename?: 'OnlineAccount';
  _permissions?: Maybe<Permissions>;
  attendsTo: EventConnection;
  blockedByGroup: GroupConnection;
  blockedByOnlineAccount: OnlineAccountConnection;
  blocksGroup: GroupConnection;
  blocksOnlineAccount: OnlineAccountConnection;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  implements: TaskConnection;
  managesMembership: MembershipConnection;
  managesMembershipInvite: MembershipInviteConnection;
  represents?: Maybe<Person>;
  updatedAt: Scalars['DateTime']['output'];
};


export type OnlineAccountAttendsToArgs = {
  filter?: InputMaybe<EventsFilter>;
  orderBy: OrderEventsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountBlockedByGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountBlockedByOnlineAccountArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountBlocksGroupArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountBlocksOnlineAccountArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountImplementsArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountManagesMembershipArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};


export type OnlineAccountManagesMembershipInviteArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
};

export type OnlineAccountConnection = Connection & {
  __typename?: 'OnlineAccountConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<OnlineAccountEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OnlineAccountEdge = Edge & {
  __typename?: 'OnlineAccountEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: OnlineAccount;
};

/** Possible filter fields when the OnlineAccount is queried */
export type OnlineAccountsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the OnlineAccount is referenced */
export type OnlineAccountsRelationFilter = {
  blockedByGroup?: InputMaybe<GroupsRelationFilter>;
  blockedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  blocksGroup?: InputMaybe<GroupsRelationFilter>;
  blocksOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  implements?: InputMaybe<TasksRelationFilter>;
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
};

/** RelationsFilter */
export type OnlineAccountsRelationsFilter = {
  blockedByGroup?: InputMaybe<GroupsRelationFilter>;
  blockedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  blocksGroup?: InputMaybe<GroupsRelationFilter>;
  blocksOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
  implements?: InputMaybe<TasksRelationFilter>;
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
};

export type OrderAccountsBy = {
  createdAt?: InputMaybe<OrderAccountsByCreatedAt>;
  updatedAt?: InputMaybe<OrderAccountsByUpdatedAt>;
};

export type OrderAccountsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAccountsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAddressScopesBy = {
  createdAt?: InputMaybe<OrderAddressScopesByCreatedAt>;
  updatedAt?: InputMaybe<OrderAddressScopesByUpdatedAt>;
};

export type OrderAddressScopesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAddressScopesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAddressesBy = {
  addressCountry?: InputMaybe<OrderAddressesByAddressCountry>;
  addressLocality?: InputMaybe<OrderAddressesByAddressLocality>;
  createdAt?: InputMaybe<OrderAddressesByCreatedAt>;
  name?: InputMaybe<OrderAddressesByName>;
  updatedAt?: InputMaybe<OrderAddressesByUpdatedAt>;
};

export type OrderAddressesByAddressCountry = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAddressesByAddressLocality = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAddressesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAddressesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAddressesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAgentsBy = {
  createdAt?: InputMaybe<OrderAgentsByCreatedAt>;
  name?: InputMaybe<OrderAgentsByName>;
  updatedAt?: InputMaybe<OrderAgentsByUpdatedAt>;
};

export type OrderAgentsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderAgentsByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderAgentsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderArticlesBy = {
  createdAt?: InputMaybe<OrderArticlesByCreatedAt>;
  title?: InputMaybe<OrderArticlesByTitle>;
  updatedAt?: InputMaybe<OrderArticlesByUpdatedAt>;
};

export type OrderArticlesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderArticlesByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderArticlesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCategoriesBy = {
  createdAt?: InputMaybe<OrderCategoriesByCreatedAt>;
  name?: InputMaybe<OrderCategoriesByName>;
  updatedAt?: InputMaybe<OrderCategoriesByUpdatedAt>;
};

export type OrderCategoriesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCategoriesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderCategoriesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderChannelsBy = {
  createdAt?: InputMaybe<OrderChannelsByCreatedAt>;
  updatedAt?: InputMaybe<OrderChannelsByUpdatedAt>;
};

export type OrderChannelsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderChannelsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCollabTextsBy = {
  createdAt?: InputMaybe<OrderCollabTextsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCollabTextsByUpdatedAt>;
};

export type OrderCollabTextsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCollabTextsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCommentRatingsBy = {
  createdAt?: InputMaybe<OrderCommentRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCommentRatingsByUpdatedAt>;
};

export type OrderCommentRatingsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCommentRatingsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCommentsBy = {
  createdAt?: InputMaybe<OrderCommentsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCommentsByUpdatedAt>;
};

export type OrderCommentsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderCommentsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderContentRatingsBy = {
  createdAt?: InputMaybe<OrderContentRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderContentRatingsByUpdatedAt>;
};

export type OrderContentRatingsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderContentRatingsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderContentsBy = {
  createdAt?: InputMaybe<OrderContentsByCreatedAt>;
  title?: InputMaybe<OrderContentsByTitle>;
  updatedAt?: InputMaybe<OrderContentsByUpdatedAt>;
};

export type OrderContentsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderContentsByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderContentsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderDocumentsBy = {
  createdAt?: InputMaybe<OrderDocumentsByCreatedAt>;
  name?: InputMaybe<OrderDocumentsByName>;
  updatedAt?: InputMaybe<OrderDocumentsByUpdatedAt>;
};

export type OrderDocumentsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderDocumentsByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderDocumentsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderEventsBy = {
  createdAt?: InputMaybe<OrderEventsByCreatedAt>;
  startTime?: InputMaybe<OrderEventsByStartTime>;
  title?: InputMaybe<OrderEventsByTitle>;
  updatedAt?: InputMaybe<OrderEventsByUpdatedAt>;
};

export type OrderEventsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderEventsByStartTime = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderEventsByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderEventsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderFilesBy = {
  createdAt?: InputMaybe<OrderFilesByCreatedAt>;
  name?: InputMaybe<OrderFilesByName>;
  path?: InputMaybe<OrderFilesByPath>;
  updatedAt?: InputMaybe<OrderFilesByUpdatedAt>;
};

export type OrderFilesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderFilesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFilesByPath = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderFilesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderGroupsBy = {
  createdAt?: InputMaybe<OrderGroupsByCreatedAt>;
  name?: InputMaybe<OrderGroupsByName>;
  updatedAt?: InputMaybe<OrderGroupsByUpdatedAt>;
};

export type OrderGroupsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderGroupsByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderGroupsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderImagesBy = {
  createdAt?: InputMaybe<OrderImagesByCreatedAt>;
  name?: InputMaybe<OrderImagesByName>;
  updatedAt?: InputMaybe<OrderImagesByUpdatedAt>;
};

export type OrderImagesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderImagesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderImagesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderImpulsesBy = {
  createdAt?: InputMaybe<OrderImpulsesByCreatedAt>;
  relevance?: InputMaybe<OrderImpulsesByRelevance>;
  title?: InputMaybe<OrderImpulsesByTitle>;
  updatedAt?: InputMaybe<OrderImpulsesByUpdatedAt>;
};

export type OrderImpulsesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderImpulsesByRelevance = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderImpulsesByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderImpulsesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipInvitesBy = {
  createdAt?: InputMaybe<OrderMembershipInvitesByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipInvitesByUpdatedAt>;
};

export type OrderMembershipInvitesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipInvitesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipRequestsBy = {
  createdAt?: InputMaybe<OrderMembershipRequestsByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipRequestsByUpdatedAt>;
};

export type OrderMembershipRequestsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipRequestsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipsBy = {
  createdAt?: InputMaybe<OrderMembershipsByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipsByUpdatedAt>;
};

export type OrderMembershipsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderMembershipsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderNetworkCategoriesBy = {
  createdAt?: InputMaybe<OrderNetworkCategoriesByCreatedAt>;
  name?: InputMaybe<OrderNetworkCategoriesByName>;
  updatedAt?: InputMaybe<OrderNetworkCategoriesByUpdatedAt>;
};

export type OrderNetworkCategoriesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderNetworkCategoriesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderNetworkCategoriesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderNetworksBy = {
  createdAt?: InputMaybe<OrderNetworksByCreatedAt>;
  name?: InputMaybe<OrderNetworksByName>;
  updatedAt?: InputMaybe<OrderNetworksByUpdatedAt>;
};

export type OrderNetworksByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderNetworksByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderNetworksByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderOnlineAccountsBy = {
  createdAt?: InputMaybe<OrderOnlineAccountsByCreatedAt>;
  updatedAt?: InputMaybe<OrderOnlineAccountsByUpdatedAt>;
};

export type OrderOnlineAccountsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderOnlineAccountsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderPersonsBy = {
  createdAt?: InputMaybe<OrderPersonsByCreatedAt>;
  name?: InputMaybe<OrderPersonsByName>;
  updatedAt?: InputMaybe<OrderPersonsByUpdatedAt>;
};

export type OrderPersonsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderPersonsByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderPersonsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderPreferencesBy = {
  createdAt?: InputMaybe<OrderPreferencesByCreatedAt>;
  updatedAt?: InputMaybe<OrderPreferencesByUpdatedAt>;
};

export type OrderPreferencesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderPreferencesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderRatingsBy = {
  createdAt?: InputMaybe<OrderRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderRatingsByUpdatedAt>;
};

export type OrderRatingsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderRatingsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderRolesBy = {
  createdAt?: InputMaybe<OrderRolesByCreatedAt>;
  name?: InputMaybe<OrderRolesByName>;
  updatedAt?: InputMaybe<OrderRolesByUpdatedAt>;
};

export type OrderRolesByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderRolesByName = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderRolesByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderTasksBy = {
  completed?: InputMaybe<OrderTasksByCompleted>;
  completedAt?: InputMaybe<OrderTasksByCompletedAt>;
  createdAt?: InputMaybe<OrderTasksByCreatedAt>;
  title?: InputMaybe<OrderTasksByTitle>;
  updatedAt?: InputMaybe<OrderTasksByUpdatedAt>;
};

export type OrderTasksByCompleted = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['Boolean']['input']>;
};

export type OrderTasksByCompletedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderTasksByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderTasksByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderTasksByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderThingsBy = {
  createdAt?: InputMaybe<OrderThingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderThingsByUpdatedAt>;
};

export type OrderThingsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderThingsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderTopicsBy = {
  createdAt?: InputMaybe<OrderTopicsByCreatedAt>;
  title?: InputMaybe<OrderTopicsByTitle>;
  updatedAt?: InputMaybe<OrderTopicsByUpdatedAt>;
};

export type OrderTopicsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderTopicsByTitle = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['String']['input']>;
};

export type OrderTopicsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderVideoMeetingsBy = {
  createdAt?: InputMaybe<OrderVideoMeetingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderVideoMeetingsByUpdatedAt>;
};

export type OrderVideoMeetingsByCreatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

export type OrderVideoMeetingsByUpdatedAt = {
  ascending: Scalars['Boolean']['input'];
  priority: Scalars['Int']['input'];
  threshold?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** Determines the next items to be returned */
export type Pagination = {
  /** Determines the start of the new page. It's not included itself. Can be empty for the first page. */
  afterCursor?: InputMaybe<Scalars['String']['input']>;
  /** The number of items to return after the the given cursor. Can be negative for a negative number. */
  first: Scalars['Int']['input'];
};

/** Get be set as pagination data for the next request to receive more results. */
export type PaginationData = {
  __typename?: 'PaginationData';
  /** Place ids not to be returned again. Can be taken from the recent results pageState. */
  excludePlaceIds: Array<Scalars['String']['output']>;
  /** The place ids of the representatives of a street fragment cluster */
  streetRepresentatives: Array<Scalars['String']['output']>;
  /** All street framgents from the recent result, including those which have been filtered out */
  streets: Array<PaginationMatch>;
};

/** Allows to query more results. */
export type PaginationDataInput = {
  /** Place ids not to be returned again. Can be taken from the recent results pageState. */
  excludePlaceIds: Array<Scalars['String']['input']>;
  /** The place ids of the representatives of a street fragment cluster */
  streetRepresentatives: Array<Scalars['String']['input']>;
  /** All street framgents from the recent result, including those which have been filtered out */
  streets: Array<PaginationMatchInput>;
};

export type PaginationMatch = {
  __typename?: 'PaginationMatch';
  box: BoundingBox;
  id: Scalars['String']['output'];
  placeId: Scalars['String']['output'];
};

export type PaginationMatchInput = {
  box: BoundingBoxInput;
  id: Scalars['String']['input'];
  placeId: Scalars['String']['input'];
};

export type Permissions = {
  __typename?: 'Permissions';
  count?: Maybe<Scalars['Boolean']['output']>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  find?: Maybe<Scalars['Boolean']['output']>;
  findOne?: Maybe<Scalars['Boolean']['output']>;
  update?: Maybe<Scalars['Boolean']['output']>;
};

export type Person = Agent & Thing & {
  __typename?: 'Person';
  _permissions?: Maybe<Permissions>;
  _viewer: PersonViewer;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  imagedByImage?: Maybe<Image>;
  info?: Maybe<Scalars['String']['output']>;
  intro?: Maybe<Scalars['String']['output']>;
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managesContent: ContentConnection;
  name: Scalars['String']['output'];
  representedBy?: Maybe<OnlineAccount>;
  slug?: Maybe<Scalars['ID']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};


export type PersonKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type PersonKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type PersonLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type PersonManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type PersonConnection = Connection & {
  __typename?: 'PersonConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonEdge = Edge & {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Person;
};

export type PersonViewer = AgentViewer & {
  __typename?: 'PersonViewer';
  knownByAgent: AgentConnection;
  knowsAgent: AgentConnection;
  managesContent: ContentConnection;
};


export type PersonViewerKnownByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type PersonViewerKnowsAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type PersonViewerManagesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

/** Possible filter fields when the Person is queried */
export type PersonsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Person is referenced */
export type PersonsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type PersonsRelationsFilter = {
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  knownByAgent?: InputMaybe<AgentsRelationFilter>;
  knowsAgent?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managesContent?: InputMaybe<ContentsRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Preference = Thing & {
  __typename?: 'Preference';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ownedBy?: Maybe<OnlineAccount>;
  updatedAt: Scalars['DateTime']['output'];
};

export type PreferenceConnection = Connection & {
  __typename?: 'PreferenceConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<PreferenceEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PreferenceEdge = Edge & {
  __typename?: 'PreferenceEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Preference;
};

/** Possible filter fields when the Preference is queried */
export type PreferencesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Preference is referenced */
export type PreferencesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Query = {
  __typename?: 'Query';
  /** Return the Account for the given id, if it exists */
  account?: Maybe<Account>;
  /** Queries all Accounts matching the given filter */
  accounts: AccountConnection;
  /** Return the Address for the given id, if it exists */
  address?: Maybe<Address>;
  addressMatch?: Maybe<AddressMatch>;
  /**
   * Returns possible matches for the given criteria.
   * NOTE: If you plan query more results/to paginate, you MUST query AddressMatches.nextPageParams with ALL nested
   * fields and put the complete received data into the criteria (AddressMatchesCriteria.matches) of the next query.
   */
  addressMatches?: Maybe<AddressMatches>;
  /** Return the AddressScope for the given id, if it exists */
  addressScope?: Maybe<AddressScope>;
  /** Queries all AddressScopes matching the given filters */
  addressScopes: AddressScopeConnection;
  /** Queries all AddressScopes matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  addressScopesBulk: Array<AddressScopeConnection>;
  /** Queries all Addresses matching the given filters */
  addresses: AddressConnection;
  /** Queries all Addresses matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  addressesBulk: Array<AddressConnection>;
  /** Return the Agent for the given id, if it exists */
  agent?: Maybe<Agent>;
  /** Queries all Agents matching the given filter */
  agents: AgentConnection;
  /** Return the Article for the given id, if it exists */
  article?: Maybe<Article>;
  /** Return the Article by its slug (in ID form, e.g. "S:some_slug_001:Article"), if it exists */
  articleBySlug?: Maybe<Article>;
  /** Queries all Articles matching the given filters */
  articles: ArticleConnection;
  /** Queries all Articles matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  articlesBulk: Array<ArticleConnection>;
  /** Queries all Categories matching the given filter. Filters regarding relations can be set via header. */
  categories: CategoryConnection;
  /** Queries all Categories matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  categoriesBulk: Array<CategoryConnection>;
  /** Return the Category for the given id, if it exists */
  category?: Maybe<Category>;
  /** Return the Channel for the given id, if it exists */
  channel?: Maybe<Channel>;
  /** Return the Channel by its slug (in ID form, e.g. "S:some_slug_001:Channel"), if it exists */
  channelBySlug?: Maybe<Channel>;
  /** Queries all Channels matching the given filters */
  channels: ChannelConnection;
  /** Queries all Channels matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  channelsBulk: Array<ChannelConnection>;
  /** Return the CollabText for the given id, if it exists */
  collabText?: Maybe<CollabText>;
  /** Queries all CollabTexts matching the given filters */
  collabTexts: CollabTextConnection;
  /** Queries all CollabTexts matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  collabTextsBulk: Array<CollabTextConnection>;
  /** Return the CommentRating for the given id, if it exists */
  commentRating?: Maybe<CommentRating>;
  /** Queries all CommentRatings matching the given filters */
  commentRatings: CommentRatingConnection;
  /** Queries all CommentRatings matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  commentRatingsBulk: Array<CommentRatingConnection>;
  /** Return the Content for the given id, if it exists */
  content?: Maybe<Content>;
  /** Return the ContentRating for the given id, if it exists */
  contentRating?: Maybe<ContentRating>;
  /** Queries all ContentRatings matching the given filters */
  contentRatings: ContentRatingConnection;
  /** Queries all ContentRatings matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  contentRatingsBulk: Array<ContentRatingConnection>;
  /** Queries all Contents matching the given filter */
  contents: ContentConnection;
  /** Return the Document for the given id, if it exists */
  document?: Maybe<Document>;
  /** Queries all Documents matching the given filter */
  documents: DocumentConnection;
  /** Return the Event for the given id, if it exists */
  event?: Maybe<Event>;
  /** Return the Event by its slug (in ID form, e.g. "S:some_slug_001:Event"), if it exists */
  eventBySlug?: Maybe<Event>;
  /** Queries all Events matching the given filters */
  events: EventConnection;
  /** Queries all Events matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  eventsBulk: Array<EventConnection>;
  /** Return the Feed for the given id, if it exists */
  feed?: Maybe<Feed>;
  /** Queries all Feeds matching the given filter. The order is inherent to the Feed aggregate. */
  feeds: FeedConnection;
  /** Return the File for the given id, if it exists */
  file?: Maybe<File>;
  /** Queries all Files matching the given filters */
  files: FileConnection;
  /** Queries all Files matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  filesBulk: Array<FileConnection>;
  /** Return the Group for the given id, if it exists */
  group?: Maybe<Group>;
  /** Return the Group by its slug (in ID form, e.g. "S:some_slug_001:Group"), if it exists */
  groupBySlug?: Maybe<Group>;
  /** Queries all Groups matching the given filters */
  groups: GroupConnection;
  /** Queries all Groups matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  groupsBulk: Array<GroupConnection>;
  /** Return the Image for the given id, if it exists */
  image?: Maybe<Image>;
  /** Queries all Images matching the given filter. Filters regarding relations can be set via header. */
  images: ImageConnection;
  /** Queries all Images matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  imagesBulk: Array<ImageConnection>;
  /** Return the Impulse for the given id, if it exists */
  impulse?: Maybe<Impulse>;
  /** Return the Impulse by its slug (in ID form, e.g. "S:some_slug_001:Impulse"), if it exists */
  impulseBySlug?: Maybe<Impulse>;
  /** Queries all Impulses matching the given filters */
  impulses: ImpulseConnection;
  /** Queries all Impulses matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  impulsesBulk: Array<ImpulseConnection>;
  /** Return the own OnlineAccount, if it exists */
  me: MyOnlineAccount;
  /** Return the Membership for the given id, if it exists */
  membership?: Maybe<Membership>;
  /** Return the MembershipInvite for the given id, if it exists */
  membershipInvite?: Maybe<MembershipInvite>;
  /** Queries all MembershipInvites matching the given filters */
  membershipInvites: MembershipInviteConnection;
  /** Queries all MembershipInvites matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  membershipInvitesBulk: Array<MembershipInviteConnection>;
  /** Return the MembershipRequest for the given id, if it exists */
  membershipRequest?: Maybe<MembershipRequest>;
  /** Queries all MembershipRequests matching the given filters */
  membershipRequests: MembershipRequestConnection;
  /** Queries all MembershipRequests matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  membershipRequestsBulk: Array<MembershipRequestConnection>;
  /** Queries all Memberships matching the given filters */
  memberships: MembershipConnection;
  /** Queries all Memberships matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  membershipsBulk: Array<MembershipConnection>;
  /** Return the Network for the given id, if it exists */
  network?: Maybe<Network>;
  /** Return the Network by its slug (in ID form, e.g. "S:some_slug_001:Network"), if it exists */
  networkBySlug?: Maybe<Network>;
  /** Queries all NetworkCategories matching the given filters */
  networkCategories: NetworkCategoryConnection;
  /** Queries all NetworkCategories matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  networkCategoriesBulk: Array<NetworkCategoryConnection>;
  /** Return the NetworkCategory for the given id, if it exists */
  networkCategory?: Maybe<NetworkCategory>;
  /** Queries all Networks matching the given filters */
  networks: NetworkConnection;
  /** Queries all Networks matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  networksBulk: Array<NetworkConnection>;
  /** Return the OnlineAccount for the given id, if it exists */
  onlineAccount?: Maybe<OnlineAccount>;
  /** Queries all OnlineAccounts matching the given filters */
  onlineAccounts: OnlineAccountConnection;
  /** Queries all OnlineAccounts matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  onlineAccountsBulk: Array<OnlineAccountConnection>;
  /** Return the Person for the given id, if it exists */
  person?: Maybe<Person>;
  /** Return the Person by its slug (in ID form, e.g. "S:some_slug_001:Person"), if it exists */
  personBySlug?: Maybe<Person>;
  /** Queries all Persons matching the given filters */
  persons: PersonConnection;
  /** Queries all Persons matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  personsBulk: Array<PersonConnection>;
  /** Return the Preference for the given id, if it exists */
  preference?: Maybe<Preference>;
  /** Queries all Preferences matching the given filter. Filters regarding relations can be set via header. */
  preferences: PreferenceConnection;
  /** Queries all Preferences matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  preferencesBulk: Array<PreferenceConnection>;
  /** Return the Rating for the given id, if it exists */
  rating?: Maybe<Rating>;
  /** Queries all Ratings matching the given filter */
  ratings: RatingConnection;
  /** Return the Role for the given id, if it exists */
  role?: Maybe<Role>;
  /** Queries all Roles matching the given filter. Filters regarding relations can be set via header. */
  roles: RoleConnection;
  /** Queries all Roles matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  rolesBulk: Array<RoleConnection>;
  /** Return the Task for the given id, if it exists */
  task?: Maybe<Task>;
  /** Queries all Tasks matching the given filters */
  tasks: TaskConnection;
  /** Queries all Tasks matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  tasksBulk: Array<TaskConnection>;
  /** Return the Thing for the given id, if it exists */
  thing?: Maybe<Thing>;
  /** Queries all Things matching the given filter */
  things: ThingConnection;
  /** Return the Topic for the given id, if it exists */
  topic?: Maybe<Topic>;
  /** Return the Topic by its slug (in ID form, e.g. "S:some_slug_001:Topic"), if it exists */
  topicBySlug?: Maybe<Topic>;
  /** Queries all Topics matching the given filters */
  topics: TopicConnection;
  /** Queries all Topics matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  topicsBulk: Array<TopicConnection>;
  /** Return the VideoMeeting for the given id, if it exists */
  videoMeeting?: Maybe<VideoMeeting>;
  /** Queries all VideoMeetings matching the given filter. Filters regarding relations can be set via header. */
  videoMeetings: VideoMeetingConnection;
  /** Queries all VideoMeetings matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  videoMeetingsBulk: Array<VideoMeetingConnection>;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountsFilter>;
  orderBy: OrderAccountsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AccountType>>;
};


export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressMatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressMatchesArgs = {
  criteria?: InputMaybe<AddressMatchesCriteria>;
};


export type QueryAddressScopeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAddressScopesArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AddressScopesRelationsFilter>;
};


export type QueryAddressScopesBulkArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryAddressesArgs = {
  filter?: InputMaybe<AddressesFilter>;
  orderBy: OrderAddressesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AddressesRelationsFilter>;
};


export type QueryAddressesBulkArgs = {
  filter?: InputMaybe<AddressesFilter>;
  orderBy: OrderAddressesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryAgentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAgentsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type QueryArticleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryArticlesArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  orderBy: OrderArticlesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ArticlesRelationsFilter>;
};


export type QueryArticlesBulkArgs = {
  filter?: InputMaybe<ArticlesFilter>;
  orderBy: OrderArticlesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCategoriesArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCategoriesBulkArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelArgs = {
  id: Scalars['ID']['input'];
};


export type QueryChannelBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryChannelsArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ChannelsRelationsFilter>;
};


export type QueryChannelsBulkArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCollabTextArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCollabTextsArgs = {
  filter?: InputMaybe<CollabTextsFilter>;
  orderBy: OrderCollabTextsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CollabTextsRelationsFilter>;
};


export type QueryCollabTextsBulkArgs = {
  filter?: InputMaybe<CollabTextsFilter>;
  orderBy: OrderCollabTextsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryCommentRatingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCommentRatingsArgs = {
  filter?: InputMaybe<CommentRatingsFilter>;
  orderBy: OrderCommentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentRatingsRelationsFilter>;
};


export type QueryCommentRatingsBulkArgs = {
  filter?: InputMaybe<CommentRatingsFilter>;
  orderBy: OrderCommentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryContentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentRatingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryContentRatingsArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};


export type QueryContentRatingsBulkArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryContentsArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type QueryDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDocumentsArgs = {
  filter?: InputMaybe<DocumentsFilter>;
  orderBy: OrderDocumentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<DocumentType>>;
};


export type QueryEventArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEventBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryEventsArgs = {
  filter?: InputMaybe<EventsFilter>;
  orderBy: OrderEventsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<EventsRelationsFilter>;
};


export type QueryEventsBulkArgs = {
  filter?: InputMaybe<EventsFilter>;
  orderBy: OrderEventsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryFeedArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeedsArgs = {
  filter?: InputMaybe<FeedsFilter>;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<FeedsRelationsFilter>;
  type?: InputMaybe<Array<FeedType>>;
};


export type QueryFileArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFilesArgs = {
  filter?: InputMaybe<FilesFilter>;
  orderBy: OrderFilesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<FilesRelationsFilter>;
};


export type QueryFilesBulkArgs = {
  filter?: InputMaybe<FilesFilter>;
  orderBy: OrderFilesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryGroupArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGroupBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};


export type QueryGroupsBulkArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImagesArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryImagesBulkArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryImpulseArgs = {
  id: Scalars['ID']['input'];
};


export type QueryImpulseBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryImpulsesArgs = {
  filter?: InputMaybe<ImpulsesFilter>;
  orderBy: OrderImpulsesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ImpulsesRelationsFilter>;
};


export type QueryImpulsesBulkArgs = {
  filter?: InputMaybe<ImpulsesFilter>;
  orderBy: OrderImpulsesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryMembershipArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembershipInviteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembershipInvitesArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipInvitesRelationsFilter>;
};


export type QueryMembershipInvitesBulkArgs = {
  filter?: InputMaybe<MembershipInvitesFilter>;
  orderBy: OrderMembershipInvitesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryMembershipRequestArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembershipRequestsArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipRequestsRelationsFilter>;
};


export type QueryMembershipRequestsBulkArgs = {
  filter?: InputMaybe<MembershipRequestsFilter>;
  orderBy: OrderMembershipRequestsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryMembershipsArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipsRelationsFilter>;
};


export type QueryMembershipsBulkArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryNetworkArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNetworkBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryNetworkCategoriesArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworkCategoriesRelationsFilter>;
};


export type QueryNetworkCategoriesBulkArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryNetworkCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNetworksArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type QueryNetworksBulkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryOnlineAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryOnlineAccountsArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<OnlineAccountsRelationsFilter>;
};


export type QueryOnlineAccountsBulkArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPersonBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryPersonsArgs = {
  filter?: InputMaybe<PersonsFilter>;
  orderBy: OrderPersonsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<PersonsRelationsFilter>;
};


export type QueryPersonsBulkArgs = {
  filter?: InputMaybe<PersonsFilter>;
  orderBy: OrderPersonsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryPreferenceArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPreferencesArgs = {
  filter?: InputMaybe<PreferencesFilter>;
  orderBy: OrderPreferencesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryPreferencesBulkArgs = {
  filter?: InputMaybe<PreferencesFilter>;
  orderBy: OrderPreferencesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryRatingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRatingsArgs = {
  filter?: InputMaybe<RatingsFilter>;
  orderBy: OrderRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<RatingsRelationsFilter>;
  type?: InputMaybe<Array<RatingType>>;
};


export type QueryRoleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRolesArgs = {
  filter?: InputMaybe<RolesFilter>;
  orderBy: OrderRolesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryRolesBulkArgs = {
  filter?: InputMaybe<RolesFilter>;
  orderBy: OrderRolesBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTasksArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TasksRelationsFilter>;
};


export type QueryTasksBulkArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryThingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryThingsArgs = {
  filter?: InputMaybe<ThingsFilter>;
  orderBy: OrderThingsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ThingType>>;
};


export type QueryTopicArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTopicBySlugArgs = {
  slug: Scalars['ID']['input'];
};


export type QueryTopicsArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type QueryTopicsBulkArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryVideoMeetingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVideoMeetingsArgs = {
  filter?: InputMaybe<VideoMeetingsFilter>;
  orderBy: OrderVideoMeetingsBy;
  pagination?: InputMaybe<Pagination>;
};


export type QueryVideoMeetingsBulkArgs = {
  filter?: InputMaybe<VideoMeetingsFilter>;
  orderBy: OrderVideoMeetingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type Rating = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  updatedAt: Scalars['DateTime']['output'];
};

export type RatingConnection = Connection & {
  __typename?: 'RatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<RatingEdge>;
  pageInfo: PageInfo;
};

export type RatingEdge = Edge & {
  __typename?: 'RatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Rating;
};

export enum RatingType {
  CommentRating = 'COMMENT_RATING',
  ContentRating = 'CONTENT_RATING'
}

export type RatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Rating is referenced */
export type RatingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type RatingsRelationsFilter = {
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** Wraps multiple Accesses */
export type Role = Thing & {
  __typename?: 'Role';
  _permissions?: Maybe<Permissions>;
  _viewer: RoleViewer;
  createdAt: Scalars['DateTime']['output'];
  defines: MembershipConnection;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


/** Wraps multiple Accesses */
export type RoleDefinesArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};

export type RoleConnection = Connection & {
  __typename?: 'RoleConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = Edge & {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Role;
};

export type RoleViewer = {
  __typename?: 'RoleViewer';
  defines: MembershipConnection;
};


export type RoleViewerDefinesArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MembershipsRelationsFilter>;
};

/** Possible filter fields when the Role is queried */
export type RolesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  name_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Role is referenced */
export type RolesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Task = Thing & {
  __typename?: 'Task';
  _permissions?: Maybe<Permissions>;
  _viewer: TaskViewer;
  commentedBy: CommentConnection;
  completed: Scalars['Boolean']['output'];
  completedAt?: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deadline?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  implementedBy: OnlineAccountConnection;
  managedBy: GroupConnection;
  progressStatus: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};


export type TaskCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type TaskImplementedByArgs = {
  filter?: InputMaybe<OnlineAccountsFilter>;
  orderBy: OrderOnlineAccountsBy;
  pagination?: InputMaybe<Pagination>;
};


export type TaskManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TaskConnection = Connection & {
  __typename?: 'TaskConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<TaskEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaskEdge = Edge & {
  __typename?: 'TaskEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Task;
};

export type TaskViewer = {
  __typename?: 'TaskViewer';
  commentedBy: CommentConnection;
  managedBy: GroupConnection;
};


export type TaskViewerCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type TaskViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

/** Possible filter fields when the Task is queried */
export type TasksFilter = {
  completedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  completedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  completedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  completed_eq?: InputMaybe<Scalars['Boolean']['input']>;
  completed_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  deadline_eq?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_gt?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_gte?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  deadline_lt?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_lte?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  deadline_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  progressStatus_contains?: InputMaybe<Scalars['String']['input']>;
  progressStatus_ends_with?: InputMaybe<Scalars['String']['input']>;
  progressStatus_eq?: InputMaybe<Scalars['String']['input']>;
  progressStatus_in?: InputMaybe<Array<Scalars['String']['input']>>;
  progressStatus_not_contains?: InputMaybe<Scalars['String']['input']>;
  progressStatus_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  progressStatus_not_eq?: InputMaybe<Scalars['String']['input']>;
  progressStatus_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  progressStatus_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  progressStatus_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Task is referenced */
export type TasksRelationFilter = {
  commentedBy?: InputMaybe<CommentsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  implementedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type TasksRelationsFilter = {
  commentedBy?: InputMaybe<CommentsRelationFilter>;
  implementedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Thing = {
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ThingConnection = Connection & {
  __typename?: 'ThingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<ThingEdge>;
  pageInfo: PageInfo;
};

export type ThingEdge = Edge & {
  __typename?: 'ThingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Thing;
};

export enum ThingType {
  Address = 'ADDRESS',
  AddressScope = 'ADDRESS_SCOPE',
  Article = 'ARTICLE',
  Category = 'CATEGORY',
  Channel = 'CHANNEL',
  CollabText = 'COLLAB_TEXT',
  Comment = 'COMMENT',
  CommentRating = 'COMMENT_RATING',
  ContentRating = 'CONTENT_RATING',
  Event = 'EVENT',
  File = 'FILE',
  Group = 'GROUP',
  Image = 'IMAGE',
  Impulse = 'IMPULSE',
  Membership = 'MEMBERSHIP',
  MembershipInvite = 'MEMBERSHIP_INVITE',
  MembershipRequest = 'MEMBERSHIP_REQUEST',
  Network = 'NETWORK',
  NetworkCategory = 'NETWORK_CATEGORY',
  OnlineAccount = 'ONLINE_ACCOUNT',
  Person = 'PERSON',
  Preference = 'PREFERENCE',
  Role = 'ROLE',
  Task = 'TASK',
  Topic = 'TOPIC',
  VideoMeeting = 'VIDEO_MEETING'
}

export type ThingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the Thing is referenced */
export type ThingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type Topic = Content & Thing & {
  __typename?: 'Topic';
  _permissions?: Maybe<Permissions>;
  _viewer: TopicViewer;
  categorizedByCategory: CategoryConnection;
  categorizedByChannel: ChannelConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedByComment: CommentConnection;
  createdAt: Scalars['DateTime']['output'];
  createdByGroup?: Maybe<Group>;
  curatedByTopic: TopicConnection;
  curates: ContentConnection;
  displayedByNetwork: NetworkConnection;
  id: Scalars['ID']['output'];
  imagedByImage: ImageConnection;
  intro?: Maybe<Scalars['String']['output']>;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managedByAgent: AgentConnection;
  ownedByOnlineAccount?: Maybe<OnlineAccount>;
  /** Affects the ordering in Feeds */
  publishedSince?: Maybe<Scalars['DateTime']['output']>;
  ratedByContentRating: ContentRatingConnection;
  slug?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']['output']>;
};


export type TopicCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicCategorizedByChannelArgs = {
  filter?: InputMaybe<ChannelsFilter>;
  orderBy: OrderChannelsBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicCuratesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};


export type TopicDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};


export type TopicRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicConnection = Connection & {
  __typename?: 'TopicConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<TopicEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TopicEdge = Edge & {
  __typename?: 'TopicEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: Topic;
};

export type TopicViewer = ContentViewer & {
  __typename?: 'TopicViewer';
  commentedByComment: CommentConnection;
  curatedByTopic: TopicConnection;
  curates: ContentConnection;
  displayedByNetwork: NetworkConnection;
  imagedByImage: ImageConnection;
  managedByAgent: AgentConnection;
  ratedByContentRating: ContentRatingConnection;
};


export type TopicViewerCommentedByCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};


export type TopicViewerCuratedByTopicArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};


export type TopicViewerCuratesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};


export type TopicViewerDisplayedByNetworkArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};


export type TopicViewerImagedByImageArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};


export type TopicViewerManagedByAgentArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};


export type TopicViewerRatedByContentRatingArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Topic is queried */
export type TopicsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  /** Affects the ordering in Feeds */
  publishedSince_lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  visibility_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_contains?: InputMaybe<Scalars['String']['input']>;
  visibility_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  visibility_not_eq?: InputMaybe<Scalars['String']['input']>;
  visibility_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  visibility_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  visibility_starts_with?: InputMaybe<Scalars['String']['input']>;
};

/** Possible filter fields when the Topic is referenced */
export type TopicsRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type TopicsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByChannel?: InputMaybe<ChannelsRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  curatedByTopic?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedByNetwork?: InputMaybe<NetworksRelationFilter>;
  imagedByImage?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedByAgent?: InputMaybe<AgentsRelationFilter>;
  ownedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type UpdateAddress = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAddressScope = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateArticle = {
  intro?: InputMaybe<Scalars['String']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategory = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCollabText = {
  info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateComment = {
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEvent = {
  intro?: InputMaybe<Scalars['String']['input']>;
  locationDescription?: InputMaybe<Scalars['String']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFile = {
  info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGroup = {
  chatChannel?: InputMaybe<Scalars['String']['input']>;
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateImage = {
  info?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateImpulse = {
  intro?: InputMaybe<Scalars['String']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  relevance?: InputMaybe<Scalars['Float']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMembershipInvite = {
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMembershipRequest = {
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNetwork = {
  contactInfo?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateNetworkCategory = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePerson = {
  info?: InputMaybe<Scalars['String']['input']>;
  intro?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRole = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTask = {
  completedAt?: InputMaybe<Scalars['DateTime']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  progressStatus?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTopic = {
  intro?: InputMaybe<Scalars['String']['input']>;
  /** Affects the ordering in Feeds */
  publishedSince?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateVideoMeeting = {
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type VideoMeeting = Thing & {
  __typename?: 'VideoMeeting';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  managedBy?: Maybe<Group>;
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type VideoMeetingConnection = Connection & {
  __typename?: 'VideoMeetingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int']['output'];
  /** A list of edges. */
  edges: Array<VideoMeetingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoMeetingEdge = Edge & {
  __typename?: 'VideoMeetingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']['output']>;
  /** The item at the end of the edge. */
  node: VideoMeeting;
};

/** Possible filter fields when the VideoMeeting is queried */
export type VideoMeetingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  id_eq?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_eq?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_eq?: InputMaybe<Scalars['String']['input']>;
  title_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  title_not_eq?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  title_starts_with?: InputMaybe<Scalars['String']['input']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']['input']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

/** Possible filter fields when the VideoMeeting is referenced */
export type VideoMeetingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Represents the visibility setting of a single entity - not to be confused with the visibility settings applying to the whole entity type. */
export enum Visibility {
  Network = 'NETWORK',
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  commentedByCursor?: InputMaybe<Scalars['String']['input']>;
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename: 'Article', title: string, intro?: string | null, text: string, id: string, createdAt: Date, updatedAt: Date, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> }, commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, _permissions?: { __typename: 'Permissions', update?: boolean | null } | null, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | null };

export type ArticleFragment = { __typename: 'Article', title: string, intro?: string | null, text: string, id: string, createdAt: Date, updatedAt: Date, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> }, commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, _permissions?: { __typename: 'Permissions', update?: boolean | null } | null, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentMeta_Article_Fragment = { __typename: 'Article', id: string, createdAt: Date, updatedAt: Date, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentMeta_Event_Fragment = { __typename: 'Event', id: string, createdAt: Date, updatedAt: Date, _viewer: { __typename: 'EventViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentMeta_Impulse_Fragment = { __typename: 'Impulse', id: string, createdAt: Date, updatedAt: Date, _viewer: { __typename: 'ImpulseViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentMeta_Topic_Fragment = { __typename: 'Topic', id: string, createdAt: Date, updatedAt: Date, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

export type ContentMetaFragment = ContentMeta_Article_Fragment | ContentMeta_Event_Fragment | ContentMeta_Impulse_Fragment | ContentMeta_Topic_Fragment;

type ContentState_Article_Fragment = { __typename: 'Article', _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentState_Event_Fragment = { __typename: 'Event', _viewer: { __typename: 'EventViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentState_Impulse_Fragment = { __typename: 'Impulse', _viewer: { __typename: 'ImpulseViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentState_Topic_Fragment = { __typename: 'Topic', _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

export type ContentStateFragment = ContentState_Article_Fragment | ContentState_Event_Fragment | ContentState_Impulse_Fragment | ContentState_Topic_Fragment;

type ContentAuthor_Article_Fragment = { __typename: 'Article', ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null };

type ContentAuthor_Event_Fragment = { __typename: 'Event', ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null };

type ContentAuthor_Impulse_Fragment = { __typename: 'Impulse', ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null };

type ContentAuthor_Topic_Fragment = { __typename: 'Topic', ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null };

export type ContentAuthorFragment = ContentAuthor_Article_Fragment | ContentAuthor_Event_Fragment | ContentAuthor_Impulse_Fragment | ContentAuthor_Topic_Fragment;

type AgentSignature_Group_Fragment = { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

type AgentSignature_Network_Fragment = { __typename: 'Network', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

type AgentSignature_Person_Fragment = { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

export type AgentSignatureFragment = AgentSignature_Group_Fragment | AgentSignature_Network_Fragment | AgentSignature_Person_Fragment;

type AgentAvatar_Group_Fragment = { __typename: 'Group', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

type AgentAvatar_Network_Fragment = { __typename: 'Network', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

type AgentAvatar_Person_Fragment = { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null };

export type AgentAvatarFragment = AgentAvatar_Group_Fragment | AgentAvatar_Network_Fragment | AgentAvatar_Person_Fragment;

type Document_File_Fragment = { __typename: 'File', id: string, resourceLocation?: string | null };

type Document_Image_Fragment = { __typename: 'Image', id: string, resourceLocation?: string | null };

export type DocumentFragment = Document_File_Fragment | Document_Image_Fragment;

type ContentImages_Article_Fragment = { __typename: 'Article', imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> } };

type ContentImages_Event_Fragment = { __typename: 'Event', imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> } };

type ContentImages_Impulse_Fragment = { __typename: 'Impulse', imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> } };

type ContentImages_Topic_Fragment = { __typename: 'Topic', imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> } };

export type ContentImagesFragment = ContentImages_Article_Fragment | ContentImages_Event_Fragment | ContentImages_Impulse_Fragment | ContentImages_Topic_Fragment;

type ContentCategories_Article_Fragment = { __typename: 'Article', categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> } };

type ContentCategories_Event_Fragment = { __typename: 'Event', categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> } };

type ContentCategories_Impulse_Fragment = { __typename: 'Impulse', categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> } };

type ContentCategories_Topic_Fragment = { __typename: 'Topic', categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> } };

export type ContentCategoriesFragment = ContentCategories_Article_Fragment | ContentCategories_Event_Fragment | ContentCategories_Impulse_Fragment | ContentCategories_Topic_Fragment;

export type CategoryFragment = { __typename: 'Category', id: string, name: string };

type ContentLocation_Article_Fragment = { __typename: 'Article', locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null };

type ContentLocation_Event_Fragment = { __typename: 'Event', locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null };

type ContentLocation_Impulse_Fragment = { __typename: 'Impulse', locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null };

type ContentLocation_Topic_Fragment = { __typename: 'Topic', locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null };

export type ContentLocationFragment = ContentLocation_Article_Fragment | ContentLocation_Event_Fragment | ContentLocation_Impulse_Fragment | ContentLocation_Topic_Fragment;

export type AddressFragment = { __typename: 'Address', id: string, name?: string | null };

type ContentPermissions_Article_Fragment = { __typename: 'Article', _permissions?: { __typename: 'Permissions', update?: boolean | null } | null };

type ContentPermissions_Event_Fragment = { __typename: 'Event', _permissions?: { __typename: 'Permissions', update?: boolean | null } | null };

type ContentPermissions_Impulse_Fragment = { __typename: 'Impulse', _permissions?: { __typename: 'Permissions', update?: boolean | null } | null };

type ContentPermissions_Topic_Fragment = { __typename: 'Topic', _permissions?: { __typename: 'Permissions', update?: boolean | null } | null };

export type ContentPermissionsFragment = ContentPermissions_Article_Fragment | ContentPermissions_Event_Fragment | ContentPermissions_Impulse_Fragment | ContentPermissions_Topic_Fragment;

type ContentSummary_Article_Fragment = { __typename: 'Article', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentSummary_Event_Fragment = { __typename: 'Event', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'EventViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentSummary_Impulse_Fragment = { __typename: 'Impulse', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ImpulseViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

type ContentSummary_Topic_Fragment = { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

export type ContentSummaryFragment = ContentSummary_Article_Fragment | ContentSummary_Event_Fragment | ContentSummary_Impulse_Fragment | ContentSummary_Topic_Fragment;

type ContentStats_Article_Fragment = { __typename: 'Article', ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number } };

type ContentStats_Event_Fragment = { __typename: 'Event', ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number } };

type ContentStats_Impulse_Fragment = { __typename: 'Impulse', ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number } };

type ContentStats_Topic_Fragment = { __typename: 'Topic', ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number } };

export type ContentStatsFragment = ContentStats_Article_Fragment | ContentStats_Event_Fragment | ContentStats_Impulse_Fragment | ContentStats_Topic_Fragment;

type ContentNetworks_Article_Fragment = { __typename: 'Article', managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> } };

type ContentNetworks_Event_Fragment = { __typename: 'Event', managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> } };

type ContentNetworks_Impulse_Fragment = { __typename: 'Impulse', managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> } };

type ContentNetworks_Topic_Fragment = { __typename: 'Topic', managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> } };

export type ContentNetworksFragment = ContentNetworks_Article_Fragment | ContentNetworks_Event_Fragment | ContentNetworks_Impulse_Fragment | ContentNetworks_Topic_Fragment;

export type MinimalNetworkInfoFragment = { __typename: 'Network', id: string, name: string };

type PageInfo_AccountConnection_Fragment = { __typename: 'AccountConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_AddressConnection_Fragment = { __typename: 'AddressConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_AddressScopeConnection_Fragment = { __typename: 'AddressScopeConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_AgentConnection_Fragment = { __typename: 'AgentConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ArticleConnection_Fragment = { __typename: 'ArticleConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_CategoryConnection_Fragment = { __typename: 'CategoryConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ChannelConnection_Fragment = { __typename: 'ChannelConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_CollabTextConnection_Fragment = { __typename: 'CollabTextConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_CommentConnection_Fragment = { __typename: 'CommentConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_CommentRatingConnection_Fragment = { __typename: 'CommentRatingConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ContentConnection_Fragment = { __typename: 'ContentConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ContentRatingConnection_Fragment = { __typename: 'ContentRatingConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_DocumentConnection_Fragment = { __typename: 'DocumentConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_EventConnection_Fragment = { __typename: 'EventConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_FeedConnection_Fragment = { __typename: 'FeedConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_FileConnection_Fragment = { __typename: 'FileConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_GroupConnection_Fragment = { __typename: 'GroupConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ImageConnection_Fragment = { __typename: 'ImageConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ImpulseConnection_Fragment = { __typename: 'ImpulseConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_MembershipConnection_Fragment = { __typename: 'MembershipConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_MembershipInviteConnection_Fragment = { __typename: 'MembershipInviteConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_MembershipRequestConnection_Fragment = { __typename: 'MembershipRequestConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_NetworkCategoryConnection_Fragment = { __typename: 'NetworkCategoryConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_NetworkConnection_Fragment = { __typename: 'NetworkConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_OnlineAccountConnection_Fragment = { __typename: 'OnlineAccountConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_PersonConnection_Fragment = { __typename: 'PersonConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_PreferenceConnection_Fragment = { __typename: 'PreferenceConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_RatingConnection_Fragment = { __typename: 'RatingConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_RoleConnection_Fragment = { __typename: 'RoleConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_TaskConnection_Fragment = { __typename: 'TaskConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_ThingConnection_Fragment = { __typename: 'ThingConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_TopicConnection_Fragment = { __typename: 'TopicConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

type PageInfo_VideoMeetingConnection_Fragment = { __typename: 'VideoMeetingConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } };

export type PageInfoFragment = PageInfo_AccountConnection_Fragment | PageInfo_AddressConnection_Fragment | PageInfo_AddressScopeConnection_Fragment | PageInfo_AgentConnection_Fragment | PageInfo_ArticleConnection_Fragment | PageInfo_CategoryConnection_Fragment | PageInfo_ChannelConnection_Fragment | PageInfo_CollabTextConnection_Fragment | PageInfo_CommentConnection_Fragment | PageInfo_CommentRatingConnection_Fragment | PageInfo_ContentConnection_Fragment | PageInfo_ContentRatingConnection_Fragment | PageInfo_DocumentConnection_Fragment | PageInfo_EventConnection_Fragment | PageInfo_FeedConnection_Fragment | PageInfo_FileConnection_Fragment | PageInfo_GroupConnection_Fragment | PageInfo_ImageConnection_Fragment | PageInfo_ImpulseConnection_Fragment | PageInfo_MembershipConnection_Fragment | PageInfo_MembershipInviteConnection_Fragment | PageInfo_MembershipRequestConnection_Fragment | PageInfo_NetworkCategoryConnection_Fragment | PageInfo_NetworkConnection_Fragment | PageInfo_OnlineAccountConnection_Fragment | PageInfo_PersonConnection_Fragment | PageInfo_PreferenceConnection_Fragment | PageInfo_RatingConnection_Fragment | PageInfo_RoleConnection_Fragment | PageInfo_TaskConnection_Fragment | PageInfo_ThingConnection_Fragment | PageInfo_TopicConnection_Fragment | PageInfo_VideoMeetingConnection_Fragment;

type ContentRatings_Article_Fragment = { __typename: 'Article', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> } };

type ContentRatings_Event_Fragment = { __typename: 'Event', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> } };

type ContentRatings_Impulse_Fragment = { __typename: 'Impulse', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> } };

type ContentRatings_Topic_Fragment = { __typename: 'Topic', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number, edges: Array<{ __typename: 'ContentRatingEdge', node: { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }> } };

export type ContentRatingsFragment = ContentRatings_Article_Fragment | ContentRatings_Event_Fragment | ContentRatings_Impulse_Fragment | ContentRatings_Topic_Fragment;

type Rating_CommentRating_Fragment = { __typename: 'CommentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null };

type Rating_ContentRating_Fragment = { __typename: 'ContentRating', id: string, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null };

export type RatingFragment = Rating_CommentRating_Fragment | Rating_ContentRating_Fragment;

type ContentComments_Article_Fragment = { __typename: 'Article', commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

type ContentComments_Event_Fragment = { __typename: 'Event', commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

type ContentComments_Impulse_Fragment = { __typename: 'Impulse', commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

type ContentComments_Topic_Fragment = { __typename: 'Topic', commentedByComment: { __typename: 'CommentConnection', count: number, edges: Array<{ __typename: 'CommentEdge', node: { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } } };

export type ContentCommentsFragment = ContentComments_Article_Fragment | ContentComments_Event_Fragment | ContentComments_Impulse_Fragment | ContentComments_Topic_Fragment;

export type CommentFragment = { __typename: 'Comment', id: string, createdAt: Date, text: string, ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null };

export type CommentAuthorFragment = { __typename: 'Comment', ownedBy?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null };

type ContentTopics_Article_Fragment = { __typename: 'Article', curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> } };

type ContentTopics_Event_Fragment = { __typename: 'Event', curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> } };

type ContentTopics_Impulse_Fragment = { __typename: 'Impulse', curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> } };

type ContentTopics_Topic_Fragment = { __typename: 'Topic', curatedByTopic: { __typename: 'TopicConnection', edges: Array<{ __typename: 'TopicEdge', node: { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> } };

export type ContentTopicsFragment = ContentTopics_Article_Fragment | ContentTopics_Event_Fragment | ContentTopics_Impulse_Fragment | ContentTopics_Topic_Fragment;

export type TopicQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type TopicQuery = { __typename?: 'Query', topic?: { __typename: 'Topic', title: string, intro?: string | null, id: string, createdAt: Date, updatedAt: Date, curates: { __typename: 'ContentConnection', edges: Array<{ __typename: 'ContentEdge', node: { __typename: 'Article', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Event', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'EventViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Impulse', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ImpulseViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, createdByGroup?: { __typename: 'Group', intro?: string | null, info?: string | null, id: string, name: string, creates: { __typename: 'ContentConnection', edges: Array<{ __typename: 'ContentEdge', node: { __typename: 'Article' } | { __typename: 'Event' } | { __typename: 'Impulse' } | { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _permissions?: { __typename: 'Permissions', update?: boolean | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | null };

export type TopicFragment = { __typename: 'Topic', title: string, intro?: string | null, id: string, createdAt: Date, updatedAt: Date, curates: { __typename: 'ContentConnection', edges: Array<{ __typename: 'ContentEdge', node: { __typename: 'Article', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ArticleViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Event', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'EventViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Impulse', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'ImpulseViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } | { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, createdByGroup?: { __typename: 'Group', intro?: string | null, info?: string | null, id: string, name: string, creates: { __typename: 'ContentConnection', edges: Array<{ __typename: 'ContentEdge', node: { __typename: 'Article' } | { __typename: 'Event' } | { __typename: 'Impulse' } | { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } } }> }, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _permissions?: { __typename: 'Permissions', update?: boolean | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

export type TopicTeaserFragment = { __typename: 'Topic', title: string, warning?: string | null, visibility: Visibility, id: string, createdAt: Date, updatedAt: Date, displayedByNetwork: { __typename: 'NetworkConnection', edges: Array<{ __typename: 'NetworkEdge', node: { __typename: 'Network', id: string, name: string } }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | null, hasNextPage: boolean } }, imagedByImage: { __typename: 'ImageConnection', edges: Array<{ __typename: 'ImageEdge', node: { __typename: 'Image', id: string, resourceLocation?: string | null } }> }, ownedByOnlineAccount?: { __typename: 'OnlineAccount', represents?: { __typename: 'Person', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null } | null, createdByGroup?: { __typename: 'Group', info?: string | null, id: string, name: string, imagedByImage?: { __typename: 'Image', id: string, resourceLocation?: string | null } | null } | null, ratingStats: { __typename: 'ContentRatingConnection', count: number }, commentStats: { __typename: 'CommentConnection', count: number }, managedByAgent: { __typename: 'AgentConnection', edges: Array<{ __typename: 'AgentEdge', node: { __typename: 'Group', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Network', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } | { __typename: 'Person', id: string, name: string, slug?: string | null, imagedByImage?: { __typename: 'Image', id: string, name: string } | null } }> }, categorizedByCategory: { __typename: 'CategoryConnection', edges: Array<{ __typename: 'CategoryEdge', node: { __typename: 'Category', id: string, name: string } }> }, locatedByAddress?: { __typename: 'Address', id: string, name?: string | null } | null, _viewer: { __typename: 'TopicViewer', ratedByContentRating: { __typename: 'ContentRatingConnection', count: number }, commentedByComment: { __typename: 'CommentConnection', count: number } } };

export const ContentStateFragmentDoc = gql`
    fragment ContentState on Content {
  _viewer {
    ratedByContentRating(orderBy: {createdAt: {ascending: false, priority: 1}}) {
      count
      __typename
    }
    commentedByComment(orderBy: {createdAt: {ascending: false, priority: 1}}) {
      count
      __typename
    }
    __typename
  }
  __typename
}
    `;
export const ContentMetaFragmentDoc = gql`
    fragment ContentMeta on Content {
  ...ContentState
  __typename
  id
  createdAt
  updatedAt
}
    ${ContentStateFragmentDoc}`;
export const DocumentFragmentDoc = gql`
    fragment Document on Document {
  id
  resourceLocation
  __typename
}
    `;
export const AgentAvatarFragmentDoc = gql`
    fragment AgentAvatar on Agent {
  __typename
  id
  name
  imagedByImage {
    ...Document
    __typename
  }
}
    ${DocumentFragmentDoc}`;
export const AgentSignatureFragmentDoc = gql`
    fragment AgentSignature on Agent {
  ...AgentAvatar
  info
  __typename
}
    ${AgentAvatarFragmentDoc}`;
export const ContentAuthorFragmentDoc = gql`
    fragment ContentAuthor on Content {
  ownedByOnlineAccount {
    represents {
      ...AgentSignature
      __typename
    }
    __typename
  }
  createdByGroup {
    ...AgentSignature
    __typename
  }
  __typename
}
    ${AgentSignatureFragmentDoc}`;
export const ContentImagesFragmentDoc = gql`
    fragment ContentImages on Content {
  imagedByImage(orderBy: {createdAt: {ascending: true, priority: 1}}) {
    edges {
      node {
        ...Document
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    ${DocumentFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on Category {
  id
  name
  __typename
}
    `;
export const ContentCategoriesFragmentDoc = gql`
    fragment ContentCategories on Content {
  categorizedByCategory(orderBy: {name: {ascending: true, priority: 1}}) {
    edges {
      node {
        ...Category
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    ${CategoryFragmentDoc}`;
export const AddressFragmentDoc = gql`
    fragment Address on Address {
  id
  name
  __typename
}
    `;
export const ContentLocationFragmentDoc = gql`
    fragment ContentLocation on Content {
  locatedByAddress {
    ...Address
    __typename
  }
  __typename
}
    ${AddressFragmentDoc}`;
export const RatingFragmentDoc = gql`
    fragment Rating on Rating {
  id
  ownedByOnlineAccount {
    represents {
      ...AgentAvatar
      __typename
    }
    __typename
  }
  __typename
}
    ${AgentAvatarFragmentDoc}`;
export const ContentRatingsFragmentDoc = gql`
    fragment ContentRatings on Content {
  ratedByContentRating(orderBy: {createdAt: {ascending: false, priority: 1}}) {
    count
    edges {
      node {
        ...Rating
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    ${RatingFragmentDoc}`;
export const CommentAuthorFragmentDoc = gql`
    fragment CommentAuthor on Comment {
  ownedBy {
    represents {
      ...AgentSignature
      __typename
    }
    __typename
  }
  __typename
}
    ${AgentSignatureFragmentDoc}`;
export const CommentFragmentDoc = gql`
    fragment Comment on Comment {
  ...CommentAuthor
  id
  createdAt
  text
  __typename
}
    ${CommentAuthorFragmentDoc}`;
export const ContentCommentsFragmentDoc = gql`
    fragment ContentComments on Content {
  commentedByComment(
    orderBy: {createdAt: {ascending: false, priority: 1}}
    pagination: {first: 4, afterCursor: $commentedByCursor}
  ) {
    count
    edges {
      node {
        ...Comment
        __typename
      }
      __typename
    }
    pageInfo {
      endCursor
      hasNextPage
      __typename
    }
    __typename
  }
  __typename
}
    ${CommentFragmentDoc}`;
export const ContentStatsFragmentDoc = gql`
    fragment ContentStats on Content {
  ratingStats: ratedByContentRating(
    orderBy: {createdAt: {ascending: false, priority: 1}}
  ) {
    count
    __typename
  }
  commentStats: commentedByComment(
    orderBy: {createdAt: {ascending: false, priority: 1}}
  ) {
    count
    __typename
  }
  __typename
}
    `;
export const ContentNetworksFragmentDoc = gql`
    fragment ContentNetworks on Content {
  managedByAgent(orderBy: {createdAt: {ascending: true, priority: 1}}) {
    edges {
      node {
        id
        name
        slug
        imagedByImage {
          id
          name
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    `;
export const MinimalNetworkInfoFragmentDoc = gql`
    fragment MinimalNetworkInfo on Network {
  id
  name
  __typename
}
    `;
export const PageInfoFragmentDoc = gql`
    fragment PageInfo on Connection {
  pageInfo {
    endCursor
    hasNextPage
    __typename
  }
  __typename
}
    `;
export const ContentSummaryFragmentDoc = gql`
    fragment ContentSummary on Content {
  ...ContentMeta
  ...ContentImages
  ...ContentAuthor
  ...ContentStats
  ...ContentNetworks
  ...ContentCategories
  ...ContentLocation
  title
  warning
  visibility
  displayedByNetwork(orderBy: {createdAt: {ascending: false, priority: 1}}) {
    edges {
      node {
        ...MinimalNetworkInfo
        __typename
      }
      __typename
    }
    ...PageInfo
    __typename
  }
  __typename
}
    ${ContentMetaFragmentDoc}
${ContentImagesFragmentDoc}
${ContentAuthorFragmentDoc}
${ContentStatsFragmentDoc}
${ContentNetworksFragmentDoc}
${ContentCategoriesFragmentDoc}
${ContentLocationFragmentDoc}
${MinimalNetworkInfoFragmentDoc}
${PageInfoFragmentDoc}`;
export const TopicTeaserFragmentDoc = gql`
    fragment TopicTeaser on Topic {
  ...ContentSummary
  __typename
}
    ${ContentSummaryFragmentDoc}`;
export const ContentTopicsFragmentDoc = gql`
    fragment ContentTopics on Content {
  curatedByTopic(orderBy: {updatedAt: {ascending: false, priority: 1}}) {
    edges {
      node {
        ...TopicTeaser
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    ${TopicTeaserFragmentDoc}`;
export const ContentPermissionsFragmentDoc = gql`
    fragment ContentPermissions on Content {
  _permissions {
    update
    __typename
  }
  __typename
}
    `;
export const ArticleFragmentDoc = gql`
    fragment Article on Article {
  ...ContentMeta
  ...ContentAuthor
  ...ContentImages
  ...ContentCategories
  ...ContentLocation
  ...ContentRatings
  ...ContentComments
  ...ContentTopics
  ...ContentPermissions
  title
  intro
  text
  __typename
}
    ${ContentMetaFragmentDoc}
${ContentAuthorFragmentDoc}
${ContentImagesFragmentDoc}
${ContentCategoriesFragmentDoc}
${ContentLocationFragmentDoc}
${ContentRatingsFragmentDoc}
${ContentCommentsFragmentDoc}
${ContentTopicsFragmentDoc}
${ContentPermissionsFragmentDoc}`;
export const TopicFragmentDoc = gql`
    fragment Topic on Topic {
  ...ContentMeta
  ...ContentAuthor
  ...ContentImages
  ...ContentCategories
  ...ContentLocation
  ...ContentPermissions
  title
  intro
  curates(orderBy: {createdAt: {ascending: false, priority: 1}}) {
    edges {
      node {
        ...ContentSummary
        __typename
      }
      __typename
    }
    __typename
  }
  createdByGroup {
    ...AgentSignature
    intro
    creates(type: [TOPIC], orderBy: {updatedAt: {ascending: false, priority: 1}}) {
      edges {
        node {
          ...TopicTeaser
          __typename
        }
        __typename
      }
      __typename
    }
    __typename
  }
  __typename
}
    ${ContentMetaFragmentDoc}
${ContentAuthorFragmentDoc}
${ContentImagesFragmentDoc}
${ContentCategoriesFragmentDoc}
${ContentLocationFragmentDoc}
${ContentPermissionsFragmentDoc}
${ContentSummaryFragmentDoc}
${AgentSignatureFragmentDoc}
${TopicTeaserFragmentDoc}`;
export const ArticleDocument = gql`
    query Article($id: ID!, $commentedByCursor: String) {
  article(id: $id) {
    ...Article
    __typename
  }
}
    ${ArticleFragmentDoc}`;

/**
 * __useArticleQuery__
 *
 * To run a query within a React component, call `useArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *      commentedByCursor: // value for 'commentedByCursor'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables> & ({ variables: ArticleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
      }
export function useArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export function useArticleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
        }
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleSuspenseQueryHookResult = ReturnType<typeof useArticleSuspenseQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const TopicDocument = gql`
    query Topic($id: ID!) {
  topic(id: $id) {
    ...Topic
    __typename
  }
}
    ${TopicFragmentDoc}`;

/**
 * __useTopicQuery__
 *
 * To run a query within a React component, call `useTopicQuery` and pass it any options that fit your needs.
 * When your component renders, `useTopicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTopicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTopicQuery(baseOptions: Apollo.QueryHookOptions<TopicQuery, TopicQueryVariables> & ({ variables: TopicQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TopicQuery, TopicQueryVariables>(TopicDocument, options);
      }
export function useTopicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TopicQuery, TopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TopicQuery, TopicQueryVariables>(TopicDocument, options);
        }
export function useTopicSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TopicQuery, TopicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TopicQuery, TopicQueryVariables>(TopicDocument, options);
        }
export type TopicQueryHookResult = ReturnType<typeof useTopicQuery>;
export type TopicLazyQueryHookResult = ReturnType<typeof useTopicLazyQuery>;
export type TopicSuspenseQueryHookResult = ReturnType<typeof useTopicSuspenseQuery>;
export type TopicQueryResult = Apollo.QueryResult<TopicQuery, TopicQueryVariables>;