export type Maybe<T> = T extends PromiseLike<infer U> ? Promise<U | null> : T | null;
export type InputMaybe<T> = T | null | undefined;
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
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};

export type Agency = {
  __typename?: 'Agency';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  agents: AgentPage;
  city: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};


export type AgencyAgentsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Agency' and 'Agent'. */
export type AgencyAgentsRelation = {
  /** Connect one or more documents of type 'Agent' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Agent' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<AgentInput>>>;
  /** Disconnect the given documents of type 'Agent' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** 'Agency' input values */
export type AgencyInput = {
  agents?: InputMaybe<AgencyAgentsRelation>;
  city: Scalars['String'];
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Agency'. */
export type AgencyPage = {
  __typename?: 'AgencyPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Agency' in this page. */
  data: Array<Maybe<Agency>>;
};

export type Agent = {
  __typename?: 'Agent';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  agency?: Maybe<Agency>;
  email?: Maybe<Scalars['String']>;
  headshot?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Agent' and 'Agency' using the field 'Agent.agency'. */
export type AgentAgencyRelation = {
  /** Connect a document of type 'Agency' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Agency' and associate it with the current document. */
  create?: InputMaybe<AgencyInput>;
  /** If true, disconnects this document from 'Agency' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** 'Agent' input values */
export type AgentInput = {
  agency?: InputMaybe<AgentAgencyRelation>;
  email?: InputMaybe<Scalars['String']>;
  headshot?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: InputMaybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Agent'. */
export type AgentPage = {
  __typename?: 'AgentPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Agent' in this page. */
  data: Array<Maybe<Agent>>;
};

export type Appartment = {
  __typename?: 'Appartment';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  agent?: Maybe<Agent>;
  bathRooms?: Maybe<Scalars['Float']>;
  bedRooms?: Maybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: Maybe<Scalars['String']>;
  floorSize?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  location: Location;
  /** Slovenian title field that summarizes the property. */
  naslov?: Maybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: Maybe<Scalars['String']>;
  parking?: Maybe<Scalars['Boolean']>;
  pricePerMeterSq?: Maybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: Maybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: AppartmentType;
  yearOfBuild?: Maybe<Scalars['Int']>;
  yearOfRenovation?: Maybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Appartment' and 'Agent' using the field 'Appartment.agent'. */
export type AppartmentAgentRelation = {
  /** Connect a document of type 'Agent' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Agent' and associate it with the current document. */
  create?: InputMaybe<AgentInput>;
  /** If true, disconnects this document from 'Agent' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** 'Appartment' input values */
export type AppartmentInput = {
  agent?: InputMaybe<AppartmentAgentRelation>;
  bathRooms?: InputMaybe<Scalars['Float']>;
  bedRooms?: InputMaybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  floorSize?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<AppartmentLocationRelation>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  parking?: InputMaybe<Scalars['Boolean']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: AppartmentType;
  yearOfBuild?: InputMaybe<Scalars['Int']>;
  yearOfRenovation?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Appartment' and 'Location' using the field 'Appartment.location'. */
export type AppartmentLocationRelation = {
  /** Connect a document of type 'Location' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Location' and associate it with the current document. */
  create?: InputMaybe<LocationInput>;
};

/** The pagination object for elements of type 'Appartment'. */
export type AppartmentPage = {
  __typename?: 'AppartmentPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Appartment' in this page. */
  data: Array<Maybe<Appartment>>;
};

export enum AppartmentType {
  Condominium = 'condominium',
  Multiroom = 'multiroom',
  Studio = 'studio'
}

export type House = {
  __typename?: 'House';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  agent?: Maybe<Agent>;
  bathRooms?: Maybe<Scalars['Float']>;
  bedRooms?: Maybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: Maybe<Scalars['String']>;
  floorSize?: Maybe<Scalars['Int']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  location: Location;
  /** Slovenian title field that summarizes the property. */
  naslov?: Maybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: Maybe<Scalars['String']>;
  plotSize?: Maybe<Scalars['Int']>;
  pricePerMeterSq?: Maybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: Maybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: HouseType;
  yearOfBuild?: Maybe<Scalars['Int']>;
  yearOfRenovation?: Maybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'House' and 'Agent' using the field 'House.agent'. */
export type HouseAgentRelation = {
  /** Connect a document of type 'Agent' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Agent' and associate it with the current document. */
  create?: InputMaybe<AgentInput>;
  /** If true, disconnects this document from 'Agent' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** 'House' input values */
export type HouseInput = {
  agent?: InputMaybe<HouseAgentRelation>;
  bathRooms?: InputMaybe<Scalars['Float']>;
  bedRooms?: InputMaybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  floorSize?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<HouseLocationRelation>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  plotSize?: InputMaybe<Scalars['Int']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: HouseType;
  yearOfBuild?: InputMaybe<Scalars['Int']>;
  yearOfRenovation?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'House' and 'Location' using the field 'House.location'. */
export type HouseLocationRelation = {
  /** Connect a document of type 'Location' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Location' and associate it with the current document. */
  create?: InputMaybe<LocationInput>;
};

/** The pagination object for elements of type 'House'. */
export type HousePage = {
  __typename?: 'HousePage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'House' in this page. */
  data: Array<Maybe<House>>;
};

export enum HouseType {
  Detached = 'detached',
  Duplex = 'duplex',
  Multiplex = 'multiplex',
  Triplex = 'triplex'
}

export type Location = {
  __typename?: 'Location';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  city: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  municipality?: Maybe<Scalars['String']>;
  neighborhood?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['Int']>;
  street?: Maybe<Scalars['String']>;
};

/** 'Location' input values */
export type LocationInput = {
  city: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  municipality?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Agency' */
  createAgency: Agency;
  /** Create a new document in the collection of 'Agent' */
  createAgent: Agent;
  /** Create a new document in the collection of 'Appartment' */
  createAppartment: Appartment;
  /** Create a new document in the collection of 'House' */
  createHouse: House;
  /** Create a new document in the collection of 'Location' */
  createLocation: Location;
  /** Create a new document in the collection of 'Plot' */
  createPlot: Plot;
  /** Delete an existing document in the collection of 'Agency' */
  deleteAgency?: Maybe<Agency>;
  /** Delete an existing document in the collection of 'Agent' */
  deleteAgent?: Maybe<Agent>;
  /** Delete an existing document in the collection of 'Appartment' */
  deleteAppartment?: Maybe<Appartment>;
  /** Delete an existing document in the collection of 'House' */
  deleteHouse?: Maybe<House>;
  /** Delete an existing document in the collection of 'Location' */
  deleteLocation?: Maybe<Location>;
  /** Delete an existing document in the collection of 'Plot' */
  deletePlot?: Maybe<Plot>;
  /** Partially updates an existing document in the collection of 'Agency'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateAgency?: Maybe<Agency>;
  /** Partially updates an existing document in the collection of 'Agent'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateAgent?: Maybe<Agent>;
  /** Partially updates an existing document in the collection of 'Appartment'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateAppartment?: Maybe<Appartment>;
  /** Partially updates an existing document in the collection of 'House'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateHouse?: Maybe<House>;
  /** Partially updates an existing document in the collection of 'Location'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateLocation?: Maybe<Location>;
  /** Partially updates an existing document in the collection of 'Plot'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdatePlot?: Maybe<Plot>;
  /** Update an existing document in the collection of 'Agency' */
  updateAgency?: Maybe<Agency>;
  /** Update an existing document in the collection of 'Agent' */
  updateAgent?: Maybe<Agent>;
  /** Update an existing document in the collection of 'Appartment' */
  updateAppartment?: Maybe<Appartment>;
  /** Update an existing document in the collection of 'House' */
  updateHouse?: Maybe<House>;
  /** Update an existing document in the collection of 'Location' */
  updateLocation?: Maybe<Location>;
  /** Update an existing document in the collection of 'Plot' */
  updatePlot?: Maybe<Plot>;
};


export type MutationCreateAgencyArgs = {
  data: AgencyInput;
};


export type MutationCreateAgentArgs = {
  data: AgentInput;
};


export type MutationCreateAppartmentArgs = {
  data: AppartmentInput;
};


export type MutationCreateHouseArgs = {
  data: HouseInput;
};


export type MutationCreateLocationArgs = {
  data: LocationInput;
};


export type MutationCreatePlotArgs = {
  data: PlotInput;
};


export type MutationDeleteAgencyArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAgentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteAppartmentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteHouseArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteLocationArgs = {
  id: Scalars['ID'];
};


export type MutationDeletePlotArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdateAgencyArgs = {
  data: PartialUpdateAgencyInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateAgentArgs = {
  data: PartialUpdateAgentInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateAppartmentArgs = {
  data: PartialUpdateAppartmentInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateHouseArgs = {
  data: PartialUpdateHouseInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateLocationArgs = {
  data: PartialUpdateLocationInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdatePlotArgs = {
  data: PartialUpdatePlotInput;
  id: Scalars['ID'];
};


export type MutationUpdateAgencyArgs = {
  data: AgencyInput;
  id: Scalars['ID'];
};


export type MutationUpdateAgentArgs = {
  data: AgentInput;
  id: Scalars['ID'];
};


export type MutationUpdateAppartmentArgs = {
  data: AppartmentInput;
  id: Scalars['ID'];
};


export type MutationUpdateHouseArgs = {
  data: HouseInput;
  id: Scalars['ID'];
};


export type MutationUpdateLocationArgs = {
  data: LocationInput;
  id: Scalars['ID'];
};


export type MutationUpdatePlotArgs = {
  data: PlotInput;
  id: Scalars['ID'];
};

/** 'Agency' input values */
export type PartialUpdateAgencyInput = {
  agents?: InputMaybe<AgencyAgentsRelation>;
  city?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

/** 'Agent' input values */
export type PartialUpdateAgentInput = {
  agency?: InputMaybe<AgentAgencyRelation>;
  email?: InputMaybe<Scalars['String']>;
  headshot?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
};

/** 'Appartment' input values */
export type PartialUpdateAppartmentInput = {
  agent?: InputMaybe<AppartmentAgentRelation>;
  bathRooms?: InputMaybe<Scalars['Float']>;
  bedRooms?: InputMaybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated?: InputMaybe<Scalars['Time']>;
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  floorSize?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<AppartmentLocationRelation>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  parking?: InputMaybe<Scalars['Boolean']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  transaction?: InputMaybe<Transaction>;
  type?: InputMaybe<AppartmentType>;
  yearOfBuild?: InputMaybe<Scalars['Int']>;
  yearOfRenovation?: InputMaybe<Scalars['Int']>;
};

/** 'House' input values */
export type PartialUpdateHouseInput = {
  agent?: InputMaybe<HouseAgentRelation>;
  bathRooms?: InputMaybe<Scalars['Float']>;
  bedRooms?: InputMaybe<Scalars['Int']>;
  /** Date and time property was created */
  dateCreated?: InputMaybe<Scalars['Time']>;
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  floorSize?: InputMaybe<Scalars['Int']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<HouseLocationRelation>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  plotSize?: InputMaybe<Scalars['Int']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  transaction?: InputMaybe<Transaction>;
  type?: InputMaybe<HouseType>;
  yearOfBuild?: InputMaybe<Scalars['Int']>;
  yearOfRenovation?: InputMaybe<Scalars['Int']>;
};

/** 'Location' input values */
export type PartialUpdateLocationInput = {
  city?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  municipality?: InputMaybe<Scalars['String']>;
  neighborhood?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['Int']>;
  street?: InputMaybe<Scalars['String']>;
};

/** 'Plot' input values */
export type PartialUpdatePlotInput = {
  agent?: InputMaybe<PlotAgentRelation>;
  /** Date and time property was created */
  dateCreated?: InputMaybe<Scalars['Time']>;
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<PlotLocationRelation>;
  locationInformation?: InputMaybe<Scalars['String']>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  plotSize?: InputMaybe<Scalars['Int']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice?: InputMaybe<Scalars['Float']>;
  transaction?: InputMaybe<Transaction>;
  type?: InputMaybe<PlotType>;
};

export type Plot = {
  __typename?: 'Plot';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  agent?: Maybe<Agent>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  location: Location;
  locationInformation?: Maybe<Scalars['String']>;
  /** Slovenian title field that summarizes the property. */
  naslov?: Maybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: Maybe<Scalars['String']>;
  plotSize?: Maybe<Scalars['Int']>;
  pricePerMeterSq?: Maybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: Maybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: Maybe<Scalars['String']>;
  sold?: Maybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: Maybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: PlotType;
};

/** Allow manipulating the relationship between the types 'Plot' and 'Agent' using the field 'Plot.agent'. */
export type PlotAgentRelation = {
  /** Connect a document of type 'Agent' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Agent' and associate it with the current document. */
  create?: InputMaybe<AgentInput>;
  /** If true, disconnects this document from 'Agent' */
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

/** 'Plot' input values */
export type PlotInput = {
  agent?: InputMaybe<PlotAgentRelation>;
  /** Date and time property was created */
  dateCreated: Scalars['Time'];
  /** English description field that describes the property. */
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  location?: InputMaybe<PlotLocationRelation>;
  locationInformation?: InputMaybe<Scalars['String']>;
  /** Slovenian title field that summarizes the property. */
  naslov?: InputMaybe<Scalars['String']>;
  /** Slovenian description field that describes the property. */
  opis?: InputMaybe<Scalars['String']>;
  plotSize?: InputMaybe<Scalars['Int']>;
  pricePerMeterSq?: InputMaybe<Scalars['Float']>;
  /** How many individuals have viewed this property? */
  propertyViews?: InputMaybe<Scalars['Int']>;
  /** Where was this listing originally published? */
  referenceLink?: InputMaybe<Scalars['String']>;
  sold?: InputMaybe<Scalars['Boolean']>;
  /** English title field that summarizes the property. */
  title?: InputMaybe<Scalars['String']>;
  totalPrice: Scalars['Float'];
  transaction: Transaction;
  type: PlotType;
};

/** Allow manipulating the relationship between the types 'Plot' and 'Location' using the field 'Plot.location'. */
export type PlotLocationRelation = {
  /** Connect a document of type 'Location' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Location' and associate it with the current document. */
  create?: InputMaybe<LocationInput>;
};

/** The pagination object for elements of type 'Plot'. */
export type PlotPage = {
  __typename?: 'PlotPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Plot' in this page. */
  data: Array<Maybe<Plot>>;
};

export enum PlotType {
  Agricultural = 'agricultural',
  Construction = 'construction',
  Farm = 'farm',
  Investment = 'investment'
}

export type Query = {
  __typename?: 'Query';
  agencies: AgencyPage;
  appartments: AppartmentPage;
  /** Find a document from the collection of 'Agency' by its id. */
  findAgencyByID?: Maybe<Agency>;
  /** Find a document from the collection of 'Agent' by its id. */
  findAgentByID?: Maybe<Agent>;
  /** Find a document from the collection of 'Appartment' by its id. */
  findAppartmentByID?: Maybe<Appartment>;
  /** Find a document from the collection of 'House' by its id. */
  findHouseByID?: Maybe<House>;
  /** Find a document from the collection of 'Location' by its id. */
  findLocationByID?: Maybe<Location>;
  /** Find a document from the collection of 'Plot' by its id. */
  findPlotByID?: Maybe<Plot>;
  houses: HousePage;
  plots: PlotPage;
};


export type QueryAgenciesArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryAppartmentsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryFindAgencyByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAgentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindAppartmentByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindHouseByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindLocationByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindPlotByIdArgs = {
  id: Scalars['ID'];
};


export type QueryHousesArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryPlotsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

export enum Transaction {
  Buy = 'BUY',
  Rent = 'RENT'
}
