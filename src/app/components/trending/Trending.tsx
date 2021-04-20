import React from 'react';

import TrendingStyled from './Trending.styled';
import LinkButton from '../linkButton/LinkButton';

export interface Props {
  className?: string;
}

const Trending = ({ className }: Props) => {
  return (
    <TrendingStyled className={className}>
      <LinkButton
        icon="arrow-right"
        isHollow
        type="secondary"
        label="Pots"
        href="/products/pot"
      />
      <LinkButton
        icon="arrow-right"
        isHollow
        type="secondary"
        label="Plants"
        href="/products/plant"
      />
      <LinkButton
        icon="arrow-right"
        isHollow
        type="secondary"
        label="Foliage"
        href="/products/plant?plantType=25f5a78b-9274-4cc9-9a58-03d8dcd4cd17"
      />
    </TrendingStyled>
  );
};

export default Trending;
