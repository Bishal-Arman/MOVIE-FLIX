require('dotenv').config();

const VITE_EPISODES_ENDPOINT = process.env.VITE_EPISODES_ENDPOINT;


import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: VITE_EPISODES_ENDPOINT,
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/graphql/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  },
  ignoreNoDocuments: true,
};

export default config;
