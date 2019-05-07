import styled from 'styled-components';

export const BookWrap = styled.div`
  background-color: #fff;
`

export const TopWrap = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center
  .left {
    display: flex;
    width: 250px;
    button {
      margin-left: 10px;
    }
  }
`

export const MainWrap = styled.section`
  padding: 20px;
  img {
    height: 30px;
  }
`
