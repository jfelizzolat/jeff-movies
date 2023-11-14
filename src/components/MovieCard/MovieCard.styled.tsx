import { styled } from 'styled-components';
import Image from 'next/image';

export const MovieWrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 250px;
  border-radius: 12px;
  background: #e7ecef;
  box-shadow: 0 8px 24px #d1d1d1;
  color: #393939;
`;

export const MoviePoster = styled(Image)`
  border-radius: 16px;
  box-shadow: 0 4px 12px #8b8c89;
`;

export const MovieRating = styled.div`
  position: absolute;
  background: #222;
  padding: 4px;
  margin: 8px;
  border-radius: 50%;
`;

export const MovieDetail = styled.footer`
  padding: 16px;
`;

export const MovieTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
export const MovieGenre = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 400;
  color: #666;
`;
export const MovieReleaseDate = styled.p`
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  color: #666;
`;
