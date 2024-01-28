import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildDevServer} from "./buildDevServer";
import {buildPlugins} from "./buildPlugins";
import {buildResolvers} from "./buildResolvers";
import {IBuildOptions} from "./types/types";


export const buildWebpack = (options: IBuildOptions): webpack.Configuration => {
    const isDev = options.mode === 'development';

    return {
        mode: options.mode ?? 'development',
        entry: options.paths.entry,
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(options),
        output: {
            filename: '[name].[contenthash].js',
            path: options.paths.output,
            clean: true
        },
        plugins: buildPlugins(options),
        devServer: isDev ? buildDevServer(options) : null,
        devtool: isDev ? 'inline-source-map': undefined
    };
}