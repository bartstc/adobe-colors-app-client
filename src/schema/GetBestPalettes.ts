

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetBestPalettes
// ====================================================

export interface GetBestPalettes_getBestPalettes {
  id: string;
  name: string;
  colors: string[];
  tags: string;
  ownerusername: string;
  ownerid: string;
  saves: number;
  views: number;
}

export interface GetBestPalettes {
  getBestPalettes: GetBestPalettes_getBestPalettes[] | null;
}

export interface GetBestPalettesVariables {
  limit: number;
  offset: number;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================