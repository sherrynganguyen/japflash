import { gql } from "apollo-boost";

const getBook = gql`
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

const addWordMutation = gql`
  mutation($eng: String!, $jap: String!, $categoryId: ID!) {
    addWord(eng: $eng, jap: $jap, categoryId: $categoryId) {
      eng
      jap
    }
  }
`;

export {
  getBook,
  addWordMutation
}