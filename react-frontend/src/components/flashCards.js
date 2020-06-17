import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { useQuery, useMutation } from '@apollo/react-hooks';
// import { flowRight as compose } from 'lodash';
import {
  getWordQuery,
  getCategoriesQuery,
  addWordMutation
} from '../queries/queries';

import './styles.scss';

export default function FlashCards() {
  return (
    <div>hello</div>
  )
}
