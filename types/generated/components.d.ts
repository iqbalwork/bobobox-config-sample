import type { Schema, Attribute } from '@strapi/strapi';

export interface AdditionalAddFacility extends Schema.Component {
  collectionName: 'components_additional_add_facilities';
  info: {
    displayName: 'AddFacility';
    description: '';
  };
  attributes: {
    hotels: Attribute.Relation<
      'additional.add-facility',
      'oneToMany',
      'api::hotel.hotel'
    >;
    facilities: Attribute.Relation<
      'additional.add-facility',
      'oneToMany',
      'api::facility.facility'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'additional.add-facility': AdditionalAddFacility;
    }
  }
}
