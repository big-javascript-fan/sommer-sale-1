export const propertyAddresses = {
  43_113: '0x5b1A47B1812442fB975F63f2aD0AB6AAB223aaAe',
  3: '0x3de837993915FE59f69eF2e87321C0E3187fBdcB',
  1_666_700_000: '0x6f9Ead49Cd8BdE8c876DAc775b6E517CD079698A',
};

export interface ProjectDetail {
  key: string;
  value: string;
}

export interface DescriptionItem {
  title: string;
  value: string;
}

export interface AttributeItem {
  key: string;
  value: string;
}

export interface Property {
  name: string;
  fractionToken: {
    tokenName: string;
    symbol: string;
  };
  projectDetails: ProjectDetail[];
  description: DescriptionItem[];
  attributes: AttributeItem[];
  images: string[];
}
