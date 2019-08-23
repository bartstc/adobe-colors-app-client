import React from 'react';

import { PageBtn } from './Pagination.styles';
import { usePaletteState } from '../../../context/paletteContext';

interface IProps {
  offset: number;
  limit: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
}

export const Pagination: React.FC<IProps> = ({ offset, limit, setOffset }) => {
  const { palettes } = usePaletteState();

  const nextPage = () => {
    if (palettes.length < limit) return;
    setOffset(offset => offset + limit);
  };

  const prevPage = () => {
    if (offset === 0) return;
    setOffset(offset => offset - limit);
  };

  return (
    <>
      <PageBtn
        active={offset >= limit}
        disabled={offset === 0}
        onClick={prevPage}
      >
        <i className="fas fa-chevron-left" />
      </PageBtn>
      <PageBtn
        active={palettes.length === limit}
        disabled={palettes.length < limit}
        onClick={nextPage}
      >
        <i className="fas fa-chevron-right" />
      </PageBtn>
    </>
  );
};
