import styled from 'styled-components';

export const CommentCont = styled.div`
  width: 390px;
  height: 61px;
`;

export const CommentForm = styled.form`
  display: flex;
  align-items: center;
  padding: 13px 16px 12px 16px;
`;

export const UserImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentLab = styled.label`
  /* ir */
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export const CommentInp = styled.input`
  width: 260px;
  height: 18px;
  margin-left: 18px;
  font-size: 14px;
  color: var(--main-text-color);
  border: none;
  text-overflow: ellipsis;
  &::placeholder {
    color: #c4c4c4;
  }
`;

export const PostBtn = styled.button`
  width: 26px;
  height: 18px;
  margin-left: auto;
  font-size: 14px;
  color: ${(props) => (props.inpValue ? 'var(--main-color)' : '#c4c4c4')};
`;
