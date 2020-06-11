const graphql = require('graphql');
const _ = require('lodash');

const Word = require('../models/words');
const Category = require('../models/categories');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema
} = graphql;

const words = [
  {id: '1', jap: 'akai', eng: 'red', categoryId: '2'},
  {id: '2', jap: 'aoi', eng: 'blue', categoryId: '2'},
  {id: '3', jap: 'akarui', eng: 'autumn', categoryId:'1'},
  {id: '4', jap: 'yomimasu', eng: 'read', categoryId: '3'},
];

const categories = [
  {id: '1', type: 'noun'},
  {id: '2', type: 'adjective'},
  {id: '3', type: 'verb'},
];

const WordType = new GraphQLObjectType({
  name: 'Word',
  fields: () => ({
    id:  { type: GraphQLID },
    eng: { type: GraphQLString },
    jap: { type: GraphQLString },
    categoryId: {
      type: CategoryType,
      resolve(parent, args){
        return _.find(categories, {id: parent.categoryId})
        // return Author.findById(parent.authorId)
      }
    }
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id:  { type: GraphQLID },
    type: { type: GraphQLString },
    words: {
      type: new GraphQLList(WordType),
      resolve(parent, args){
        return _.filter(words, {categoryId: parent.id})
        // return Author.findById(parent.authorId)
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    word: {
      type:WordType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(words, {id: args.id})
      }
    },
    category: {
      type:CategoryType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return _.find(categories, {id: args.id})
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  // mutation: Mutation
})