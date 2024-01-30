import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin, { type Configuration } from 'mini-css-extract-plugin'
import { type IBuildOptions } from './types/types'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import path from 'path'

export const buildPlugins = (options: IBuildOptions): Configuration['plugins'] => {
  return [
    new HtmlWebpackPlugin({ template: options.paths.html, favicon: path.resolve(options.paths.public, 'favicon.ico') }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(`v ${new Date().toLocaleString()}`)
    }),
    new ReactRefreshWebpackPlugin()
  ]
}
