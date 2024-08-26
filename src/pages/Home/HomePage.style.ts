import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f4f4f4;
  min-height: 100vh;
`

export const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #333;
`

export const SearchInput = styled.input`
  padding: 12px 20px;
  margin-bottom: 30px;
  width: 100%;
  max-width: 500px;
  font-size: 1.2em;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
`

export const List = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export const AddButton = styled.button`
  margin-top: 30px;
  padding: 15px 25px;
  font-size: 1.2em;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`
