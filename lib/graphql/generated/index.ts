import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** Date and time in RFC3339, e.g. 2006-01-02T15:04:05Z or 2006-01-02T15:02:05+02:00 */
  DateTime: Date;
  Duration: any;
  Time: any;
  URL: any;
};

export type Account = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type AccountConnection = Connection & {
  __typename?: 'AccountConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<AccountEdge>;
  pageInfo: PageInfo;
};

export type AccountEdge = Edge & {
  __typename?: 'AccountEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Account;
};

export enum AccountType {
  OnlineAccount = 'ONLINE_ACCOUNT',
}

export type AccountsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Account is referenced */
export type AccountsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Address = Thing & {
  __typename?: 'Address';
  _permissions?: Maybe<Permissions>;
  _viewer: AddressViewer;
  addressCountry: Scalars['String'];
  addressLocality: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<AddressEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AddressEdge = Edge & {
  __typename?: 'AddressEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Address;
};

export type AddressMatch = {
  __typename?: 'AddressMatch';
  addressCategory: Scalars['String'];
  addressType: AddressType;
  displayName: Scalars['String'];
  id: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  placeRank: Scalars['Int'];
};

export type AddressMatches = {
  __typename?: 'AddressMatches';
  matches: Array<AddressMatch>;
  nextPageParams: PaginationData;
};

export type AddressMatchesCriteria = {
  /** Country to filter for, e.g. ["de", "gb"] */
  countryCodes?: InputMaybe<Array<Scalars['String']>>;
  /** Maximum number of results */
  limit?: InputMaybe<Scalars['Int']>;
  /** Allows to query new results. */
  nextPageParams?: InputMaybe<PaginationDataInput>;
  /** The term address matches shall be found for */
  searchString?: InputMaybe<Scalars['String']>;
};

export type AddressScope = Thing & {
  __typename?: 'AddressScope';
  _permissions?: Maybe<Permissions>;
  _viewer: AddressScopeViewer;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  locatesAgent: AgentConnection;
  locatesContent: ContentConnection;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<AddressScopeEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type AddressScopeEdge = Edge & {
  __typename?: 'AddressScopeEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the AddressScope is referenced */
export type AddressScopesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  Village = 'VILLAGE',
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
  addressCountry_contains?: InputMaybe<Scalars['String']>;
  addressCountry_eq?: InputMaybe<Scalars['String']>;
  addressCountry_in?: InputMaybe<Array<Scalars['String']>>;
  addressCountry_not_contains?: InputMaybe<Scalars['String']>;
  addressCountry_not_eq?: InputMaybe<Scalars['String']>;
  addressCountry_not_in?: InputMaybe<Array<Scalars['String']>>;
  addressLocality_contains?: InputMaybe<Scalars['String']>;
  addressLocality_eq?: InputMaybe<Scalars['String']>;
  addressLocality_in?: InputMaybe<Array<Scalars['String']>>;
  addressLocality_not_contains?: InputMaybe<Scalars['String']>;
  addressLocality_not_eq?: InputMaybe<Scalars['String']>;
  addressLocality_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Address is referenced */
export type AddressesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  Open = 'OPEN',
}

export type Agent = {
  _permissions?: Maybe<Permissions>;
  _viewer: AgentViewer;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  imagedBy?: Maybe<Image>;
  info?: Maybe<Scalars['String']>;
  intro?: Maybe<Scalars['String']>;
  knownBy: AgentConnection;
  knows: AgentConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AgentKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};

export type AgentKnowsArgs = {
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

export type AgentConnection = Connection & {
  __typename?: 'AgentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<AgentEdge>;
  pageInfo: PageInfo;
};

export type AgentEdge = Edge & {
  __typename?: 'AgentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Agent;
};

export enum AgentType {
  Group = 'GROUP',
  Network = 'NETWORK',
  Person = 'PERSON',
}

export type AgentViewer = {
  knownBy: AgentConnection;
  knows: AgentConnection;
};

export type AgentViewerKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type AgentViewerKnowsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type AgentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Agent is referenced */
export type AgentsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
};

/** RelationsFilter */
export type AgentsRelationsFilter = {
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
};

export type Article = Content &
  Thing & {
    __typename?: 'Article';
    _permissions?: Maybe<Permissions>;
    _viewer: ArticleViewer;
    categorizedByCategory: CategoryConnection;
    categorizedByNetworkCategory: NetworkCategoryConnection;
    commentedBy: CommentConnection;
    createdAt: Scalars['DateTime'];
    createdByGroup?: Maybe<Group>;
    createdByPerson?: Maybe<Person>;
    curatedBy: TopicConnection;
    displayedBy: NetworkConnection;
    id: Scalars['ID'];
    imagedBy: ImageConnection;
    intro?: Maybe<Scalars['String']>;
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    managedBy: GroupConnection;
    ratedBy: ContentRatingConnection;
    text: Scalars['String'];
    title: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    visibility: Visibility;
    warning?: Maybe<Scalars['String']>;
  };

export type ArticleCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleConnection = Connection & {
  __typename?: 'ArticleConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ArticleEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ArticleEdge = Edge & {
  __typename?: 'ArticleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Article;
};

export type ArticleViewer = ContentViewer & {
  __typename?: 'ArticleViewer';
  commentedBy: CommentConnection;
  curatedBy: TopicConnection;
  displayedBy: NetworkConnection;
  imagedBy: ImageConnection;
  managedBy: GroupConnection;
  ratedBy: ContentRatingConnection;
};

export type ArticleViewerCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};

export type ArticleViewerCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};

export type ArticleViewerDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

export type ArticleViewerImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ArticleViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

export type ArticleViewerRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Article is queried */
export type ArticlesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Article is referenced */
export type ArticlesRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type ArticlesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

export type BoundingBox = {
  __typename?: 'BoundingBox';
  x1: Scalars['Float'];
  x2: Scalars['Float'];
  y1: Scalars['Float'];
  y2: Scalars['Float'];
};

export type BoundingBoxInput = {
  x1: Scalars['Float'];
  x2: Scalars['Float'];
  y1: Scalars['Float'];
  y2: Scalars['Float'];
};

/** Possible filter fields when the Category is queried */
export type CategoriesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Category is referenced */
export type CategoriesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Category = Thing & {
  __typename?: 'Category';
  _permissions?: Maybe<Permissions>;
  _viewer: CategoryViewer;
  categorizesContent: ContentConnection;
  categorizesGroup: GroupConnection;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<CategoryEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CategoryEdge = Edge & {
  __typename?: 'CategoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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

export type ClearArticleFields = {
  intro?: InputMaybe<Scalars['Boolean']>;
  warning?: InputMaybe<Scalars['Boolean']>;
};

export type ClearCollabTextFields = {
  info?: InputMaybe<Scalars['Boolean']>;
};

export type ClearFileFields = {
  info?: InputMaybe<Scalars['Boolean']>;
};

export type ClearGroupFields = {
  contactInfo?: InputMaybe<Scalars['Boolean']>;
  info?: InputMaybe<Scalars['Boolean']>;
  intro?: InputMaybe<Scalars['Boolean']>;
};

export type ClearImageFields = {
  info?: InputMaybe<Scalars['Boolean']>;
};

export type ClearImpulseFields = {
  warning?: InputMaybe<Scalars['Boolean']>;
};

export type ClearMembershipInviteFields = {
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']>;
};

export type ClearMembershipRequestFields = {
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']>;
};

export type ClearNetworkFields = {
  contactInfo?: InputMaybe<Scalars['Boolean']>;
  info?: InputMaybe<Scalars['Boolean']>;
  intro?: InputMaybe<Scalars['Boolean']>;
  text?: InputMaybe<Scalars['Boolean']>;
};

export type ClearPersonFields = {
  info?: InputMaybe<Scalars['Boolean']>;
  intro?: InputMaybe<Scalars['Boolean']>;
};

export type ClearTopicFields = {
  intro?: InputMaybe<Scalars['Boolean']>;
  warning?: InputMaybe<Scalars['Boolean']>;
};

export type ClearVideoMeetingFields = {
  text?: InputMaybe<Scalars['Boolean']>;
};

export type CollabText = Thing & {
  __typename?: 'CollabText';
  _permissions?: Maybe<Permissions>;
  _viewer: CollabTextViewer;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  managedBy: GroupConnection;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CollabTextManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type CollabTextConnection = Connection & {
  __typename?: 'CollabTextConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<CollabTextEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CollabTextEdge = Edge & {
  __typename?: 'CollabTextEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the CollabText is referenced */
export type CollabTextsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  Set = 'SET',
}

export type Comment = Thing & {
  __typename?: 'Comment';
  _permissions?: Maybe<Permissions>;
  _viewer: CommentViewer;
  comments?: Maybe<Content>;
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Person>;
  id: Scalars['ID'];
  ratedBy: CommentRatingConnection;
  text: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type CommentRatedByArgs = {
  filter?: InputMaybe<CommentRatingsFilter>;
  orderBy: OrderCommentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type CommentConnection = Connection & {
  __typename?: 'CommentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<CommentEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentEdge = Edge & {
  __typename?: 'CommentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Comment;
};

export type CommentRating = Rating &
  Thing & {
    __typename?: 'CommentRating';
    _permissions?: Maybe<Permissions>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Person>;
    id: Scalars['ID'];
    rates?: Maybe<Comment>;
    updatedAt: Scalars['DateTime'];
  };

export type CommentRatingConnection = Connection & {
  __typename?: 'CommentRatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<CommentRatingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CommentRatingEdge = Edge & {
  __typename?: 'CommentRatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: CommentRating;
};

/** Possible filter fields when the CommentRating is queried */
export type CommentRatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the CommentRating is referenced */
export type CommentRatingsRelationFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rates?: InputMaybe<CommentsRelationFilter>;
};

/** RelationsFilter */
export type CommentRatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Comment is referenced */
export type CommentsRelationFilter = {
  comments?: InputMaybe<ContentsRelationFilter>;
  createdBy?: InputMaybe<PersonsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

/** RelationsFilter */
export type CommentsRelationsFilter = {
  comments?: InputMaybe<ContentsRelationFilter>;
  createdBy?: InputMaybe<PersonsRelationFilter>;
};

export type Connection = {
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  pageInfo: PageInfo;
};

export type Content = {
  _permissions?: Maybe<Permissions>;
  _viewer: ContentViewer;
  categorizedByCategory: CategoryConnection;
  categorizedByNetworkCategory: NetworkCategoryConnection;
  commentedBy: CommentConnection;
  createdAt: Scalars['DateTime'];
  createdByGroup?: Maybe<Group>;
  createdByPerson?: Maybe<Person>;
  curatedBy: TopicConnection;
  displayedBy: NetworkConnection;
  id: Scalars['ID'];
  imagedBy: ImageConnection;
  locatedByAddress?: Maybe<Address>;
  locatedByAddressScope: AddressScopeConnection;
  managedBy: GroupConnection;
  ratedBy: ContentRatingConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  visibility: Visibility;
  warning?: Maybe<Scalars['String']>;
};

export type ContentCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentConnection = Connection & {
  __typename?: 'ContentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ContentEdge>;
  pageInfo: PageInfo;
};

export type ContentEdge = Edge & {
  __typename?: 'ContentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Content;
};

export type ContentRating = Rating &
  Thing & {
    __typename?: 'ContentRating';
    _permissions?: Maybe<Permissions>;
    createdAt: Scalars['DateTime'];
    createdBy?: Maybe<Person>;
    id: Scalars['ID'];
    rates?: Maybe<Content>;
    updatedAt: Scalars['DateTime'];
  };

export type ContentRatingConnection = Connection & {
  __typename?: 'ContentRatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ContentRatingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ContentRatingEdge = Edge & {
  __typename?: 'ContentRatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: ContentRating;
};

/** Possible filter fields when the ContentRating is queried */
export type ContentRatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the ContentRating is referenced */
export type ContentRatingsRelationFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

/** RelationsFilter */
export type ContentRatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

export enum ContentType {
  Article = 'ARTICLE',
  Impulse = 'IMPULSE',
  Topic = 'TOPIC',
}

export type ContentViewer = {
  commentedBy: CommentConnection;
  curatedBy: TopicConnection;
  displayedBy: NetworkConnection;
  imagedBy: ImageConnection;
  managedBy: GroupConnection;
  ratedBy: ContentRatingConnection;
};

export type ContentViewerCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};

export type ContentViewerCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};

export type ContentViewerDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

export type ContentViewerImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ContentViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

export type ContentViewerRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

export type ContentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Content is referenced */
export type ContentsRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type ContentsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

export type CreatedFileData = {
  __typename?: 'CreatedFileData';
  created: File;
  signedID: Scalars['String'];
};

export type CreatedImageData = {
  __typename?: 'CreatedImageData';
  created: Image;
  signedID: Scalars['String'];
};

export type Document = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  info?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  resourceLocation?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type DocumentConnection = Connection & {
  __typename?: 'DocumentConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<DocumentEdge>;
  pageInfo: PageInfo;
};

export type DocumentEdge = Edge & {
  __typename?: 'DocumentEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Document;
};

export enum DocumentType {
  File = 'FILE',
  Image = 'IMAGE',
}

export type DocumentsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Document is referenced */
export type DocumentsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

/** Holds the cursor of the current item, plus the item. */
export type Edge = {
  /** Cursor of the item to be used for pagination */
  cursor?: Maybe<Scalars['String']>;
};

export type Feed = Article | Impulse | Topic;

export type FeedConnection = Connection & {
  __typename?: 'FeedConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<FeedEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection */
export type FeedEdge = Edge & {
  __typename?: 'FeedEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Feed;
};

export enum FeedType {
  Article = 'ARTICLE',
  Impulse = 'IMPULSE',
  Topic = 'TOPIC',
}

export type FeedsFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

/** Aggregate RelationsFilter */
export type FeedsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** A random uploaded file */
export type File = Document &
  Thing & {
    __typename?: 'File';
    _permissions?: Maybe<Permissions>;
    _viewer: FileViewer;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    info?: Maybe<Scalars['String']>;
    managedBy: GroupConnection;
    name: Scalars['String'];
    resourceLocation?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<FileEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type FileEdge = Edge & {
  __typename?: 'FileEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the File is referenced */
export type FilesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type FilesRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

export type Group = Agent &
  Thing & {
    __typename?: 'Group';
    _permissions?: Maybe<Permissions>;
    _viewer: GroupViewer;
    administeredBy: MembershipConnection;
    categorizedBy?: Maybe<Category>;
    chatChannel?: Maybe<Scalars['String']>;
    contactInfo?: Maybe<Scalars['String']>;
    covers?: Maybe<Impulse>;
    createdAt: Scalars['DateTime'];
    creates: ContentConnection;
    id: Scalars['ID'];
    imagedBy?: Maybe<Image>;
    info?: Maybe<Scalars['String']>;
    intro?: Maybe<Scalars['String']>;
    knownBy: AgentConnection;
    knows: AgentConnection;
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    managesCollabText: CollabTextConnection;
    managesContent: ContentConnection;
    managesFile: FileConnection;
    managesMembershipInvite: MembershipInviteConnection;
    managesMembershipRequest: MembershipRequestConnection;
    managesTask: TaskConnection;
    managesVideoMeeting: VideoMeetingConnection;
    name: Scalars['String'];
    supervisedBy?: Maybe<Network>;
    updatedAt: Scalars['DateTime'];
    visibility: Visibility;
  };

export type GroupAdministeredByArgs = {
  filter?: InputMaybe<MembershipsFilter>;
  orderBy: OrderMembershipsBy;
  pagination?: InputMaybe<Pagination>;
};

export type GroupCreatesArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type GroupKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};

export type GroupKnowsArgs = {
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

export type GroupConnection = Connection & {
  __typename?: 'GroupConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<GroupEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type GroupEdge = Edge & {
  __typename?: 'GroupEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Group;
};

export type GroupViewer = AgentViewer & {
  __typename?: 'GroupViewer';
  administeredBy: MembershipConnection;
  creates: ContentConnection;
  knownBy: AgentConnection;
  knows: AgentConnection;
  managesContent: ContentConnection;
  managesFile: FileConnection;
  managesMembershipInvite: MembershipInviteConnection;
  managesMembershipRequest: MembershipRequestConnection;
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

export type GroupViewerKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type GroupViewerKnowsArgs = {
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

/** Possible filter fields when the Group is queried */
export type GroupsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Group is referenced */
export type GroupsRelationFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  categorizedBy?: InputMaybe<CategoriesRelationFilter>;
  covers?: InputMaybe<ImpulsesRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  supervisedBy?: InputMaybe<NetworksRelationFilter>;
};

/** RelationsFilter */
export type GroupsRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
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
  supervisedBy?: InputMaybe<NetworksRelationFilter>;
};

export type Image = Document &
  Thing & {
    __typename?: 'Image';
    _permissions?: Maybe<Permissions>;
    _viewer: ImageViewer;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    imagesAgent: AgentConnection;
    imagesContent: ContentConnection;
    info?: Maybe<Scalars['String']>;
    logos: NetworkConnection;
    name: Scalars['String'];
    resourceLocation?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ImageEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImageEdge = Edge & {
  __typename?: 'ImageEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Image is referenced */
export type ImagesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Impulse = Content &
  Thing & {
    __typename?: 'Impulse';
    _permissions?: Maybe<Permissions>;
    _viewer: ImpulseViewer;
    categorizedByCategory: CategoryConnection;
    categorizedByNetworkCategory: NetworkCategoryConnection;
    commentedBy: CommentConnection;
    coveredBy: GroupConnection;
    createdAt: Scalars['DateTime'];
    createdByGroup?: Maybe<Group>;
    createdByPerson?: Maybe<Person>;
    curatedBy: TopicConnection;
    displayedBy: NetworkConnection;
    id: Scalars['ID'];
    imagedBy: ImageConnection;
    intro: Scalars['String'];
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    managedBy: GroupConnection;
    ratedBy: ContentRatingConnection;
    relevance: Scalars['Float'];
    title: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    visibility: Visibility;
    warning?: Maybe<Scalars['String']>;
  };

export type ImpulseCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseCoveredByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseConnection = Connection & {
  __typename?: 'ImpulseConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ImpulseEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ImpulseEdge = Edge & {
  __typename?: 'ImpulseEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Impulse;
};

export type ImpulseViewer = ContentViewer & {
  __typename?: 'ImpulseViewer';
  commentedBy: CommentConnection;
  coveredBy: GroupConnection;
  curatedBy: TopicConnection;
  displayedBy: NetworkConnection;
  imagedBy: ImageConnection;
  managedBy: GroupConnection;
  ratedBy: ContentRatingConnection;
};

export type ImpulseViewerCommentedByArgs = {
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

export type ImpulseViewerCuratedByArgs = {
  filter?: InputMaybe<TopicsFilter>;
  orderBy: OrderTopicsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<TopicsRelationsFilter>;
};

export type ImpulseViewerDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

export type ImpulseViewerImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type ImpulseViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

export type ImpulseViewerRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Impulse is queried */
export type ImpulsesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  relevance_eq?: InputMaybe<Scalars['Float']>;
  relevance_not_eq?: InputMaybe<Scalars['Float']>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Impulse is referenced */
export type ImpulsesRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type ImpulsesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** Links an Account to a Group, i.e. tells which Access or Role an Account has in a specific Group */
export type Membership = Thing & {
  __typename?: 'Membership';
  _permissions?: Maybe<Permissions>;
  administersGroup?: Maybe<Group>;
  administersNetwork?: Maybe<Network>;
  createdAt: Scalars['DateTime'];
  definedBy?: Maybe<Role>;
  id: Scalars['ID'];
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  updatedAt: Scalars['DateTime'];
};

export type MembershipConnection = Connection & {
  __typename?: 'MembershipConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<MembershipEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipEdge = Edge & {
  __typename?: 'MembershipEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Membership;
};

export type MembershipInvite = Thing & {
  __typename?: 'MembershipInvite';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: Maybe<Scalars['Boolean']>;
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MembershipInviteConnection = Connection & {
  __typename?: 'MembershipInviteConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<MembershipInviteEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipInviteEdge = Edge & {
  __typename?: 'MembershipInviteEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: MembershipInvite;
};

/** Possible filter fields when the MembershipInvite is queried */
export type MembershipInvitesFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted_eq?: InputMaybe<Scalars['Boolean']>;
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted_not_eq?: InputMaybe<Scalars['Boolean']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the MembershipInvite is referenced */
export type MembershipInvitesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: Maybe<Scalars['Boolean']>;
  managedByGroup?: Maybe<Group>;
  managedByNetwork?: Maybe<Network>;
  managedByOnlineAccount?: Maybe<OnlineAccount>;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MembershipRequestConnection = Connection & {
  __typename?: 'MembershipRequestConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<MembershipRequestEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type MembershipRequestEdge = Edge & {
  __typename?: 'MembershipRequestEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: MembershipRequest;
};

/** Possible filter fields when the MembershipRequest is queried */
export type MembershipRequestsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted_eq?: InputMaybe<Scalars['Boolean']>;
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted_not_eq?: InputMaybe<Scalars['Boolean']>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the MembershipRequest is referenced */
export type MembershipRequestsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Membership is referenced */
export type MembershipsRelationFilter = {
  definedBy?: InputMaybe<RolesRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type MembershipsRelationsFilter = {
  definedBy?: InputMaybe<RolesRelationFilter>;
  managedByOnlineAccount?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a new Address and returns it */
  addressCreate: Address;
  /** Deletes an existing Address and returns the success */
  addressDelete: Scalars['Boolean'];
  /** Deletes the existing Addresses and returns the success */
  addressDeleteBulk: Scalars['Boolean'];
  /** Creates a new AddressScope and returns it */
  addressScopeCreate: AddressScope;
  /** Deletes an existing AddressScope and returns the success */
  addressScopeDelete: Scalars['Boolean'];
  /** Deletes the existing AddressScopes and returns the success */
  addressScopeDeleteBulk: Scalars['Boolean'];
  /** Creates a new Article and returns it */
  articleCreate: Article;
  /** Deletes an existing Article and returns the success */
  articleDelete: Scalars['Boolean'];
  /** Deletes the existing Articles and returns the success */
  articleDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Article and returns the result */
  articleModify: Article;
  articleModifyCategorizedByCategoryRelation: Article;
  articleModifyCategorizedByNetworkCategoryRelation: Article;
  articleModifyDisplayedByNetworkRelation: Article;
  articleModifyImagedByImageRelation: Article;
  articleModifyManagedByGroupRelation: Article;
  articleSetCreatedByGroupRelation: Article;
  articleSetCreatedByPersonRelation: Article;
  articleSetLocatedByAddressRelation: Article;
  articleSetOwnedByMyOnlineAccountRelation: Article;
  /** Creates a new Category and returns it */
  categoryCreate: Category;
  /** Deletes an existing Category and returns the success */
  categoryDelete: Scalars['Boolean'];
  /** Deletes the existing Categories and returns the success */
  categoryDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Category and returns the result */
  categoryModify: Category;
  /** Creates a new CollabText and returns it */
  collabTextCreate: CollabText;
  /** Deletes an existing CollabText and returns the success */
  collabTextDelete: Scalars['Boolean'];
  /** Deletes the existing CollabTexts and returns the success */
  collabTextDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing CollabText and returns the result */
  collabTextModify: CollabText;
  collabTextModifyManagedByGroupRelation: CollabText;
  collabTextSetOwnedByMyOnlineAccountRelation: CollabText;
  /** Creates a new Comment and returns it */
  commentCreate: Comment;
  /** Deletes an existing Comment and returns the success */
  commentDelete: Scalars['Boolean'];
  /** Deletes the existing Comments and returns the success */
  commentDeleteBulk: Scalars['Boolean'];
  /** Creates a new CommentRating and returns it */
  commentRatingCreate: CommentRating;
  /** Deletes an existing CommentRating and returns the success */
  commentRatingDelete: Scalars['Boolean'];
  /** Deletes the existing CommentRatings and returns the success */
  commentRatingDeleteBulk: Scalars['Boolean'];
  commentRatingSetCreatedByPersonRelation: CommentRating;
  commentRatingSetOwnedByMyOnlineAccountRelation: CommentRating;
  commentRatingSetRatesCommentRelation: CommentRating;
  commentSetCommentsContentRelation: Comment;
  commentSetCreatedByPersonRelation: Comment;
  commentSetOwnedByMyOnlineAccountRelation: Comment;
  /** Creates a new ContentRating and returns it */
  contentRatingCreate: ContentRating;
  /** Deletes an existing ContentRating and returns the success */
  contentRatingDelete: Scalars['Boolean'];
  /** Deletes the existing ContentRatings and returns the success */
  contentRatingDeleteBulk: Scalars['Boolean'];
  contentRatingSetCreatedByPersonRelation: ContentRating;
  contentRatingSetOwnedByMyOnlineAccountRelation: ContentRating;
  contentRatingSetRatesContentRelation: ContentRating;
  /** Creates a new File and returns it */
  fileCreate: CreatedFileData;
  /** Deletes an existing File and returns the success */
  fileDelete: Scalars['Boolean'];
  /** Deletes the existing Files and returns the success */
  fileDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing File and returns the result */
  fileModify: File;
  fileModifyManagedByGroupRelation: File;
  fileSetOwnedByMyOnlineAccountRelation: File;
  /** Creates a new Group and returns it */
  groupCreate: Group;
  /** Deletes an existing Group and returns the success */
  groupDelete: Scalars['Boolean'];
  /** Deletes the existing Groups and returns the success */
  groupDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Group and returns the result */
  groupModify: Group;
  groupModifyKnowsAgentRelation: Group;
  groupSetCategorizedByCategoryRelation: Group;
  groupSetCoversImpulseRelation: Group;
  groupSetImagedByImageRelation: Group;
  groupSetLocatedByAddressRelation: Group;
  groupSetOwnedByMyOnlineAccountRelation: Group;
  groupSetSupervisedByNetworkRelation: Group;
  /** Creates a new Image and returns it */
  imageCreate: CreatedImageData;
  /** Deletes an existing Image and returns the success */
  imageDelete: Scalars['Boolean'];
  /** Deletes the existing Images and returns the success */
  imageDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Image and returns the result */
  imageModify: Image;
  imageSetOwnedByMyOnlineAccountRelation: Image;
  /** Creates a new Impulse and returns it */
  impulseCreate: Impulse;
  /** Deletes an existing Impulse and returns the success */
  impulseDelete: Scalars['Boolean'];
  /** Deletes the existing Impulses and returns the success */
  impulseDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Impulse and returns the result */
  impulseModify: Impulse;
  impulseModifyCategorizedByCategoryRelation: Impulse;
  impulseModifyCategorizedByNetworkCategoryRelation: Impulse;
  impulseModifyDisplayedByNetworkRelation: Impulse;
  impulseModifyImagedByImageRelation: Impulse;
  impulseModifyManagedByGroupRelation: Impulse;
  impulseSetCreatedByGroupRelation: Impulse;
  impulseSetCreatedByPersonRelation: Impulse;
  impulseSetLocatedByAddressRelation: Impulse;
  impulseSetOwnedByMyOnlineAccountRelation: Impulse;
  /** Creates a new Membership and returns it */
  membershipCreate: Membership;
  /** Deletes an existing Membership and returns the success */
  membershipDelete: Scalars['Boolean'];
  /** Deletes the existing Memberships and returns the success */
  membershipDeleteBulk: Scalars['Boolean'];
  /** Creates a new MembershipInvite and returns it */
  membershipInviteCreate: MembershipInvite;
  /** Deletes an existing MembershipInvite and returns the success */
  membershipInviteDelete: Scalars['Boolean'];
  /** Deletes the existing MembershipInvites and returns the success */
  membershipInviteDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing MembershipInvite and returns the result */
  membershipInviteModify: MembershipInvite;
  /** Creates a new MembershipRequest and returns it */
  membershipRequestCreate: MembershipRequest;
  /** Deletes an existing MembershipRequest and returns the success */
  membershipRequestDelete: Scalars['Boolean'];
  /** Deletes the existing MembershipRequests and returns the success */
  membershipRequestDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing MembershipRequest and returns the result */
  membershipRequestModify: MembershipRequest;
  membershipSetDefinedByRoleRelation: Membership;
  myOnlineAccountModifyFollowsContentRelation: MyOnlineAccount;
  /** Creates a new NetworkCategory and returns it */
  networkCategoryCreate: NetworkCategory;
  /** Deletes an existing NetworkCategory and returns the success */
  networkCategoryDelete: Scalars['Boolean'];
  /** Deletes the existing NetworkCategories and returns the success */
  networkCategoryDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing NetworkCategory and returns the result */
  networkCategoryModify: NetworkCategory;
  /** Creates a new Network and returns it */
  networkCreate: Network;
  /** Deletes an existing Network and returns the success */
  networkDelete: Scalars['Boolean'];
  /** Deletes the existing Networks and returns the success */
  networkDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Network and returns the result */
  networkModify: Network;
  networkModifyKnowsAgentRelation: Network;
  networkSetImagedByImageRelation: Network;
  networkSetLocatedByAddressRelation: Network;
  networkSetLogoedByImageRelation: Network;
  networkSetOwnedByMyOnlineAccountRelation: Network;
  /** Creates a new OnlineAccount and returns it */
  onlineAccountCreate: OnlineAccount;
  /** Deletes an existing OnlineAccount and returns the success */
  onlineAccountDelete: Scalars['Boolean'];
  /** Deletes the existing OnlineAccounts and returns the success */
  onlineAccountDeleteBulk: Scalars['Boolean'];
  /** Creates a new Person and returns it */
  personCreate: Person;
  /** Deletes an existing Person and returns the success */
  personDelete: Scalars['Boolean'];
  /** Deletes the existing Persons and returns the success */
  personDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Person and returns the result */
  personModify: Person;
  personModifyKnowsAgentRelation: Person;
  personSetImagedByImageRelation: Person;
  personSetLocatedByAddressRelation: Person;
  personSetOwnedByMyOnlineAccountRelation: Person;
  /** Creates a new Role and returns it */
  roleCreate: Role;
  /** Deletes an existing Role and returns the success */
  roleDelete: Scalars['Boolean'];
  /** Deletes the existing Roles and returns the success */
  roleDeleteBulk: Scalars['Boolean'];
  /** Creates a new Task and returns it */
  taskCreate: Task;
  /** Deletes an existing Task and returns the success */
  taskDelete: Scalars['Boolean'];
  /** Deletes the existing Tasks and returns the success */
  taskDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Task and returns the result */
  taskModify: Task;
  taskModifyManagedByGroupRelation: Task;
  /** Creates a new Topic and returns it */
  topicCreate: Topic;
  /** Deletes an existing Topic and returns the success */
  topicDelete: Scalars['Boolean'];
  /** Deletes the existing Topics and returns the success */
  topicDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing Topic and returns the result */
  topicModify: Topic;
  topicModifyCategorizedByCategoryRelation: Topic;
  topicModifyCategorizedByNetworkCategoryRelation: Topic;
  topicModifyCuratesContentRelation: Topic;
  topicModifyDisplayedByNetworkRelation: Topic;
  topicModifyImagedByImageRelation: Topic;
  topicModifyManagedByGroupRelation: Topic;
  topicSetCreatedByGroupRelation: Topic;
  topicSetCreatedByPersonRelation: Topic;
  topicSetLocatedByAddressRelation: Topic;
  topicSetOwnedByMyOnlineAccountRelation: Topic;
  /** Creates a new VideoMeeting and returns it */
  videoMeetingCreate: VideoMeeting;
  /** Deletes an existing VideoMeeting and returns the success */
  videoMeetingDelete: Scalars['Boolean'];
  /** Deletes the existing VideoMeetings and returns the success */
  videoMeetingDeleteBulk: Scalars['Boolean'];
  /** Modifies an existing VideoMeeting and returns the result */
  videoMeetingModify: VideoMeeting;
  videoMeetingSetManagedByGroupRelation: VideoMeeting;
};

export type MutationAddressCreateArgs = {
  input: NewAddress;
};

export type MutationAddressDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationAddressDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationAddressScopeDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationAddressScopeDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationArticleCreateArgs = {
  input: NewArticle;
  relationInput: NewArticleRelations;
};

export type MutationArticleDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationArticleDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationArticleModifyArgs = {
  deletion?: InputMaybe<ClearArticleFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateArticle>;
};

export type MutationArticleModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationArticleModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationArticleModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationArticleModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationArticleModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationArticleSetCreatedByGroupRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationArticleSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationArticleSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationArticleSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationCategoryCreateArgs = {
  input: NewCategory;
};

export type MutationCategoryDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationCategoryDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationCategoryModifyArgs = {
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateCategory>;
};

export type MutationCollabTextCreateArgs = {
  input: NewCollabText;
  relationInput: NewCollabTextRelations;
};

export type MutationCollabTextDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationCollabTextDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationCollabTextModifyArgs = {
  deletion?: InputMaybe<ClearCollabTextFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateCollabText>;
};

export type MutationCollabTextModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationCollabTextSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentCreateArgs = {
  input: NewComment;
  relationInput: NewCommentRelations;
};

export type MutationCommentDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationCommentDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationCommentRatingCreateArgs = {
  relationInput: NewCommentRatingRelations;
};

export type MutationCommentRatingDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationCommentRatingDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationCommentRatingSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentRatingSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentRatingSetRatesCommentRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentSetCommentsContentRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationCommentSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationContentRatingCreateArgs = {
  relationInput: NewContentRatingRelations;
};

export type MutationContentRatingDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationContentRatingDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationContentRatingSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationContentRatingSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationContentRatingSetRatesContentRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationFileCreateArgs = {
  input: NewFile;
  relationInput: NewFileRelations;
};

export type MutationFileDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationFileDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationFileModifyArgs = {
  deletion?: InputMaybe<ClearFileFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateFile>;
};

export type MutationFileModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationFileSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupCreateArgs = {
  input: NewGroup;
  relationInput: NewGroupRelations;
};

export type MutationGroupDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationGroupDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationGroupModifyArgs = {
  deletion?: InputMaybe<ClearGroupFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateGroup>;
};

export type MutationGroupModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationGroupSetCategorizedByCategoryRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupSetCoversImpulseRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupSetImagedByImageRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationGroupSetSupervisedByNetworkRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationImageCreateArgs = {
  input: NewImage;
};

export type MutationImageDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationImageDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationImageModifyArgs = {
  deletion?: InputMaybe<ClearImageFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateImage>;
};

export type MutationImageSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationImpulseCreateArgs = {
  input: NewImpulse;
  relationInput: NewImpulseRelations;
};

export type MutationImpulseDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationImpulseDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationImpulseModifyArgs = {
  deletion?: InputMaybe<ClearImpulseFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateImpulse>;
};

export type MutationImpulseModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationImpulseModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationImpulseModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationImpulseModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationImpulseModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationImpulseSetCreatedByGroupRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationImpulseSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationImpulseSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationImpulseSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationMembershipDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationMembershipDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationMembershipInviteCreateArgs = {
  input: NewMembershipInvite;
  relationInput: NewMembershipInviteRelations;
};

export type MutationMembershipInviteDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationMembershipInviteDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationMembershipInviteModifyArgs = {
  deletion?: InputMaybe<ClearMembershipInviteFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateMembershipInvite>;
};

export type MutationMembershipRequestCreateArgs = {
  input: NewMembershipRequest;
  relationInput: NewMembershipRequestRelations;
};

export type MutationMembershipRequestDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationMembershipRequestDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationMembershipRequestModifyArgs = {
  deletion?: InputMaybe<ClearMembershipRequestFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateMembershipRequest>;
};

export type MutationMembershipSetDefinedByRoleRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationMyOnlineAccountModifyFollowsContentRelationArgs = {
  operation: CollectionRelationMutation;
  target: Array<Scalars['ID']>;
};

export type MutationNetworkCategoryCreateArgs = {
  input: NewNetworkCategory;
  relationInput: NewNetworkCategoryRelations;
};

export type MutationNetworkCategoryDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationNetworkCategoryDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationNetworkCategoryModifyArgs = {
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateNetworkCategory>;
};

export type MutationNetworkCreateArgs = {
  input: NewNetwork;
};

export type MutationNetworkDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationNetworkDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationNetworkModifyArgs = {
  deletion?: InputMaybe<ClearNetworkFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateNetwork>;
};

export type MutationNetworkModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationNetworkSetImagedByImageRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationNetworkSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationNetworkSetLogoedByImageRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationNetworkSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationOnlineAccountDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationOnlineAccountDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationPersonCreateArgs = {
  input: NewPerson;
};

export type MutationPersonDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationPersonDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationPersonModifyArgs = {
  deletion?: InputMaybe<ClearPersonFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdatePerson>;
};

export type MutationPersonModifyKnowsAgentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationPersonSetImagedByImageRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationPersonSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationPersonSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationRoleDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationRoleDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationTaskCreateArgs = {
  input: NewTask;
  relationInput: NewTaskRelations;
};

export type MutationTaskDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTaskDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationTaskModifyArgs = {
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateTask>;
};

export type MutationTaskModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicCreateArgs = {
  input: NewTopic;
  relationInput: NewTopicRelations;
};

export type MutationTopicDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationTopicDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationTopicModifyArgs = {
  deletion?: InputMaybe<ClearTopicFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateTopic>;
};

export type MutationTopicModifyCategorizedByCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicModifyCategorizedByNetworkCategoryRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicModifyCuratesContentRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicModifyDisplayedByNetworkRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicModifyImagedByImageRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicModifyManagedByGroupRelationArgs = {
  operation: CollectionRelationMutation;
  source: Scalars['ID'];
  target: Array<Scalars['ID']>;
};

export type MutationTopicSetCreatedByGroupRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationTopicSetCreatedByPersonRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationTopicSetLocatedByAddressRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
};

export type MutationTopicSetOwnedByMyOnlineAccountRelationArgs = {
  source?: InputMaybe<Scalars['ID']>;
};

export type MutationVideoMeetingCreateArgs = {
  input: NewVideoMeeting;
  relationInput: NewVideoMeetingRelations;
};

export type MutationVideoMeetingDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationVideoMeetingDeleteBulkArgs = {
  ids: Array<Scalars['ID']>;
};

export type MutationVideoMeetingModifyArgs = {
  deletion?: InputMaybe<ClearVideoMeetingFields>;
  id: Scalars['ID'];
  modification?: InputMaybe<UpdateVideoMeeting>;
};

export type MutationVideoMeetingSetManagedByGroupRelationArgs = {
  source: Scalars['ID'];
  target?: InputMaybe<Scalars['ID']>;
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
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyArticlesRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCollabTextsRelationsFilter = {
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCommentRatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<CommentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyCommentsRelationsFilter = {
  comments?: InputMaybe<ContentsRelationFilter>;
  createdBy?: InputMaybe<PersonsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyContentRatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  rates?: InputMaybe<ContentsRelationFilter>;
};

/** MeRelationsFilter */
export type MyContentsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyDocumentsRelationsFilter = {
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
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  coveredBy?: InputMaybe<GroupsRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
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
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type MyOnlineAccount = Account &
  Thing & {
    __typename?: 'MyOnlineAccount';
    createdAt: Scalars['DateTime'];
    email: Scalars['String'];
    follows: ContentConnection;
    id: Scalars['ID'];
    managesMembership: MembershipConnection;
    managesMembershipInvite: MembershipInviteConnection;
    managesMembershipRequest: MembershipRequestConnection;
    ownsAgent: AgentConnection;
    ownsComment: CommentConnection;
    ownsContent: ContentConnection;
    ownsDocument: DocumentConnection;
    ownsRating: RatingConnection;
    represents?: Maybe<Person>;
    updatedAt: Scalars['DateTime'];
  };

export type MyOnlineAccountFollowsArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<MyContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
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
  follows?: InputMaybe<ContentsRelationFilter>;
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
};

/** MeRelationsFilter */
export type MyPersonsRelationsFilter = {
  createsComment?: InputMaybe<CommentsRelationFilter>;
  createsContent?: InputMaybe<ContentsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyRatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** MeRelationsFilter */
export type MyTopicsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  followedBy?: InputMaybe<OnlineAccountsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
  ownedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

export type Network = Agent &
  Thing & {
    __typename?: 'Network';
    _permissions?: Maybe<Permissions>;
    _viewer: NetworkViewer;
    administeredBy: MembershipConnection;
    admittance: Admittance;
    contactInfo?: Maybe<Scalars['String']>;
    createdAt: Scalars['DateTime'];
    displaysFeed: FeedConnection;
    id: Scalars['ID'];
    imagedBy?: Maybe<Image>;
    info?: Maybe<Scalars['String']>;
    intro?: Maybe<Scalars['String']>;
    knownBy: AgentConnection;
    knows: AgentConnection;
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    logoedBy?: Maybe<Image>;
    managesMembershipInvite: MembershipInviteConnection;
    managesMembershipRequest: MembershipRequestConnection;
    managesNetworkCategory: NetworkCategoryConnection;
    name: Scalars['String'];
    supervises: GroupConnection;
    text?: Maybe<Scalars['String']>;
    updatedAt: Scalars['DateTime'];
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

export type NetworkKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};

export type NetworkKnowsArgs = {
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the NetworkCategory is referenced */
export type NetworkCategoriesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
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
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  managedBy?: Maybe<Network>;
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<NetworkCategoryEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NetworkCategoryEdge = Edge & {
  __typename?: 'NetworkCategoryEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<NetworkEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type NetworkEdge = Edge & {
  __typename?: 'NetworkEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Network;
};

export type NetworkViewer = AgentViewer & {
  __typename?: 'NetworkViewer';
  administeredBy: MembershipConnection;
  knownBy: AgentConnection;
  knows: AgentConnection;
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

export type NetworkViewerKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type NetworkViewerKnowsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
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
  admittance_contains?: InputMaybe<Scalars['String']>;
  admittance_eq?: InputMaybe<Scalars['String']>;
  admittance_in?: InputMaybe<Array<Scalars['String']>>;
  admittance_not_contains?: InputMaybe<Scalars['String']>;
  admittance_not_eq?: InputMaybe<Scalars['String']>;
  admittance_not_in?: InputMaybe<Array<Scalars['String']>>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Network is referenced */
export type NetworksRelationFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  logoedBy?: InputMaybe<ImagesRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
};

/** RelationsFilter */
export type NetworksRelationsFilter = {
  administeredBy?: InputMaybe<MembershipsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  logoedBy?: InputMaybe<ImagesRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
  managesMembershipRequest?: InputMaybe<MembershipRequestsRelationFilter>;
  managesNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
};

export type NewAddress = {
  addressCountry: Scalars['String'];
  id: Scalars['ID'];
};

export type NewAddressScope = {
  id: Scalars['ID'];
};

export type NewArticle = {
  intro?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']>;
};

export type NewArticleRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']>;
  createdByPerson?: InputMaybe<Scalars['ID']>;
  managedBy: Array<Scalars['ID']>;
};

export type NewCategory = {
  name: Scalars['String'];
};

export type NewCollabText = {
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NewCollabTextRelations = {
  managedBy: Array<Scalars['ID']>;
};

export type NewComment = {
  text: Scalars['String'];
};

export type NewCommentRatingRelations = {
  createdBy?: InputMaybe<Scalars['ID']>;
  rates?: InputMaybe<Scalars['ID']>;
};

export type NewCommentRelations = {
  comments?: InputMaybe<Scalars['ID']>;
  createdBy?: InputMaybe<Scalars['ID']>;
};

export type NewContentRatingRelations = {
  createdBy?: InputMaybe<Scalars['ID']>;
  rates?: InputMaybe<Scalars['ID']>;
};

export type NewFile = {
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NewFileRelations = {
  managedBy: Array<Scalars['ID']>;
};

export type NewGroup = {
  contactInfo?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  visibility: Visibility;
};

export type NewGroupRelations = {
  covers?: InputMaybe<Scalars['ID']>;
};

export type NewImage = {
  info?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NewImpulse = {
  intro: Scalars['String'];
  title: Scalars['String'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']>;
};

export type NewImpulseRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']>;
  createdByPerson?: InputMaybe<Scalars['ID']>;
  managedBy: Array<Scalars['ID']>;
};

export type NewMembershipInvite = {
  text?: InputMaybe<Scalars['String']>;
};

export type NewMembershipInviteRelations = {
  managedByGroup?: InputMaybe<Scalars['ID']>;
  managedByNetwork?: InputMaybe<Scalars['ID']>;
  managedByOnlineAccount?: InputMaybe<Scalars['ID']>;
};

export type NewMembershipRequest = {
  text?: InputMaybe<Scalars['String']>;
};

export type NewMembershipRequestRelations = {
  managedByGroup?: InputMaybe<Scalars['ID']>;
  managedByNetwork?: InputMaybe<Scalars['ID']>;
  managedByOnlineAccount?: InputMaybe<Scalars['ID']>;
};

export type NewNetwork = {
  admittance: Admittance;
  contactInfo?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  text?: InputMaybe<Scalars['String']>;
  visibility: Visibility;
};

export type NewNetworkCategory = {
  name: Scalars['String'];
};

export type NewNetworkCategoryRelations = {
  managedBy?: InputMaybe<Scalars['ID']>;
};

export type NewPerson = {
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type NewTask = {
  completed: Scalars['Boolean'];
  title: Scalars['String'];
};

export type NewTaskRelations = {
  managedBy: Array<Scalars['ID']>;
};

export type NewTopic = {
  intro?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  visibility: Visibility;
  warning?: InputMaybe<Scalars['String']>;
};

export type NewTopicRelations = {
  createdByGroup?: InputMaybe<Scalars['ID']>;
  createdByPerson?: InputMaybe<Scalars['ID']>;
  managedBy: Array<Scalars['ID']>;
};

export type NewVideoMeeting = {
  text?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type NewVideoMeetingRelations = {
  managedBy?: InputMaybe<Scalars['ID']>;
};

export type OnlineAccount = Account &
  Thing & {
    __typename?: 'OnlineAccount';
    _permissions?: Maybe<Permissions>;
    createdAt: Scalars['DateTime'];
    id: Scalars['ID'];
    managesMembership: MembershipConnection;
    managesMembershipInvite: MembershipInviteConnection;
    represents?: Maybe<Person>;
    updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<OnlineAccountEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OnlineAccountEdge = Edge & {
  __typename?: 'OnlineAccountEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: OnlineAccount;
};

/** Possible filter fields when the OnlineAccount is queried */
export type OnlineAccountsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the OnlineAccount is referenced */
export type OnlineAccountsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
};

/** RelationsFilter */
export type OnlineAccountsRelationsFilter = {
  managesMembership?: InputMaybe<MembershipsRelationFilter>;
  managesMembershipInvite?: InputMaybe<MembershipInvitesRelationFilter>;
};

export type OrderAccountsBy = {
  createdAt?: InputMaybe<OrderAccountsByCreatedAt>;
  updatedAt?: InputMaybe<OrderAccountsByUpdatedAt>;
};

export type OrderAccountsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAccountsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAddressScopesBy = {
  createdAt?: InputMaybe<OrderAddressScopesByCreatedAt>;
  updatedAt?: InputMaybe<OrderAddressScopesByUpdatedAt>;
};

export type OrderAddressScopesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAddressScopesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAddressesBy = {
  addressCountry?: InputMaybe<OrderAddressesByAddressCountry>;
  addressLocality?: InputMaybe<OrderAddressesByAddressLocality>;
  createdAt?: InputMaybe<OrderAddressesByCreatedAt>;
  name?: InputMaybe<OrderAddressesByName>;
  updatedAt?: InputMaybe<OrderAddressesByUpdatedAt>;
};

export type OrderAddressesByAddressCountry = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderAddressesByAddressLocality = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderAddressesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAddressesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderAddressesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAgentsBy = {
  createdAt?: InputMaybe<OrderAgentsByCreatedAt>;
  name?: InputMaybe<OrderAgentsByName>;
  updatedAt?: InputMaybe<OrderAgentsByUpdatedAt>;
};

export type OrderAgentsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderAgentsByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderAgentsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderArticlesBy = {
  createdAt?: InputMaybe<OrderArticlesByCreatedAt>;
  title?: InputMaybe<OrderArticlesByTitle>;
  updatedAt?: InputMaybe<OrderArticlesByUpdatedAt>;
};

export type OrderArticlesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderArticlesByTitle = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderArticlesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCategoriesBy = {
  createdAt?: InputMaybe<OrderCategoriesByCreatedAt>;
  name?: InputMaybe<OrderCategoriesByName>;
  updatedAt?: InputMaybe<OrderCategoriesByUpdatedAt>;
};

export type OrderCategoriesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCategoriesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderCategoriesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCollabTextsBy = {
  createdAt?: InputMaybe<OrderCollabTextsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCollabTextsByUpdatedAt>;
};

export type OrderCollabTextsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCollabTextsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCommentRatingsBy = {
  createdAt?: InputMaybe<OrderCommentRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCommentRatingsByUpdatedAt>;
};

export type OrderCommentRatingsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCommentRatingsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCommentsBy = {
  createdAt?: InputMaybe<OrderCommentsByCreatedAt>;
  updatedAt?: InputMaybe<OrderCommentsByUpdatedAt>;
};

export type OrderCommentsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderCommentsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderContentRatingsBy = {
  createdAt?: InputMaybe<OrderContentRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderContentRatingsByUpdatedAt>;
};

export type OrderContentRatingsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderContentRatingsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderContentsBy = {
  createdAt?: InputMaybe<OrderContentsByCreatedAt>;
  title?: InputMaybe<OrderContentsByTitle>;
  updatedAt?: InputMaybe<OrderContentsByUpdatedAt>;
};

export type OrderContentsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderContentsByTitle = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderContentsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDocumentsBy = {
  createdAt?: InputMaybe<OrderDocumentsByCreatedAt>;
  name?: InputMaybe<OrderDocumentsByName>;
  updatedAt?: InputMaybe<OrderDocumentsByUpdatedAt>;
};

export type OrderDocumentsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderDocumentsByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderDocumentsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderFilesBy = {
  createdAt?: InputMaybe<OrderFilesByCreatedAt>;
  name?: InputMaybe<OrderFilesByName>;
  updatedAt?: InputMaybe<OrderFilesByUpdatedAt>;
};

export type OrderFilesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderFilesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderFilesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderGroupsBy = {
  createdAt?: InputMaybe<OrderGroupsByCreatedAt>;
  name?: InputMaybe<OrderGroupsByName>;
  updatedAt?: InputMaybe<OrderGroupsByUpdatedAt>;
};

export type OrderGroupsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderGroupsByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderGroupsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderImagesBy = {
  createdAt?: InputMaybe<OrderImagesByCreatedAt>;
  name?: InputMaybe<OrderImagesByName>;
  updatedAt?: InputMaybe<OrderImagesByUpdatedAt>;
};

export type OrderImagesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderImagesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderImagesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderImpulsesBy = {
  createdAt?: InputMaybe<OrderImpulsesByCreatedAt>;
  relevance?: InputMaybe<OrderImpulsesByRelevance>;
  title?: InputMaybe<OrderImpulsesByTitle>;
  updatedAt?: InputMaybe<OrderImpulsesByUpdatedAt>;
};

export type OrderImpulsesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderImpulsesByRelevance = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['Float']>;
};

export type OrderImpulsesByTitle = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderImpulsesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipInvitesBy = {
  createdAt?: InputMaybe<OrderMembershipInvitesByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipInvitesByUpdatedAt>;
};

export type OrderMembershipInvitesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipInvitesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipRequestsBy = {
  createdAt?: InputMaybe<OrderMembershipRequestsByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipRequestsByUpdatedAt>;
};

export type OrderMembershipRequestsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipRequestsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipsBy = {
  createdAt?: InputMaybe<OrderMembershipsByCreatedAt>;
  updatedAt?: InputMaybe<OrderMembershipsByUpdatedAt>;
};

export type OrderMembershipsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderMembershipsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderNetworkCategoriesBy = {
  createdAt?: InputMaybe<OrderNetworkCategoriesByCreatedAt>;
  name?: InputMaybe<OrderNetworkCategoriesByName>;
  updatedAt?: InputMaybe<OrderNetworkCategoriesByUpdatedAt>;
};

export type OrderNetworkCategoriesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderNetworkCategoriesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderNetworkCategoriesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderNetworksBy = {
  createdAt?: InputMaybe<OrderNetworksByCreatedAt>;
  name?: InputMaybe<OrderNetworksByName>;
  updatedAt?: InputMaybe<OrderNetworksByUpdatedAt>;
};

export type OrderNetworksByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderNetworksByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderNetworksByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderOnlineAccountsBy = {
  createdAt?: InputMaybe<OrderOnlineAccountsByCreatedAt>;
  updatedAt?: InputMaybe<OrderOnlineAccountsByUpdatedAt>;
};

export type OrderOnlineAccountsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderOnlineAccountsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderPersonsBy = {
  createdAt?: InputMaybe<OrderPersonsByCreatedAt>;
  name?: InputMaybe<OrderPersonsByName>;
  updatedAt?: InputMaybe<OrderPersonsByUpdatedAt>;
};

export type OrderPersonsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderPersonsByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderPersonsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderRatingsBy = {
  createdAt?: InputMaybe<OrderRatingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderRatingsByUpdatedAt>;
};

export type OrderRatingsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderRatingsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderRolesBy = {
  createdAt?: InputMaybe<OrderRolesByCreatedAt>;
  name?: InputMaybe<OrderRolesByName>;
  updatedAt?: InputMaybe<OrderRolesByUpdatedAt>;
};

export type OrderRolesByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderRolesByName = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderRolesByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTasksBy = {
  completed?: InputMaybe<OrderTasksByCompleted>;
  completedAt?: InputMaybe<OrderTasksByCompletedAt>;
  createdAt?: InputMaybe<OrderTasksByCreatedAt>;
  title?: InputMaybe<OrderTasksByTitle>;
  updatedAt?: InputMaybe<OrderTasksByUpdatedAt>;
};

export type OrderTasksByCompleted = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['Boolean']>;
};

export type OrderTasksByCompletedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTasksByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTasksByTitle = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderTasksByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderThingsBy = {
  createdAt?: InputMaybe<OrderThingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderThingsByUpdatedAt>;
};

export type OrderThingsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderThingsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTopicsBy = {
  createdAt?: InputMaybe<OrderTopicsByCreatedAt>;
  title?: InputMaybe<OrderTopicsByTitle>;
  updatedAt?: InputMaybe<OrderTopicsByUpdatedAt>;
};

export type OrderTopicsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderTopicsByTitle = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['String']>;
};

export type OrderTopicsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderVideoMeetingsBy = {
  createdAt?: InputMaybe<OrderVideoMeetingsByCreatedAt>;
  updatedAt?: InputMaybe<OrderVideoMeetingsByUpdatedAt>;
};

export type OrderVideoMeetingsByCreatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

export type OrderVideoMeetingsByUpdatedAt = {
  ascending: Scalars['Boolean'];
  priority: Scalars['Int'];
  threshold?: InputMaybe<Scalars['DateTime']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** Determines the next items to be returned */
export type Pagination = {
  /** Determines the start of the new page. It's not included itself. Can be empty for the first page. */
  afterCursor?: InputMaybe<Scalars['String']>;
  /** The number of items to return after the the given cursor. Can be negative for a negative number. */
  first: Scalars['Int'];
};

/** Get be set as pagination data for the next request to receive more results. */
export type PaginationData = {
  __typename?: 'PaginationData';
  /** Place ids not to be returned again. Can be taken from the recent results pageState. */
  excludePlaceIds: Array<Scalars['String']>;
  /** The place ids of the representatives of a street fragment cluster */
  streetRepresentatives: Array<Scalars['String']>;
  /** All street framgents from the recent result, including those which have been filtered out */
  streets: Array<PaginationMatch>;
};

/** Allows to query more results. */
export type PaginationDataInput = {
  /** Place ids not to be returned again. Can be taken from the recent results pageState. */
  excludePlaceIds: Array<Scalars['String']>;
  /** The place ids of the representatives of a street fragment cluster */
  streetRepresentatives: Array<Scalars['String']>;
  /** All street framgents from the recent result, including those which have been filtered out */
  streets: Array<PaginationMatchInput>;
};

export type PaginationMatch = {
  __typename?: 'PaginationMatch';
  box: BoundingBox;
  id: Scalars['String'];
  placeId: Scalars['String'];
};

export type PaginationMatchInput = {
  box: BoundingBoxInput;
  id: Scalars['String'];
  placeId: Scalars['String'];
};

export type Permissions = {
  __typename?: 'Permissions';
  count?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
  find?: Maybe<Scalars['Boolean']>;
  findOne?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
};

export type Person = Agent &
  Thing & {
    __typename?: 'Person';
    _permissions?: Maybe<Permissions>;
    _viewer: PersonViewer;
    createdAt: Scalars['DateTime'];
    createsComment: CommentConnection;
    createsContent: ContentConnection;
    createsRating: RatingConnection;
    id: Scalars['ID'];
    imagedBy?: Maybe<Image>;
    info?: Maybe<Scalars['String']>;
    intro?: Maybe<Scalars['String']>;
    knownBy: AgentConnection;
    knows: AgentConnection;
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    name: Scalars['String'];
    representedBy?: Maybe<OnlineAccount>;
    updatedAt: Scalars['DateTime'];
  };

export type PersonCreatesCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type PersonCreatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ContentType>>;
};

export type PersonCreatesRatingArgs = {
  filter?: InputMaybe<RatingsFilter>;
  orderBy: OrderRatingsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<RatingType>>;
};

export type PersonKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AgentType>>;
};

export type PersonKnowsArgs = {
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

export type PersonConnection = Connection & {
  __typename?: 'PersonConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<PersonEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonEdge = Edge & {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Person;
};

export type PersonViewer = AgentViewer & {
  __typename?: 'PersonViewer';
  createsComment: CommentConnection;
  createsContent: ContentConnection;
  createsRating: RatingConnection;
  knownBy: AgentConnection;
  knows: AgentConnection;
};

export type PersonViewerCreatesCommentArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};

export type PersonViewerCreatesContentArgs = {
  filter?: InputMaybe<ContentsFilter>;
  orderBy: OrderContentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentsRelationsFilter>;
  type?: InputMaybe<Array<ContentType>>;
};

export type PersonViewerCreatesRatingArgs = {
  filter?: InputMaybe<RatingsFilter>;
  orderBy: OrderRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<RatingsRelationsFilter>;
  type?: InputMaybe<Array<RatingType>>;
};

export type PersonViewerKnownByArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type PersonViewerKnowsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

/** Possible filter fields when the Person is queried */
export type PersonsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Person is referenced */
export type PersonsRelationFilter = {
  createsComment?: InputMaybe<CommentsRelationFilter>;
  createsContent?: InputMaybe<ContentsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
};

/** RelationsFilter */
export type PersonsRelationsFilter = {
  createsComment?: InputMaybe<CommentsRelationFilter>;
  createsContent?: InputMaybe<ContentsRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  knownBy?: InputMaybe<AgentsRelationFilter>;
  knows?: InputMaybe<AgentsRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  representedBy?: InputMaybe<OnlineAccountsRelationFilter>;
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
  /** Return the CollabText for the given id, if it exists */
  collabText?: Maybe<CollabText>;
  /** Queries all CollabTexts matching the given filters */
  collabTexts: CollabTextConnection;
  /** Queries all CollabTexts matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  collabTextsBulk: Array<CollabTextConnection>;
  /** Return the Comment for the given id, if it exists */
  comment?: Maybe<Comment>;
  /** Return the CommentRating for the given id, if it exists */
  commentRating?: Maybe<CommentRating>;
  /** Queries all CommentRatings matching the given filters */
  commentRatings: CommentRatingConnection;
  /** Queries all CommentRatings matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  commentRatingsBulk: Array<CommentRatingConnection>;
  /** Queries all Comments matching the given filters */
  comments: CommentConnection;
  /** Queries all Comments matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  commentsBulk: Array<CommentConnection>;
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
  /** Queries all Persons matching the given filters */
  persons: PersonConnection;
  /** Queries all Persons matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  personsBulk: Array<PersonConnection>;
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
  /** Queries all Tasks matching the given filter. Filters regarding relations can be set via header. */
  tasks: TaskConnection;
  /** Queries all Tasks matching the given filter. Expect multiple relation filters set in the header, for each of them a connection will be returned (in the order of the relation filters). */
  tasksBulk: Array<TaskConnection>;
  /** Return the Thing for the given id, if it exists */
  thing?: Maybe<Thing>;
  /** Queries all Things matching the given filter */
  things: ThingConnection;
  /** Return the Topic for the given id, if it exists */
  topic?: Maybe<Topic>;
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
  id: Scalars['ID'];
};

export type QueryAccountsArgs = {
  filter?: InputMaybe<AccountsFilter>;
  orderBy: OrderAccountsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<AccountType>>;
};

export type QueryAddressArgs = {
  id: Scalars['ID'];
};

export type QueryAddressMatchArgs = {
  id: Scalars['ID'];
};

export type QueryAddressMatchesArgs = {
  criteria?: InputMaybe<AddressMatchesCriteria>;
};

export type QueryAddressScopeArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
};

export type QueryAgentsArgs = {
  filter?: InputMaybe<AgentsFilter>;
  orderBy: OrderAgentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<AgentsRelationsFilter>;
  type?: InputMaybe<Array<AgentType>>;
};

export type QueryArticleArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
};

export type QueryCollabTextArgs = {
  id: Scalars['ID'];
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

export type QueryCommentArgs = {
  id: Scalars['ID'];
};

export type QueryCommentRatingArgs = {
  id: Scalars['ID'];
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

export type QueryCommentsArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};

export type QueryCommentsBulkArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type QueryContentArgs = {
  id: Scalars['ID'];
};

export type QueryContentRatingArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
};

export type QueryDocumentsArgs = {
  filter?: InputMaybe<DocumentsFilter>;
  orderBy: OrderDocumentsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<DocumentType>>;
};

export type QueryFeedArgs = {
  id: Scalars['ID'];
};

export type QueryFeedsArgs = {
  filter?: InputMaybe<FeedsFilter>;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<FeedsRelationsFilter>;
  type?: InputMaybe<Array<FeedType>>;
};

export type QueryFileArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
};

export type QueryMembershipInviteArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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

export type QueryRatingArgs = {
  id: Scalars['ID'];
};

export type QueryRatingsArgs = {
  filter?: InputMaybe<RatingsFilter>;
  orderBy: OrderRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<RatingsRelationsFilter>;
  type?: InputMaybe<Array<RatingType>>;
};

export type QueryRoleArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
};

export type QueryTasksArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
};

export type QueryTasksBulkArgs = {
  filter?: InputMaybe<TasksFilter>;
  orderBy: OrderTasksBy;
  pagination?: InputMaybe<Pagination>;
};

export type QueryThingArgs = {
  id: Scalars['ID'];
};

export type QueryThingsArgs = {
  filter?: InputMaybe<ThingsFilter>;
  orderBy: OrderThingsBy;
  pagination?: InputMaybe<Pagination>;
  type?: InputMaybe<Array<ThingType>>;
};

export type QueryTopicArgs = {
  id: Scalars['ID'];
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
  id: Scalars['ID'];
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
  createdAt: Scalars['DateTime'];
  createdBy?: Maybe<Person>;
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type RatingConnection = Connection & {
  __typename?: 'RatingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<RatingEdge>;
  pageInfo: PageInfo;
};

export type RatingEdge = Edge & {
  __typename?: 'RatingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Rating;
};

export enum RatingType {
  CommentRating = 'COMMENT_RATING',
  ContentRating = 'CONTENT_RATING',
}

export type RatingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Rating is referenced */
export type RatingsRelationFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

/** RelationsFilter */
export type RatingsRelationsFilter = {
  createdBy?: InputMaybe<PersonsRelationFilter>;
};

/** Wraps multiple Accesses */
export type Role = Thing & {
  __typename?: 'Role';
  _permissions?: Maybe<Permissions>;
  _viewer: RoleViewer;
  createdAt: Scalars['DateTime'];
  defines: MembershipConnection;
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
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
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<RoleEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RoleEdge = Edge & {
  __typename?: 'RoleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
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
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Role is referenced */
export type RolesRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Task = Thing & {
  __typename?: 'Task';
  _permissions?: Maybe<Permissions>;
  _viewer: TaskViewer;
  completed: Scalars['Boolean'];
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  managedBy: GroupConnection;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type TaskManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TaskConnection = Connection & {
  __typename?: 'TaskConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<TaskEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TaskEdge = Edge & {
  __typename?: 'TaskEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Task;
};

export type TaskViewer = {
  __typename?: 'TaskViewer';
  managedBy: GroupConnection;
};

export type TaskViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

/** Possible filter fields when the Task is queried */
export type TasksFilter = {
  completedAt_eq?: InputMaybe<Scalars['DateTime']>;
  completedAt_gt?: InputMaybe<Scalars['DateTime']>;
  completedAt_gte?: InputMaybe<Scalars['DateTime']>;
  completedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  completedAt_lt?: InputMaybe<Scalars['DateTime']>;
  completedAt_lte?: InputMaybe<Scalars['DateTime']>;
  completedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  completedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  completed_eq?: InputMaybe<Scalars['Boolean']>;
  completed_not_eq?: InputMaybe<Scalars['Boolean']>;
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Task is referenced */
export type TasksRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Thing = {
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  updatedAt: Scalars['DateTime'];
};

export type ThingConnection = Connection & {
  __typename?: 'ThingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<ThingEdge>;
  pageInfo: PageInfo;
};

export type ThingEdge = Edge & {
  __typename?: 'ThingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Thing;
};

export enum ThingType {
  Address = 'ADDRESS',
  AddressScope = 'ADDRESS_SCOPE',
  Article = 'ARTICLE',
  Category = 'CATEGORY',
  CollabText = 'COLLAB_TEXT',
  Comment = 'COMMENT',
  CommentRating = 'COMMENT_RATING',
  ContentRating = 'CONTENT_RATING',
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
  Role = 'ROLE',
  Task = 'TASK',
  Topic = 'TOPIC',
  VideoMeeting = 'VIDEO_MEETING',
}

export type ThingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Thing is referenced */
export type ThingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

export type Topic = Content &
  Thing & {
    __typename?: 'Topic';
    _permissions?: Maybe<Permissions>;
    _viewer: TopicViewer;
    categorizedByCategory: CategoryConnection;
    categorizedByNetworkCategory: NetworkCategoryConnection;
    commentedBy: CommentConnection;
    createdAt: Scalars['DateTime'];
    createdByGroup?: Maybe<Group>;
    createdByPerson?: Maybe<Person>;
    curatedBy: TopicConnection;
    curates: ContentConnection;
    displayedBy: NetworkConnection;
    id: Scalars['ID'];
    imagedBy: ImageConnection;
    intro?: Maybe<Scalars['String']>;
    locatedByAddress?: Maybe<Address>;
    locatedByAddressScope: AddressScopeConnection;
    managedBy: GroupConnection;
    ratedBy: ContentRatingConnection;
    title: Scalars['String'];
    updatedAt: Scalars['DateTime'];
    visibility: Visibility;
    warning?: Maybe<Scalars['String']>;
  };

export type TopicCategorizedByCategoryArgs = {
  filter?: InputMaybe<CategoriesFilter>;
  orderBy: OrderCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicCategorizedByNetworkCategoryArgs = {
  filter?: InputMaybe<NetworkCategoriesFilter>;
  orderBy: OrderNetworkCategoriesBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicCuratedByArgs = {
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

export type TopicDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicLocatedByAddressScopeArgs = {
  filter?: InputMaybe<AddressScopesFilter>;
  orderBy: OrderAddressScopesBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicConnection = Connection & {
  __typename?: 'TopicConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<TopicEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type TopicEdge = Edge & {
  __typename?: 'TopicEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: Topic;
};

export type TopicViewer = ContentViewer & {
  __typename?: 'TopicViewer';
  commentedBy: CommentConnection;
  curatedBy: TopicConnection;
  curates: ContentConnection;
  displayedBy: NetworkConnection;
  imagedBy: ImageConnection;
  managedBy: GroupConnection;
  ratedBy: ContentRatingConnection;
};

export type TopicViewerCommentedByArgs = {
  filter?: InputMaybe<CommentsFilter>;
  orderBy: OrderCommentsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<CommentsRelationsFilter>;
};

export type TopicViewerCuratedByArgs = {
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

export type TopicViewerDisplayedByArgs = {
  filter?: InputMaybe<NetworksFilter>;
  orderBy: OrderNetworksBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<NetworksRelationsFilter>;
};

export type TopicViewerImagedByArgs = {
  filter?: InputMaybe<ImagesFilter>;
  orderBy: OrderImagesBy;
  pagination?: InputMaybe<Pagination>;
};

export type TopicViewerManagedByArgs = {
  filter?: InputMaybe<GroupsFilter>;
  orderBy: OrderGroupsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<GroupsRelationsFilter>;
};

export type TopicViewerRatedByArgs = {
  filter?: InputMaybe<ContentRatingsFilter>;
  orderBy: OrderContentRatingsBy;
  pagination?: InputMaybe<Pagination>;
  relationsFilter?: InputMaybe<ContentRatingsRelationsFilter>;
};

/** Possible filter fields when the Topic is queried */
export type TopicsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the Topic is referenced */
export type TopicsRelationFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

/** RelationsFilter */
export type TopicsRelationsFilter = {
  categorizedByCategory?: InputMaybe<CategoriesRelationFilter>;
  categorizedByNetworkCategory?: InputMaybe<NetworkCategoriesRelationFilter>;
  createdByGroup?: InputMaybe<GroupsRelationFilter>;
  createdByPerson?: InputMaybe<PersonsRelationFilter>;
  curatedBy?: InputMaybe<TopicsRelationFilter>;
  curates?: InputMaybe<ContentsRelationFilter>;
  displayedBy?: InputMaybe<NetworksRelationFilter>;
  imagedBy?: InputMaybe<ImagesRelationFilter>;
  locatedByAddress?: InputMaybe<AddressesRelationFilter>;
  locatedByAddressScope?: InputMaybe<AddressScopesRelationFilter>;
  managedBy?: InputMaybe<GroupsRelationFilter>;
};

export type UpdateArticle = {
  intro?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']>;
};

export type UpdateCategory = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateCollabText = {
  info?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateFile = {
  info?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateGroup = {
  contactInfo?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateImage = {
  info?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateImpulse = {
  intro?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']>;
};

export type UpdateMembershipInvite = {
  /** Allows accept or decline the invite. Accepted invites cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateMembershipRequest = {
  /** Allows accept or decline the request. Accepted requests cannot be declined afterwards. */
  isAccepted?: InputMaybe<Scalars['Boolean']>;
};

export type UpdateNetwork = {
  contactInfo?: InputMaybe<Scalars['String']>;
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
};

export type UpdateNetworkCategory = {
  name?: InputMaybe<Scalars['String']>;
};

export type UpdatePerson = {
  info?: InputMaybe<Scalars['String']>;
  intro?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type UpdateTask = {
  completed?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateTopic = {
  intro?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  visibility?: InputMaybe<Visibility>;
  warning?: InputMaybe<Scalars['String']>;
};

export type UpdateVideoMeeting = {
  text?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type VideoMeeting = Thing & {
  __typename?: 'VideoMeeting';
  _permissions?: Maybe<Permissions>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  managedBy?: Maybe<Group>;
  text?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type VideoMeetingConnection = Connection & {
  __typename?: 'VideoMeetingConnection';
  /** Count of filtered result set without considering pagination arguments */
  count: Scalars['Int'];
  /** A list of edges. */
  edges: Array<VideoMeetingEdge>;
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type VideoMeetingEdge = Edge & {
  __typename?: 'VideoMeetingEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['String']>;
  /** The item at the end of the edge. */
  node: VideoMeeting;
};

/** Possible filter fields when the VideoMeeting is queried */
export type VideoMeetingsFilter = {
  createdAt_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_gt?: InputMaybe<Scalars['DateTime']>;
  createdAt_gte?: InputMaybe<Scalars['DateTime']>;
  createdAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: InputMaybe<Scalars['DateTime']>;
  createdAt_lte?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
  id_eq?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_eq?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  title_contains?: InputMaybe<Scalars['String']>;
  title_eq?: InputMaybe<Scalars['String']>;
  title_in?: InputMaybe<Array<Scalars['String']>>;
  title_not_contains?: InputMaybe<Scalars['String']>;
  title_not_eq?: InputMaybe<Scalars['String']>;
  title_not_in?: InputMaybe<Array<Scalars['String']>>;
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_in?: InputMaybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>;
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_eq?: InputMaybe<Scalars['DateTime']>;
  updatedAt_not_in?: InputMaybe<Array<Scalars['DateTime']>>;
};

/** Possible filter fields when the VideoMeeting is referenced */
export type VideoMeetingsRelationFilter = {
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
};

/** Represents the visibility setting of a single entity - not to be confused with the visibility settings applying to the whole entity type. */
export enum Visibility {
  Network = 'NETWORK',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type ArticleQueryVariables = Exact<{
  id: Scalars['ID'];
  commentedByCursor?: InputMaybe<Scalars['String']>;
}>;

export type ArticleQuery = {
  __typename?: 'Query';
  article?: {
    __typename: 'Article';
    title: string;
    intro?: string | null;
    text: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    createdByPerson?: {
      __typename: 'Person';
      info?: string | null;
      id: string;
      name: string;
      imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
    } | null;
    createdByGroup?: {
      __typename: 'Group';
      info?: string | null;
      id: string;
      name: string;
      imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
    } | null;
    imagedBy: {
      __typename: 'ImageConnection';
      edges: Array<{
        __typename: 'ImageEdge';
        node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
      }>;
    };
    categorizedByCategory: {
      __typename: 'CategoryConnection';
      edges: Array<{
        __typename: 'CategoryEdge';
        node: { __typename: 'Category'; id: string; name: string };
      }>;
    };
    locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
    ratedBy: {
      __typename: 'ContentRatingConnection';
      count: number;
      edges: Array<{
        __typename: 'ContentRatingEdge';
        node: {
          __typename: 'ContentRating';
          id: string;
          createdBy?: {
            __typename: 'Person';
            id: string;
            name: string;
            imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
          } | null;
        };
      }>;
    };
    commentedBy: {
      __typename: 'CommentConnection';
      count: number;
      edges: Array<{
        __typename: 'CommentEdge';
        node: {
          __typename: 'Comment';
          id: string;
          createdAt: Date;
          text: string;
          createdBy?: {
            __typename: 'Person';
            info?: string | null;
            id: string;
            name: string;
            imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
          } | null;
        };
      }>;
      pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
    };
    curatedBy: {
      __typename: 'TopicConnection';
      edges: Array<{
        __typename: 'TopicEdge';
        node: {
          __typename: 'Topic';
          title: string;
          warning?: string | null;
          visibility: Visibility;
          id: string;
          createdAt: Date;
          updatedAt: Date;
          displayedBy: {
            __typename: 'NetworkConnection';
            edges: Array<{
              __typename: 'NetworkEdge';
              node: { __typename: 'Network'; id: string; name: string };
            }>;
            pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
          };
          imagedBy: {
            __typename: 'ImageConnection';
            edges: Array<{
              __typename: 'ImageEdge';
              node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
            }>;
          };
          createdByPerson?: {
            __typename: 'Person';
            info?: string | null;
            id: string;
            name: string;
            imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
          } | null;
          createdByGroup?: {
            __typename: 'Group';
            info?: string | null;
            id: string;
            name: string;
            imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
          } | null;
          ratingStats: { __typename: 'ContentRatingConnection'; count: number };
          commentStats: { __typename: 'CommentConnection'; count: number };
          managedBy: {
            __typename: 'GroupConnection';
            edges: Array<{
              __typename: 'GroupEdge';
              node: {
                __typename: 'Group';
                supervisedBy?: {
                  __typename: 'Network';
                  id: string;
                  name: string;
                  logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                } | null;
              };
            }>;
          };
          categorizedByCategory: {
            __typename: 'CategoryConnection';
            edges: Array<{
              __typename: 'CategoryEdge';
              node: { __typename: 'Category'; id: string; name: string };
            }>;
          };
          locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
          _viewer: {
            __typename: 'TopicViewer';
            ratedBy: { __typename: 'ContentRatingConnection'; count: number };
            commentedBy: { __typename: 'CommentConnection'; count: number };
          };
        };
      }>;
    };
    _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
    _viewer: {
      __typename: 'ArticleViewer';
      ratedBy: { __typename: 'ContentRatingConnection'; count: number };
      commentedBy: { __typename: 'CommentConnection'; count: number };
    };
  } | null;
};

export type ArticleFragment = {
  __typename: 'Article';
  title: string;
  intro?: string | null;
  text: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  ratedBy: {
    __typename: 'ContentRatingConnection';
    count: number;
    edges: Array<{
      __typename: 'ContentRatingEdge';
      node: {
        __typename: 'ContentRating';
        id: string;
        createdBy?: {
          __typename: 'Person';
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
  commentedBy: {
    __typename: 'CommentConnection';
    count: number;
    edges: Array<{
      __typename: 'CommentEdge';
      node: {
        __typename: 'Comment';
        id: string;
        createdAt: Date;
        text: string;
        createdBy?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
  curatedBy: {
    __typename: 'TopicConnection';
    edges: Array<{
      __typename: 'TopicEdge';
      node: {
        __typename: 'Topic';
        title: string;
        warning?: string | null;
        visibility: Visibility;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayedBy: {
          __typename: 'NetworkConnection';
          edges: Array<{
            __typename: 'NetworkEdge';
            node: { __typename: 'Network'; id: string; name: string };
          }>;
          pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
        };
        imagedBy: {
          __typename: 'ImageConnection';
          edges: Array<{
            __typename: 'ImageEdge';
            node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
          }>;
        };
        createdByPerson?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        createdByGroup?: {
          __typename: 'Group';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        ratingStats: { __typename: 'ContentRatingConnection'; count: number };
        commentStats: { __typename: 'CommentConnection'; count: number };
        managedBy: {
          __typename: 'GroupConnection';
          edges: Array<{
            __typename: 'GroupEdge';
            node: {
              __typename: 'Group';
              supervisedBy?: {
                __typename: 'Network';
                id: string;
                name: string;
                logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
              } | null;
            };
          }>;
        };
        categorizedByCategory: {
          __typename: 'CategoryConnection';
          edges: Array<{
            __typename: 'CategoryEdge';
            node: { __typename: 'Category'; id: string; name: string };
          }>;
        };
        locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
        _viewer: {
          __typename: 'TopicViewer';
          ratedBy: { __typename: 'ContentRatingConnection'; count: number };
          commentedBy: { __typename: 'CommentConnection'; count: number };
        };
      };
    }>;
  };
  _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
  _viewer: {
    __typename: 'ArticleViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentMeta_Article_Fragment = {
  __typename: 'Article';
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _viewer: {
    __typename: 'ArticleViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentMeta_Impulse_Fragment = {
  __typename: 'Impulse';
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _viewer: {
    __typename: 'ImpulseViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentMeta_Topic_Fragment = {
  __typename: 'Topic';
  id: string;
  createdAt: Date;
  updatedAt: Date;
  _viewer: {
    __typename: 'TopicViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

export type ContentMetaFragment =
  | ContentMeta_Article_Fragment
  | ContentMeta_Impulse_Fragment
  | ContentMeta_Topic_Fragment;

type ContentState_Article_Fragment = {
  __typename: 'Article';
  _viewer: {
    __typename: 'ArticleViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentState_Impulse_Fragment = {
  __typename: 'Impulse';
  _viewer: {
    __typename: 'ImpulseViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentState_Topic_Fragment = {
  __typename: 'Topic';
  _viewer: {
    __typename: 'TopicViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

export type ContentStateFragment =
  | ContentState_Article_Fragment
  | ContentState_Impulse_Fragment
  | ContentState_Topic_Fragment;

type ContentAuthor_Article_Fragment = {
  __typename: 'Article';
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

type ContentAuthor_Impulse_Fragment = {
  __typename: 'Impulse';
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

type ContentAuthor_Topic_Fragment = {
  __typename: 'Topic';
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

export type ContentAuthorFragment =
  | ContentAuthor_Article_Fragment
  | ContentAuthor_Impulse_Fragment
  | ContentAuthor_Topic_Fragment;

type AgentSignature_Group_Fragment = {
  __typename: 'Group';
  info?: string | null;
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

type AgentSignature_Network_Fragment = {
  __typename: 'Network';
  info?: string | null;
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

type AgentSignature_Person_Fragment = {
  __typename: 'Person';
  info?: string | null;
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

export type AgentSignatureFragment =
  | AgentSignature_Group_Fragment
  | AgentSignature_Network_Fragment
  | AgentSignature_Person_Fragment;

type AgentAvatar_Group_Fragment = {
  __typename: 'Group';
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

type AgentAvatar_Network_Fragment = {
  __typename: 'Network';
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

type AgentAvatar_Person_Fragment = {
  __typename: 'Person';
  id: string;
  name: string;
  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
};

export type AgentAvatarFragment =
  | AgentAvatar_Group_Fragment
  | AgentAvatar_Network_Fragment
  | AgentAvatar_Person_Fragment;

type Document_File_Fragment = { __typename: 'File'; id: string; resourceLocation?: string | null };

type Document_Image_Fragment = { __typename: 'Image'; id: string; resourceLocation?: string | null };

export type DocumentFragment = Document_File_Fragment | Document_Image_Fragment;

type ContentImages_Article_Fragment = {
  __typename: 'Article';
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
};

type ContentImages_Impulse_Fragment = {
  __typename: 'Impulse';
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
};

type ContentImages_Topic_Fragment = {
  __typename: 'Topic';
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
};

export type ContentImagesFragment =
  | ContentImages_Article_Fragment
  | ContentImages_Impulse_Fragment
  | ContentImages_Topic_Fragment;

type ContentCategories_Article_Fragment = {
  __typename: 'Article';
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
};

type ContentCategories_Impulse_Fragment = {
  __typename: 'Impulse';
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
};

type ContentCategories_Topic_Fragment = {
  __typename: 'Topic';
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
};

export type ContentCategoriesFragment =
  | ContentCategories_Article_Fragment
  | ContentCategories_Impulse_Fragment
  | ContentCategories_Topic_Fragment;

export type CategoryFragment = { __typename: 'Category'; id: string; name: string };

type ContentLocation_Article_Fragment = {
  __typename: 'Article';
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
};

type ContentLocation_Impulse_Fragment = {
  __typename: 'Impulse';
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
};

type ContentLocation_Topic_Fragment = {
  __typename: 'Topic';
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
};

export type ContentLocationFragment =
  | ContentLocation_Article_Fragment
  | ContentLocation_Impulse_Fragment
  | ContentLocation_Topic_Fragment;

export type AddressFragment = { __typename: 'Address'; id: string; name?: string | null };

type ContentRatings_Article_Fragment = {
  __typename: 'Article';
  ratedBy: {
    __typename: 'ContentRatingConnection';
    count: number;
    edges: Array<{
      __typename: 'ContentRatingEdge';
      node: {
        __typename: 'ContentRating';
        id: string;
        createdBy?: {
          __typename: 'Person';
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

type ContentRatings_Impulse_Fragment = {
  __typename: 'Impulse';
  ratedBy: {
    __typename: 'ContentRatingConnection';
    count: number;
    edges: Array<{
      __typename: 'ContentRatingEdge';
      node: {
        __typename: 'ContentRating';
        id: string;
        createdBy?: {
          __typename: 'Person';
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

type ContentRatings_Topic_Fragment = {
  __typename: 'Topic';
  ratedBy: {
    __typename: 'ContentRatingConnection';
    count: number;
    edges: Array<{
      __typename: 'ContentRatingEdge';
      node: {
        __typename: 'ContentRating';
        id: string;
        createdBy?: {
          __typename: 'Person';
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

export type ContentRatingsFragment =
  | ContentRatings_Article_Fragment
  | ContentRatings_Impulse_Fragment
  | ContentRatings_Topic_Fragment;

type Rating_CommentRating_Fragment = {
  __typename: 'CommentRating';
  id: string;
  createdBy?: {
    __typename: 'Person';
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

type Rating_ContentRating_Fragment = {
  __typename: 'ContentRating';
  id: string;
  createdBy?: {
    __typename: 'Person';
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

export type RatingFragment = Rating_CommentRating_Fragment | Rating_ContentRating_Fragment;

type ContentComments_Article_Fragment = {
  __typename: 'Article';
  commentedBy: {
    __typename: 'CommentConnection';
    count: number;
    edges: Array<{
      __typename: 'CommentEdge';
      node: {
        __typename: 'Comment';
        id: string;
        createdAt: Date;
        text: string;
        createdBy?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
};

type ContentComments_Impulse_Fragment = {
  __typename: 'Impulse';
  commentedBy: {
    __typename: 'CommentConnection';
    count: number;
    edges: Array<{
      __typename: 'CommentEdge';
      node: {
        __typename: 'Comment';
        id: string;
        createdAt: Date;
        text: string;
        createdBy?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
};

type ContentComments_Topic_Fragment = {
  __typename: 'Topic';
  commentedBy: {
    __typename: 'CommentConnection';
    count: number;
    edges: Array<{
      __typename: 'CommentEdge';
      node: {
        __typename: 'Comment';
        id: string;
        createdAt: Date;
        text: string;
        createdBy?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
};

export type ContentCommentsFragment =
  | ContentComments_Article_Fragment
  | ContentComments_Impulse_Fragment
  | ContentComments_Topic_Fragment;

export type CommentFragment = {
  __typename: 'Comment';
  id: string;
  createdAt: Date;
  text: string;
  createdBy?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

export type CommentAuthorFragment = {
  __typename: 'Comment';
  createdBy?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
};

type ContentTopics_Article_Fragment = {
  __typename: 'Article';
  curatedBy: {
    __typename: 'TopicConnection';
    edges: Array<{
      __typename: 'TopicEdge';
      node: {
        __typename: 'Topic';
        title: string;
        warning?: string | null;
        visibility: Visibility;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayedBy: {
          __typename: 'NetworkConnection';
          edges: Array<{
            __typename: 'NetworkEdge';
            node: { __typename: 'Network'; id: string; name: string };
          }>;
          pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
        };
        imagedBy: {
          __typename: 'ImageConnection';
          edges: Array<{
            __typename: 'ImageEdge';
            node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
          }>;
        };
        createdByPerson?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        createdByGroup?: {
          __typename: 'Group';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        ratingStats: { __typename: 'ContentRatingConnection'; count: number };
        commentStats: { __typename: 'CommentConnection'; count: number };
        managedBy: {
          __typename: 'GroupConnection';
          edges: Array<{
            __typename: 'GroupEdge';
            node: {
              __typename: 'Group';
              supervisedBy?: {
                __typename: 'Network';
                id: string;
                name: string;
                logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
              } | null;
            };
          }>;
        };
        categorizedByCategory: {
          __typename: 'CategoryConnection';
          edges: Array<{
            __typename: 'CategoryEdge';
            node: { __typename: 'Category'; id: string; name: string };
          }>;
        };
        locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
        _viewer: {
          __typename: 'TopicViewer';
          ratedBy: { __typename: 'ContentRatingConnection'; count: number };
          commentedBy: { __typename: 'CommentConnection'; count: number };
        };
      };
    }>;
  };
};

type ContentTopics_Impulse_Fragment = {
  __typename: 'Impulse';
  curatedBy: {
    __typename: 'TopicConnection';
    edges: Array<{
      __typename: 'TopicEdge';
      node: {
        __typename: 'Topic';
        title: string;
        warning?: string | null;
        visibility: Visibility;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayedBy: {
          __typename: 'NetworkConnection';
          edges: Array<{
            __typename: 'NetworkEdge';
            node: { __typename: 'Network'; id: string; name: string };
          }>;
          pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
        };
        imagedBy: {
          __typename: 'ImageConnection';
          edges: Array<{
            __typename: 'ImageEdge';
            node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
          }>;
        };
        createdByPerson?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        createdByGroup?: {
          __typename: 'Group';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        ratingStats: { __typename: 'ContentRatingConnection'; count: number };
        commentStats: { __typename: 'CommentConnection'; count: number };
        managedBy: {
          __typename: 'GroupConnection';
          edges: Array<{
            __typename: 'GroupEdge';
            node: {
              __typename: 'Group';
              supervisedBy?: {
                __typename: 'Network';
                id: string;
                name: string;
                logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
              } | null;
            };
          }>;
        };
        categorizedByCategory: {
          __typename: 'CategoryConnection';
          edges: Array<{
            __typename: 'CategoryEdge';
            node: { __typename: 'Category'; id: string; name: string };
          }>;
        };
        locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
        _viewer: {
          __typename: 'TopicViewer';
          ratedBy: { __typename: 'ContentRatingConnection'; count: number };
          commentedBy: { __typename: 'CommentConnection'; count: number };
        };
      };
    }>;
  };
};

type ContentTopics_Topic_Fragment = {
  __typename: 'Topic';
  curatedBy: {
    __typename: 'TopicConnection';
    edges: Array<{
      __typename: 'TopicEdge';
      node: {
        __typename: 'Topic';
        title: string;
        warning?: string | null;
        visibility: Visibility;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        displayedBy: {
          __typename: 'NetworkConnection';
          edges: Array<{
            __typename: 'NetworkEdge';
            node: { __typename: 'Network'; id: string; name: string };
          }>;
          pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
        };
        imagedBy: {
          __typename: 'ImageConnection';
          edges: Array<{
            __typename: 'ImageEdge';
            node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
          }>;
        };
        createdByPerson?: {
          __typename: 'Person';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        createdByGroup?: {
          __typename: 'Group';
          info?: string | null;
          id: string;
          name: string;
          imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
        } | null;
        ratingStats: { __typename: 'ContentRatingConnection'; count: number };
        commentStats: { __typename: 'CommentConnection'; count: number };
        managedBy: {
          __typename: 'GroupConnection';
          edges: Array<{
            __typename: 'GroupEdge';
            node: {
              __typename: 'Group';
              supervisedBy?: {
                __typename: 'Network';
                id: string;
                name: string;
                logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
              } | null;
            };
          }>;
        };
        categorizedByCategory: {
          __typename: 'CategoryConnection';
          edges: Array<{
            __typename: 'CategoryEdge';
            node: { __typename: 'Category'; id: string; name: string };
          }>;
        };
        locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
        _viewer: {
          __typename: 'TopicViewer';
          ratedBy: { __typename: 'ContentRatingConnection'; count: number };
          commentedBy: { __typename: 'CommentConnection'; count: number };
        };
      };
    }>;
  };
};

export type ContentTopicsFragment =
  | ContentTopics_Article_Fragment
  | ContentTopics_Impulse_Fragment
  | ContentTopics_Topic_Fragment;

export type TopicTeaserFragment = {
  __typename: 'Topic';
  title: string;
  warning?: string | null;
  visibility: Visibility;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayedBy: {
    __typename: 'NetworkConnection';
    edges: Array<{ __typename: 'NetworkEdge'; node: { __typename: 'Network'; id: string; name: string } }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  _viewer: {
    __typename: 'TopicViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentSummary_Article_Fragment = {
  __typename: 'Article';
  title: string;
  warning?: string | null;
  visibility: Visibility;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayedBy: {
    __typename: 'NetworkConnection';
    edges: Array<{ __typename: 'NetworkEdge'; node: { __typename: 'Network'; id: string; name: string } }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  _viewer: {
    __typename: 'ArticleViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentSummary_Impulse_Fragment = {
  __typename: 'Impulse';
  title: string;
  warning?: string | null;
  visibility: Visibility;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayedBy: {
    __typename: 'NetworkConnection';
    edges: Array<{ __typename: 'NetworkEdge'; node: { __typename: 'Network'; id: string; name: string } }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  _viewer: {
    __typename: 'ImpulseViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

type ContentSummary_Topic_Fragment = {
  __typename: 'Topic';
  title: string;
  warning?: string | null;
  visibility: Visibility;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayedBy: {
    __typename: 'NetworkConnection';
    edges: Array<{ __typename: 'NetworkEdge'; node: { __typename: 'Network'; id: string; name: string } }>;
    pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
  };
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByGroup?: {
    __typename: 'Group';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  _viewer: {
    __typename: 'TopicViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

export type ContentSummaryFragment =
  | ContentSummary_Article_Fragment
  | ContentSummary_Impulse_Fragment
  | ContentSummary_Topic_Fragment;

type ContentStats_Article_Fragment = {
  __typename: 'Article';
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
};

type ContentStats_Impulse_Fragment = {
  __typename: 'Impulse';
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
};

type ContentStats_Topic_Fragment = {
  __typename: 'Topic';
  ratingStats: { __typename: 'ContentRatingConnection'; count: number };
  commentStats: { __typename: 'CommentConnection'; count: number };
};

export type ContentStatsFragment =
  | ContentStats_Article_Fragment
  | ContentStats_Impulse_Fragment
  | ContentStats_Topic_Fragment;

type ContentNetworks_Article_Fragment = {
  __typename: 'Article';
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

type ContentNetworks_Impulse_Fragment = {
  __typename: 'Impulse';
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

type ContentNetworks_Topic_Fragment = {
  __typename: 'Topic';
  managedBy: {
    __typename: 'GroupConnection';
    edges: Array<{
      __typename: 'GroupEdge';
      node: {
        __typename: 'Group';
        supervisedBy?: {
          __typename: 'Network';
          id: string;
          name: string;
          logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
        } | null;
      };
    }>;
  };
};

export type ContentNetworksFragment =
  | ContentNetworks_Article_Fragment
  | ContentNetworks_Impulse_Fragment
  | ContentNetworks_Topic_Fragment;

export type MinimalNetworkInfoFragment = { __typename: 'Network'; id: string; name: string };

type PageInfo_AccountConnection_Fragment = {
  __typename: 'AccountConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_AddressConnection_Fragment = {
  __typename: 'AddressConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_AddressScopeConnection_Fragment = {
  __typename: 'AddressScopeConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_AgentConnection_Fragment = {
  __typename: 'AgentConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ArticleConnection_Fragment = {
  __typename: 'ArticleConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_CategoryConnection_Fragment = {
  __typename: 'CategoryConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_CollabTextConnection_Fragment = {
  __typename: 'CollabTextConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_CommentConnection_Fragment = {
  __typename: 'CommentConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_CommentRatingConnection_Fragment = {
  __typename: 'CommentRatingConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ContentConnection_Fragment = {
  __typename: 'ContentConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ContentRatingConnection_Fragment = {
  __typename: 'ContentRatingConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_DocumentConnection_Fragment = {
  __typename: 'DocumentConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_FeedConnection_Fragment = {
  __typename: 'FeedConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_FileConnection_Fragment = {
  __typename: 'FileConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_GroupConnection_Fragment = {
  __typename: 'GroupConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ImageConnection_Fragment = {
  __typename: 'ImageConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ImpulseConnection_Fragment = {
  __typename: 'ImpulseConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_MembershipConnection_Fragment = {
  __typename: 'MembershipConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_MembershipInviteConnection_Fragment = {
  __typename: 'MembershipInviteConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_MembershipRequestConnection_Fragment = {
  __typename: 'MembershipRequestConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_NetworkCategoryConnection_Fragment = {
  __typename: 'NetworkCategoryConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_NetworkConnection_Fragment = {
  __typename: 'NetworkConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_OnlineAccountConnection_Fragment = {
  __typename: 'OnlineAccountConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_PersonConnection_Fragment = {
  __typename: 'PersonConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_RatingConnection_Fragment = {
  __typename: 'RatingConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_RoleConnection_Fragment = {
  __typename: 'RoleConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_TaskConnection_Fragment = {
  __typename: 'TaskConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_ThingConnection_Fragment = {
  __typename: 'ThingConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_TopicConnection_Fragment = {
  __typename: 'TopicConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

type PageInfo_VideoMeetingConnection_Fragment = {
  __typename: 'VideoMeetingConnection';
  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
};

export type PageInfoFragment =
  | PageInfo_AccountConnection_Fragment
  | PageInfo_AddressConnection_Fragment
  | PageInfo_AddressScopeConnection_Fragment
  | PageInfo_AgentConnection_Fragment
  | PageInfo_ArticleConnection_Fragment
  | PageInfo_CategoryConnection_Fragment
  | PageInfo_CollabTextConnection_Fragment
  | PageInfo_CommentConnection_Fragment
  | PageInfo_CommentRatingConnection_Fragment
  | PageInfo_ContentConnection_Fragment
  | PageInfo_ContentRatingConnection_Fragment
  | PageInfo_DocumentConnection_Fragment
  | PageInfo_FeedConnection_Fragment
  | PageInfo_FileConnection_Fragment
  | PageInfo_GroupConnection_Fragment
  | PageInfo_ImageConnection_Fragment
  | PageInfo_ImpulseConnection_Fragment
  | PageInfo_MembershipConnection_Fragment
  | PageInfo_MembershipInviteConnection_Fragment
  | PageInfo_MembershipRequestConnection_Fragment
  | PageInfo_NetworkCategoryConnection_Fragment
  | PageInfo_NetworkConnection_Fragment
  | PageInfo_OnlineAccountConnection_Fragment
  | PageInfo_PersonConnection_Fragment
  | PageInfo_RatingConnection_Fragment
  | PageInfo_RoleConnection_Fragment
  | PageInfo_TaskConnection_Fragment
  | PageInfo_ThingConnection_Fragment
  | PageInfo_TopicConnection_Fragment
  | PageInfo_VideoMeetingConnection_Fragment;

type ContentPermissions_Article_Fragment = {
  __typename: 'Article';
  _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
};

type ContentPermissions_Impulse_Fragment = {
  __typename: 'Impulse';
  _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
};

type ContentPermissions_Topic_Fragment = {
  __typename: 'Topic';
  _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
};

export type ContentPermissionsFragment =
  | ContentPermissions_Article_Fragment
  | ContentPermissions_Impulse_Fragment
  | ContentPermissions_Topic_Fragment;

export type TopicQueryVariables = Exact<{
  id: Scalars['ID'];
}>;

export type TopicQuery = {
  __typename?: 'Query';
  topic?: {
    __typename: 'Topic';
    title: string;
    intro?: string | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    curates: {
      __typename: 'ContentConnection';
      edges: Array<{
        __typename: 'ContentEdge';
        node:
          | {
              __typename: 'Article';
              title: string;
              warning?: string | null;
              visibility: Visibility;
              id: string;
              createdAt: Date;
              updatedAt: Date;
              displayedBy: {
                __typename: 'NetworkConnection';
                edges: Array<{
                  __typename: 'NetworkEdge';
                  node: { __typename: 'Network'; id: string; name: string };
                }>;
                pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
              };
              imagedBy: {
                __typename: 'ImageConnection';
                edges: Array<{
                  __typename: 'ImageEdge';
                  node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
                }>;
              };
              createdByPerson?: {
                __typename: 'Person';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              createdByGroup?: {
                __typename: 'Group';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              ratingStats: { __typename: 'ContentRatingConnection'; count: number };
              commentStats: { __typename: 'CommentConnection'; count: number };
              managedBy: {
                __typename: 'GroupConnection';
                edges: Array<{
                  __typename: 'GroupEdge';
                  node: {
                    __typename: 'Group';
                    supervisedBy?: {
                      __typename: 'Network';
                      id: string;
                      name: string;
                      logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                    } | null;
                  };
                }>;
              };
              categorizedByCategory: {
                __typename: 'CategoryConnection';
                edges: Array<{
                  __typename: 'CategoryEdge';
                  node: { __typename: 'Category'; id: string; name: string };
                }>;
              };
              locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
              _viewer: {
                __typename: 'ArticleViewer';
                ratedBy: { __typename: 'ContentRatingConnection'; count: number };
                commentedBy: { __typename: 'CommentConnection'; count: number };
              };
            }
          | {
              __typename: 'Impulse';
              title: string;
              warning?: string | null;
              visibility: Visibility;
              id: string;
              createdAt: Date;
              updatedAt: Date;
              displayedBy: {
                __typename: 'NetworkConnection';
                edges: Array<{
                  __typename: 'NetworkEdge';
                  node: { __typename: 'Network'; id: string; name: string };
                }>;
                pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
              };
              imagedBy: {
                __typename: 'ImageConnection';
                edges: Array<{
                  __typename: 'ImageEdge';
                  node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
                }>;
              };
              createdByPerson?: {
                __typename: 'Person';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              createdByGroup?: {
                __typename: 'Group';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              ratingStats: { __typename: 'ContentRatingConnection'; count: number };
              commentStats: { __typename: 'CommentConnection'; count: number };
              managedBy: {
                __typename: 'GroupConnection';
                edges: Array<{
                  __typename: 'GroupEdge';
                  node: {
                    __typename: 'Group';
                    supervisedBy?: {
                      __typename: 'Network';
                      id: string;
                      name: string;
                      logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                    } | null;
                  };
                }>;
              };
              categorizedByCategory: {
                __typename: 'CategoryConnection';
                edges: Array<{
                  __typename: 'CategoryEdge';
                  node: { __typename: 'Category'; id: string; name: string };
                }>;
              };
              locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
              _viewer: {
                __typename: 'ImpulseViewer';
                ratedBy: { __typename: 'ContentRatingConnection'; count: number };
                commentedBy: { __typename: 'CommentConnection'; count: number };
              };
            }
          | {
              __typename: 'Topic';
              title: string;
              warning?: string | null;
              visibility: Visibility;
              id: string;
              createdAt: Date;
              updatedAt: Date;
              displayedBy: {
                __typename: 'NetworkConnection';
                edges: Array<{
                  __typename: 'NetworkEdge';
                  node: { __typename: 'Network'; id: string; name: string };
                }>;
                pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
              };
              imagedBy: {
                __typename: 'ImageConnection';
                edges: Array<{
                  __typename: 'ImageEdge';
                  node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
                }>;
              };
              createdByPerson?: {
                __typename: 'Person';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              createdByGroup?: {
                __typename: 'Group';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              ratingStats: { __typename: 'ContentRatingConnection'; count: number };
              commentStats: { __typename: 'CommentConnection'; count: number };
              managedBy: {
                __typename: 'GroupConnection';
                edges: Array<{
                  __typename: 'GroupEdge';
                  node: {
                    __typename: 'Group';
                    supervisedBy?: {
                      __typename: 'Network';
                      id: string;
                      name: string;
                      logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                    } | null;
                  };
                }>;
              };
              categorizedByCategory: {
                __typename: 'CategoryConnection';
                edges: Array<{
                  __typename: 'CategoryEdge';
                  node: { __typename: 'Category'; id: string; name: string };
                }>;
              };
              locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
              _viewer: {
                __typename: 'TopicViewer';
                ratedBy: { __typename: 'ContentRatingConnection'; count: number };
                commentedBy: { __typename: 'CommentConnection'; count: number };
              };
            };
      }>;
    };
    createdByGroup?: {
      __typename: 'Group';
      intro?: string | null;
      info?: string | null;
      id: string;
      name: string;
      creates: {
        __typename: 'ContentConnection';
        edges: Array<{
          __typename: 'ContentEdge';
          node:
            | { __typename: 'Article' }
            | { __typename: 'Impulse' }
            | {
                __typename: 'Topic';
                title: string;
                warning?: string | null;
                visibility: Visibility;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                displayedBy: {
                  __typename: 'NetworkConnection';
                  edges: Array<{
                    __typename: 'NetworkEdge';
                    node: { __typename: 'Network'; id: string; name: string };
                  }>;
                  pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
                };
                imagedBy: {
                  __typename: 'ImageConnection';
                  edges: Array<{
                    __typename: 'ImageEdge';
                    node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
                  }>;
                };
                createdByPerson?: {
                  __typename: 'Person';
                  info?: string | null;
                  id: string;
                  name: string;
                  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
                } | null;
                createdByGroup?: {
                  __typename: 'Group';
                  info?: string | null;
                  id: string;
                  name: string;
                  imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
                } | null;
                ratingStats: { __typename: 'ContentRatingConnection'; count: number };
                commentStats: { __typename: 'CommentConnection'; count: number };
                managedBy: {
                  __typename: 'GroupConnection';
                  edges: Array<{
                    __typename: 'GroupEdge';
                    node: {
                      __typename: 'Group';
                      supervisedBy?: {
                        __typename: 'Network';
                        id: string;
                        name: string;
                        logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                      } | null;
                    };
                  }>;
                };
                categorizedByCategory: {
                  __typename: 'CategoryConnection';
                  edges: Array<{
                    __typename: 'CategoryEdge';
                    node: { __typename: 'Category'; id: string; name: string };
                  }>;
                };
                locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
                _viewer: {
                  __typename: 'TopicViewer';
                  ratedBy: { __typename: 'ContentRatingConnection'; count: number };
                  commentedBy: { __typename: 'CommentConnection'; count: number };
                };
              };
        }>;
      };
      imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
    } | null;
    createdByPerson?: {
      __typename: 'Person';
      info?: string | null;
      id: string;
      name: string;
      imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
    } | null;
    imagedBy: {
      __typename: 'ImageConnection';
      edges: Array<{
        __typename: 'ImageEdge';
        node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
      }>;
    };
    categorizedByCategory: {
      __typename: 'CategoryConnection';
      edges: Array<{
        __typename: 'CategoryEdge';
        node: { __typename: 'Category'; id: string; name: string };
      }>;
    };
    locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
    _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
    _viewer: {
      __typename: 'TopicViewer';
      ratedBy: { __typename: 'ContentRatingConnection'; count: number };
      commentedBy: { __typename: 'CommentConnection'; count: number };
    };
  } | null;
};

export type TopicFragment = {
  __typename: 'Topic';
  title: string;
  intro?: string | null;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  curates: {
    __typename: 'ContentConnection';
    edges: Array<{
      __typename: 'ContentEdge';
      node:
        | {
            __typename: 'Article';
            title: string;
            warning?: string | null;
            visibility: Visibility;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            displayedBy: {
              __typename: 'NetworkConnection';
              edges: Array<{
                __typename: 'NetworkEdge';
                node: { __typename: 'Network'; id: string; name: string };
              }>;
              pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
            };
            imagedBy: {
              __typename: 'ImageConnection';
              edges: Array<{
                __typename: 'ImageEdge';
                node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
              }>;
            };
            createdByPerson?: {
              __typename: 'Person';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            createdByGroup?: {
              __typename: 'Group';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            ratingStats: { __typename: 'ContentRatingConnection'; count: number };
            commentStats: { __typename: 'CommentConnection'; count: number };
            managedBy: {
              __typename: 'GroupConnection';
              edges: Array<{
                __typename: 'GroupEdge';
                node: {
                  __typename: 'Group';
                  supervisedBy?: {
                    __typename: 'Network';
                    id: string;
                    name: string;
                    logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                  } | null;
                };
              }>;
            };
            categorizedByCategory: {
              __typename: 'CategoryConnection';
              edges: Array<{
                __typename: 'CategoryEdge';
                node: { __typename: 'Category'; id: string; name: string };
              }>;
            };
            locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
            _viewer: {
              __typename: 'ArticleViewer';
              ratedBy: { __typename: 'ContentRatingConnection'; count: number };
              commentedBy: { __typename: 'CommentConnection'; count: number };
            };
          }
        | {
            __typename: 'Impulse';
            title: string;
            warning?: string | null;
            visibility: Visibility;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            displayedBy: {
              __typename: 'NetworkConnection';
              edges: Array<{
                __typename: 'NetworkEdge';
                node: { __typename: 'Network'; id: string; name: string };
              }>;
              pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
            };
            imagedBy: {
              __typename: 'ImageConnection';
              edges: Array<{
                __typename: 'ImageEdge';
                node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
              }>;
            };
            createdByPerson?: {
              __typename: 'Person';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            createdByGroup?: {
              __typename: 'Group';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            ratingStats: { __typename: 'ContentRatingConnection'; count: number };
            commentStats: { __typename: 'CommentConnection'; count: number };
            managedBy: {
              __typename: 'GroupConnection';
              edges: Array<{
                __typename: 'GroupEdge';
                node: {
                  __typename: 'Group';
                  supervisedBy?: {
                    __typename: 'Network';
                    id: string;
                    name: string;
                    logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                  } | null;
                };
              }>;
            };
            categorizedByCategory: {
              __typename: 'CategoryConnection';
              edges: Array<{
                __typename: 'CategoryEdge';
                node: { __typename: 'Category'; id: string; name: string };
              }>;
            };
            locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
            _viewer: {
              __typename: 'ImpulseViewer';
              ratedBy: { __typename: 'ContentRatingConnection'; count: number };
              commentedBy: { __typename: 'CommentConnection'; count: number };
            };
          }
        | {
            __typename: 'Topic';
            title: string;
            warning?: string | null;
            visibility: Visibility;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            displayedBy: {
              __typename: 'NetworkConnection';
              edges: Array<{
                __typename: 'NetworkEdge';
                node: { __typename: 'Network'; id: string; name: string };
              }>;
              pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
            };
            imagedBy: {
              __typename: 'ImageConnection';
              edges: Array<{
                __typename: 'ImageEdge';
                node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
              }>;
            };
            createdByPerson?: {
              __typename: 'Person';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            createdByGroup?: {
              __typename: 'Group';
              info?: string | null;
              id: string;
              name: string;
              imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
            } | null;
            ratingStats: { __typename: 'ContentRatingConnection'; count: number };
            commentStats: { __typename: 'CommentConnection'; count: number };
            managedBy: {
              __typename: 'GroupConnection';
              edges: Array<{
                __typename: 'GroupEdge';
                node: {
                  __typename: 'Group';
                  supervisedBy?: {
                    __typename: 'Network';
                    id: string;
                    name: string;
                    logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                  } | null;
                };
              }>;
            };
            categorizedByCategory: {
              __typename: 'CategoryConnection';
              edges: Array<{
                __typename: 'CategoryEdge';
                node: { __typename: 'Category'; id: string; name: string };
              }>;
            };
            locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
            _viewer: {
              __typename: 'TopicViewer';
              ratedBy: { __typename: 'ContentRatingConnection'; count: number };
              commentedBy: { __typename: 'CommentConnection'; count: number };
            };
          };
    }>;
  };
  createdByGroup?: {
    __typename: 'Group';
    intro?: string | null;
    info?: string | null;
    id: string;
    name: string;
    creates: {
      __typename: 'ContentConnection';
      edges: Array<{
        __typename: 'ContentEdge';
        node:
          | { __typename: 'Article' }
          | { __typename: 'Impulse' }
          | {
              __typename: 'Topic';
              title: string;
              warning?: string | null;
              visibility: Visibility;
              id: string;
              createdAt: Date;
              updatedAt: Date;
              displayedBy: {
                __typename: 'NetworkConnection';
                edges: Array<{
                  __typename: 'NetworkEdge';
                  node: { __typename: 'Network'; id: string; name: string };
                }>;
                pageInfo: { __typename: 'PageInfo'; endCursor?: string | null; hasNextPage: boolean };
              };
              imagedBy: {
                __typename: 'ImageConnection';
                edges: Array<{
                  __typename: 'ImageEdge';
                  node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
                }>;
              };
              createdByPerson?: {
                __typename: 'Person';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              createdByGroup?: {
                __typename: 'Group';
                info?: string | null;
                id: string;
                name: string;
                imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
              } | null;
              ratingStats: { __typename: 'ContentRatingConnection'; count: number };
              commentStats: { __typename: 'CommentConnection'; count: number };
              managedBy: {
                __typename: 'GroupConnection';
                edges: Array<{
                  __typename: 'GroupEdge';
                  node: {
                    __typename: 'Group';
                    supervisedBy?: {
                      __typename: 'Network';
                      id: string;
                      name: string;
                      logoedBy?: { __typename: 'Image'; resourceLocation?: string | null } | null;
                    } | null;
                  };
                }>;
              };
              categorizedByCategory: {
                __typename: 'CategoryConnection';
                edges: Array<{
                  __typename: 'CategoryEdge';
                  node: { __typename: 'Category'; id: string; name: string };
                }>;
              };
              locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
              _viewer: {
                __typename: 'TopicViewer';
                ratedBy: { __typename: 'ContentRatingConnection'; count: number };
                commentedBy: { __typename: 'CommentConnection'; count: number };
              };
            };
      }>;
    };
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  createdByPerson?: {
    __typename: 'Person';
    info?: string | null;
    id: string;
    name: string;
    imagedBy?: { __typename: 'Image'; id: string; resourceLocation?: string | null } | null;
  } | null;
  imagedBy: {
    __typename: 'ImageConnection';
    edges: Array<{
      __typename: 'ImageEdge';
      node: { __typename: 'Image'; id: string; resourceLocation?: string | null };
    }>;
  };
  categorizedByCategory: {
    __typename: 'CategoryConnection';
    edges: Array<{ __typename: 'CategoryEdge'; node: { __typename: 'Category'; id: string; name: string } }>;
  };
  locatedByAddress?: { __typename: 'Address'; id: string; name?: string | null } | null;
  _permissions?: { __typename: 'Permissions'; update?: boolean | null } | null;
  _viewer: {
    __typename: 'TopicViewer';
    ratedBy: { __typename: 'ContentRatingConnection'; count: number };
    commentedBy: { __typename: 'CommentConnection'; count: number };
  };
};

export const ContentStateFragmentDoc = gql`
  fragment ContentState on Content {
    _viewer {
      ratedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
        count
        __typename
      }
      commentedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
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
  ${ContentStateFragmentDoc}
`;
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
    imagedBy {
      ...Document
      __typename
    }
  }
  ${DocumentFragmentDoc}
`;
export const AgentSignatureFragmentDoc = gql`
  fragment AgentSignature on Agent {
    ...AgentAvatar
    info
    __typename
  }
  ${AgentAvatarFragmentDoc}
`;
export const ContentAuthorFragmentDoc = gql`
  fragment ContentAuthor on Content {
    createdByPerson {
      ...AgentSignature
      __typename
    }
    createdByGroup {
      ...AgentSignature
      __typename
    }
    __typename
  }
  ${AgentSignatureFragmentDoc}
`;
export const ContentImagesFragmentDoc = gql`
  fragment ContentImages on Content {
    imagedBy(orderBy: { createdAt: { ascending: true, priority: 1 } }) {
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
  ${DocumentFragmentDoc}
`;
export const CategoryFragmentDoc = gql`
  fragment Category on Category {
    id
    name
    __typename
  }
`;
export const ContentCategoriesFragmentDoc = gql`
  fragment ContentCategories on Content {
    categorizedByCategory(orderBy: { name: { ascending: true, priority: 1 } }) {
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
  ${CategoryFragmentDoc}
`;
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
  ${AddressFragmentDoc}
`;
export const RatingFragmentDoc = gql`
  fragment Rating on Rating {
    id
    createdBy {
      ...AgentAvatar
      __typename
    }
    __typename
  }
  ${AgentAvatarFragmentDoc}
`;
export const ContentRatingsFragmentDoc = gql`
  fragment ContentRatings on Content {
    ratedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
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
  ${RatingFragmentDoc}
`;
export const CommentAuthorFragmentDoc = gql`
  fragment CommentAuthor on Comment {
    createdBy {
      ...AgentSignature
      __typename
    }
    __typename
  }
  ${AgentSignatureFragmentDoc}
`;
export const CommentFragmentDoc = gql`
  fragment Comment on Comment {
    ...CommentAuthor
    id
    createdAt
    text
    __typename
  }
  ${CommentAuthorFragmentDoc}
`;
export const ContentCommentsFragmentDoc = gql`
  fragment ContentComments on Content {
    commentedBy(
      orderBy: { createdAt: { ascending: false, priority: 1 } }
      pagination: { first: 4, afterCursor: $commentedByCursor }
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
  ${CommentFragmentDoc}
`;
export const ContentStatsFragmentDoc = gql`
  fragment ContentStats on Content {
    ratingStats: ratedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
      count
      __typename
    }
    commentStats: commentedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
      count
      __typename
    }
    __typename
  }
`;
export const ContentNetworksFragmentDoc = gql`
  fragment ContentNetworks on Content {
    managedBy(orderBy: { createdAt: { ascending: true, priority: 1 } }) {
      edges {
        node {
          supervisedBy {
            id
            name
            logoedBy {
              resourceLocation
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
    displayedBy(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
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
  ${PageInfoFragmentDoc}
`;
export const TopicTeaserFragmentDoc = gql`
  fragment TopicTeaser on Topic {
    ...ContentSummary
    __typename
  }
  ${ContentSummaryFragmentDoc}
`;
export const ContentTopicsFragmentDoc = gql`
  fragment ContentTopics on Content {
    curatedBy(orderBy: { updatedAt: { ascending: false, priority: 1 } }) {
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
  ${TopicTeaserFragmentDoc}
`;
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
  ${ContentPermissionsFragmentDoc}
`;
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
    curates(orderBy: { createdAt: { ascending: false, priority: 1 } }) {
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
      creates(type: [TOPIC], orderBy: { updatedAt: { ascending: false, priority: 1 } }) {
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
  ${TopicTeaserFragmentDoc}
`;
export const ArticleDocument = gql`
  query Article($id: ID!, $commentedByCursor: String) {
    article(id: $id) {
      ...Article
      __typename
    }
  }
  ${ArticleFragmentDoc}
`;

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
 *   util: {
 *      id: // value for 'id'
 *      commentedByCursor: // value for 'commentedByCursor'
 *   },
 * });
 */
export function useArticleQuery(baseOptions: Apollo.QueryHookOptions<ArticleQuery, ArticleQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export function useArticleLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ArticleQuery, ArticleQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ArticleQuery, ArticleQueryVariables>(ArticleDocument, options);
}
export type ArticleQueryHookResult = ReturnType<typeof useArticleQuery>;
export type ArticleLazyQueryHookResult = ReturnType<typeof useArticleLazyQuery>;
export type ArticleQueryResult = Apollo.QueryResult<ArticleQuery, ArticleQueryVariables>;
export const TopicDocument = gql`
  query Topic($id: ID!) {
    topic(id: $id) {
      ...Topic
      __typename
    }
  }
  ${TopicFragmentDoc}
`;

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
 *   util: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTopicQuery(baseOptions: Apollo.QueryHookOptions<TopicQuery, TopicQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TopicQuery, TopicQueryVariables>(TopicDocument, options);
}
export function useTopicLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TopicQuery, TopicQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TopicQuery, TopicQueryVariables>(TopicDocument, options);
}
export type TopicQueryHookResult = ReturnType<typeof useTopicQuery>;
export type TopicLazyQueryHookResult = ReturnType<typeof useTopicLazyQuery>;
export type TopicQueryResult = Apollo.QueryResult<TopicQuery, TopicQueryVariables>;
