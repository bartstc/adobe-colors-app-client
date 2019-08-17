

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchPalettes
// ====================================================

export interface SearchPalettes_searchPalettes {
  id: string;
  name: string;
  colors: string[];
  tags: string;
  ownerusername: string;
  ownerid: string;
  saves: number;
  views: number;
}

export interface SearchPalettes {
  searchPalettes: SearchPalettes_searchPalettes[] | null;
}

export interface SearchPalettesVariables {
  query: string;
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