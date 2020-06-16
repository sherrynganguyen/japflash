const graphql = require('graphql');
const _ = require('lodash');

const Word = require('../models/words');
const Category = require('../models/categories');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;

// const words = [
//   {id: '1', jap: 'akai', eng: 'red', categoryId: '2'},
//   {id: '2', jap: 'aoi', eng: 'blue', categoryId: '2'},
//   {id: '3', jap: 'akarui', eng: 'autumn', categoryId:'1'},
//   {id: '4', jap: 'yomimasu', eng: 'read', categoryId: '3'},
// ];

// const categories = [
//   {id: '1', type: 'noun'},
//   {id: '2', type: 'adjective'},
//   {id: '3', type: 'verb'},
// ];

const WordType = new GraphQLObjectType({
  name: 'Word',
  fields: () => ({
    id:  { type: GraphQLID },
    eng: { type: GraphQLString },
    jap: { type: GraphQLString },
    categoryId: {
      type: CategoryType,
      resolve(parent, args){
        return Category.findById(parent.categoryId)
      }
    }
  })
});

const CategoryType = new GraphQLObjectType({
  name: 'Category',
  fields: () => ({
    id:  { type: GraphQLID },
    name: { type: GraphQLString },
    words: {
      type: new GraphQLList(WordType),
      resolve(parent, args){
        return Word.find({categoryId: parent.id})
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
        return Word.findById(args.id)
      }
    },
    category: {
      type:CategoryType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Category.findById(args.id)
      }
    },
    words: {
      type: new GraphQLList(WordType),
      resolve(parent,args){
        return Word.find({})
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      resolve(parent,args){
        return Category.find({})
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWord: {
      type: WordType,
      args: {
        eng: {type: new GraphQLNonNull(GraphQLString)},
        jap: {type: new GraphQLNonNull(GraphQLString)},
        categoryId: {type: new GraphQLNonNull(GraphQLID)},
      },
      resolve(parent,args) {
        let word = new Word({
          eng: args.eng,
          jap: args.jap,
          categoryId: args.categoryId
        })
        return word.save();
      }
    },
    addCategory: {
      type: CategoryType,
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(parent,args) {
        let category = new Category({
          name: args.name,
        })
        return category.save();
      }
    }
  }
})
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})