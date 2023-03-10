import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  nodeResolve: {
    exportConditions: ['development']    
  },
  appIndex: './src/index.html',
  rootDir: 'src',
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })]
};
