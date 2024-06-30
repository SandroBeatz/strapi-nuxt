import type { Schema, Attribute } from '@strapi/strapi';

export interface ProductPriceComponent extends Schema.Component {
  collectionName: 'components_internal_price_components';
  info: {
    displayName: 'Price Component';
    icon: '';
    description: '';
  };
  attributes: {
    price: Attribute.Decimal & Attribute.Required;
    old_price: Attribute.Decimal;
    currency_code: Attribute.Enumeration<['kgs', 'usd', 'rub']> &
      Attribute.Required &
      Attribute.DefaultTo<'kgs'>;
  };
}

export interface ProductProductSizes extends Schema.Component {
  collectionName: 'components_product_product_sizes';
  info: {
    displayName: 'Size Component';
    description: '';
  };
  attributes: {
    size: Attribute.String & Attribute.Required;
    barcode: Attribute.String & Attribute.Required;
    stock: Attribute.Integer & Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'product.price-component': ProductPriceComponent;
      'product.product-sizes': ProductProductSizes;
    }
  }
}
