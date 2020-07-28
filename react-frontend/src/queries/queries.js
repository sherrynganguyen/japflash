import { gql } from "apollo-boost";

const getWordQuery = gql`
{
  words{
    eng
    jap
    categoryId{
      name
    }
  }
}
`;

const getCategoriesQuery = gql`
{
  categories{
    name
    id
  }
}
`;

const findWordQuery = gql`
  query($id: ID){
    word(id: $id){
      id
      jap
      eng
    }
  }
`;

const addWordMutation = gql`
  mutation($eng: String!, $jap: String!, $categoryId: ID!) {
    addWord(eng: $eng, jap: $jap, categoryId: $categoryId) {
      eng
      jap
      id
    }
  }
`;

export {
  getWordQuery,
  getCategoriesQuery,
  findWordQuery,
  addWordMutation
}