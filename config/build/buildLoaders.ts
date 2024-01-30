import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type ModuleOptions } from 'webpack'
import { type IBuildOptions } from './types/types'
import ReactRefreshTypeScript from 'react-refresh-typescript'

export const buildLoaders = (options: IBuildOptions): ModuleOptions['rules'] => {
  const isDev = options.mode === 'development'

  return [
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
              auto: (resPath: string) => Boolean(resPath.includes('.module.'))
            }
          }
        },
        'sass-loader'
      ]
    },
    {
      test: /\.tsx?$/,
      // use: 'ts-loader',
      // options: {
      //     getCustomTransformers: () => ({
      //         before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
      //     }),
      //
      // },
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            getCustomTransformers: () => ({
              before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
            }),
            transpileOnly: true
          }
        }
      ],
      exclude: /node_modules/
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }]
    }
  ]
}
