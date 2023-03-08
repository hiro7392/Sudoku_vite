/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
//module.exports = {
  export default{
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals:{
    "ts-jest":{
      useESM:true,
    }
  }
};