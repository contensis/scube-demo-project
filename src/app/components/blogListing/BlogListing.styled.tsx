import styled, { css } from 'styled-components';

const BlogListingStyled = styled.div`
  ${({ theme }) => {
    return css`
      .blog-listing__filters {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 16px;
      }
      .blog-listing__results {
        max-width: 1280px;
        width: 100%;
        margin: 120px auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        @media ${theme.mq.desktop} {
          justify-content: flex-start;
        }
        > * {
          @media ${theme.mq.laptop} {
            flex-basis: calc((100% / 2) - 40px);
            margin-right: 40px;
            margin-bottom: 40px;
            &:nth-child(2n) {
              margin-right: 0;
            }
          }
          @media ${theme.mq.desktop} {
            flex-basis: calc((100% / 3) - 40px);
            margin-right: 40px;
            margin-bottom: 40px;
            &:nth-child(2n) {
              margin-right: 40px;
            }
            &:nth-child(3n) {
              margin-right: 0;
            }
          }
        }
      }
      .blog-listing__load-more {
        margin: 0 auto;
      }
    `;
  }};
`;

export default BlogListingStyled;
