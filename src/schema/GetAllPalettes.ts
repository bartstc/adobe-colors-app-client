

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllPalettes
// ====================================================

export interface GetAllPalettes_getAllPalettes {
  id: string;
  name: string;
  colors: string[];
  tags: string;
  ownerusername: string;
  saves: number;
  views: number;
}

export interface GetAllPalettes {
  getAllPalettes: GetAllPalettes_getAllPalettes[] | null;
}

export interface GetAllPalettesVariables {
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