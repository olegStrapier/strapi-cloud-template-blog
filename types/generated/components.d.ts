import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductDataVariant extends Schema.Component {
  collectionName: 'components_product_data_variants';
  info: {
    displayName: 'variant';
    description: '';
  };
  attributes: {
    size: Attribute.Enumeration<['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']>;
    price: Attribute.Decimal;
    color: Attribute.String;
    quantity: Attribute.Integer;
    date_available: Attribute.DateTime;
    in_stock: Attribute.Boolean;
    image: Attribute.Media;
    variant_id: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product-data.variant': ProductDataVariant;
    }
  }
}
