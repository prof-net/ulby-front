import path from 'path'
import { buildWebpack } from './config/build/buildWebpack'
import { type BuildMode } from './config/build/types/types'
import type { Configuration } from 'webpack'

interface IEnvVariables {
  mode: BuildMode
}

export default (env: IEnvVariables): Configuration => {
  return buildWebpack({
    mode: env.mode,
    port: 4000,
    paths: {
      html: path.resolve(__dirname, 'public', 'index.html'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      output: path.resolve(__dirname, 'build'),
      public: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src')
    }
  })
}
