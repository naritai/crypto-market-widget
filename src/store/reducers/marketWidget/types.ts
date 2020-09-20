export interface Asset {
  an: string;
  as: number;
  b: string;
  ba: string;
  c: number;
  cs: number;
  etf: boolean;
  h: number;
  i: number;
  l: number;
  o: number;
  pm: string;
  pn: string;
  q: string;
  qa: string;
  qn: string;
  qv: number;
  s: string;
  st: string;
  tags: string[];
  ts: number;
  v: number;
  y: number;
};

export interface AssetIndex {
  [key: string]: number;
};

export interface AssetFilter {
  [key: string]: "MARGIN" | "BTC" | "BNB" | "ALTS"
};

export interface ShowMode {
  [key: string]: "CHANGE" | "VOLUME";
};

export interface MarketWidgetState {
  loading: boolean;
  error: boolean;
  assets: Asset[];
  assetIndexes: AssetIndex | null;
  searchValue: string;
  filter: AssetFilter | string;
  showMode: ShowMode | string;
};

export interface AssetUpdated {
  E: number;
  c: string;
  e: string;
  h: string;
  l: string;
  o: string;
  q: string;
  s: string;
  v: string;
};