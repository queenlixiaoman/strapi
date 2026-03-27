import type { Schema, Struct } from '@strapi/strapi';

export interface CommonBlocksFooter extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    footerCertifications: Schema.Attribute.Component<
      'shared.footer-certification-item',
      true
    >;
    footerCollegeLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    footerContact: Schema.Attribute.Component<
      'common-blocks.footer-contact',
      false
    >;
    footerCopyright: Schema.Attribute.Component<'shared.text-single', true>;
    footerFundLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    footerLinkColumns: Schema.Attribute.Component<
      'common-blocks.footer-link-columns',
      true
    >;
    footerSocialsIcons: Schema.Attribute.Component<
      'shared.footer-socials-icon-item',
      true
    >;
  };
}

export interface CommonBlocksFooterContact extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_footer_contacts';
  info: {
    displayName: 'FooterContact';
  };
  attributes: {
    addressLines: Schema.Attribute.Component<'shared.text-single', true>;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    timer: Schema.Attribute.Component<'shared.label-value', true>;
  };
}

export interface CommonBlocksFooterLinkColumns extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_footer_link_columns';
  info: {
    displayName: 'FooterLinkColumns';
  };
  attributes: {
    item: Schema.Attribute.Component<'shared.footer-link-item', true>;
  };
}

export interface CommonBlocksHeader extends Struct.ComponentSchema {
  collectionName: 'components_common_blocks_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    headerCollegeLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headerImmersiveLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headerMenuIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    headerMenuNavLinks: Schema.Attribute.Component<'shared.link', true>;
    headerNavLinks: Schema.Attribute.Component<'shared.header-nav-item', true>;
    headerSpecialsText: Schema.Attribute.String;
  };
}

export interface HomeBlocksAmenities extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_amenities';
  info: {
    displayName: 'Amenities';
  };
  attributes: {
    homeAmenitiesImages: Schema.Attribute.Component<
      'shared.home-amenities-image-item',
      true
    >;
    homeAmenitiesInfo: Schema.Attribute.Component<
      'shared.home-amenities-info',
      false
    >;
    homeAmenitiesItems: Schema.Attribute.Component<
      'shared.home-amenities-item',
      true
    >;
  };
}

export interface HomeBlocksBanner extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_banners';
  info: {
    displayName: 'Banner';
  };
  attributes: {
    homeBanner: Schema.Attribute.Component<'shared.home-banner-item', false>;
  };
}

export interface HomeBlocksCards extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    homeFeatureCards: Schema.Attribute.Component<
      'shared.home-feature-card',
      true
    >;
  };
}

export interface HomeBlocksIns extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_ins';
  info: {
    displayName: 'Ins';
  };
  attributes: {
    homeSocialTitle1: Schema.Attribute.String;
    homeSocialTitle2: Schema.Attribute.String;
  };
}

export interface HomeBlocksIntro extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_intros';
  info: {
    displayName: 'Intro';
  };
  attributes: {
    homeIntro: Schema.Attribute.Component<'shared.home-intro', false>;
  };
}

export interface HomeBlocksMap extends Struct.ComponentSchema {
  collectionName: 'components_home_blocks_maps';
  info: {
    displayName: 'Map';
  };
  attributes: {};
}

export interface SharedFooterCertificationItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_certification_items';
  info: {
    displayName: 'footerCertificationItem';
  };
  attributes: {
    alt: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedFooterLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_link_items';
  info: {
    displayName: 'footerLinkItem';
  };
  attributes: {
    action: Schema.Attribute.String;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedFooterSocialsIconItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_socials_icon_items';
  info: {
    displayName: 'footerSocialsIconItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface SharedHeaderNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_header_nav_items';
  info: {
    displayName: 'headerNavItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.String;
  };
}

export interface SharedHomeAmenitiesImageItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_amenities_image_items';
  info: {
    displayName: 'homeAmenitiesImageItem';
  };
  attributes: {
    alt: Schema.Attribute.String;
    key: Schema.Attribute.String;
    src: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedHomeAmenitiesInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_amenities_infos';
  info: {
    displayName: 'homeAmenitiesInfo';
  };
  attributes: {
    ctaLink: Schema.Attribute.String;
    ctaText: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeAmenitiesItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_amenities_items';
  info: {
    displayName: 'homeAmenitiesItem';
  };
  attributes: {
    icon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    name: Schema.Attribute.String;
  };
}

export interface SharedHomeBannerItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_banner_items';
  info: {
    displayName: 'homeBannerItem';
  };
  attributes: {
    bannerImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bgVideo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sealIcon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_feature_cards';
  info: {
    displayName: 'homeFeatureCard';
  };
  attributes: {
    desc: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    link: Schema.Attribute.String;
    linkType: Schema.Attribute.String;
    secondTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedHomeIntro extends Struct.ComponentSchema {
  collectionName: 'components_shared_home_intros';
  info: {
    displayName: 'homeIntro';
  };
  attributes: {
    brandImg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    caBtnLink: Schema.Attribute.String;
    caBtnText: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'shared.text-single', true>;
    titleText: Schema.Attribute.String;
  };
}

export interface SharedLabelValue extends Struct.ComponentSchema {
  collectionName: 'components_shared_label_values';
  info: {
    displayName: 'labelValue';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'headerMenuNavItem';
  };
  attributes: {
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface SharedTextSingle extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_singles';
  info: {
    displayName: 'textSingle';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common-blocks.footer': CommonBlocksFooter;
      'common-blocks.footer-contact': CommonBlocksFooterContact;
      'common-blocks.footer-link-columns': CommonBlocksFooterLinkColumns;
      'common-blocks.header': CommonBlocksHeader;
      'home-blocks.amenities': HomeBlocksAmenities;
      'home-blocks.banner': HomeBlocksBanner;
      'home-blocks.cards': HomeBlocksCards;
      'home-blocks.ins': HomeBlocksIns;
      'home-blocks.intro': HomeBlocksIntro;
      'home-blocks.map': HomeBlocksMap;
      'shared.footer-certification-item': SharedFooterCertificationItem;
      'shared.footer-link-item': SharedFooterLinkItem;
      'shared.footer-socials-icon-item': SharedFooterSocialsIconItem;
      'shared.header-nav-item': SharedHeaderNavItem;
      'shared.home-amenities-image-item': SharedHomeAmenitiesImageItem;
      'shared.home-amenities-info': SharedHomeAmenitiesInfo;
      'shared.home-amenities-item': SharedHomeAmenitiesItem;
      'shared.home-banner-item': SharedHomeBannerItem;
      'shared.home-feature-card': SharedHomeFeatureCard;
      'shared.home-intro': SharedHomeIntro;
      'shared.label-value': SharedLabelValue;
      'shared.link': SharedLink;
      'shared.text-single': SharedTextSingle;
    }
  }
}
