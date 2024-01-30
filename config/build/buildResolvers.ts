import { type Configuration } from 'webpack'
import { type IBuildOptions } from './types/types'
export const buildResolvers = (options: IBuildOptions): Configuration['resolve'] => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
