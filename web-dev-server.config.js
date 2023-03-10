import { esbuildPlugin } from '@web/dev-server-esbuild';

export default {
  appIndex: './index.html',
  nodeResolve: {
    exportConditions: ['development']    
  },
  plugins: [esbuildPlugin({ ts: true, target: 'auto' })]
};
