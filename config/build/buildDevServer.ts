import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import {IBuildOptions} from "./types/types";
export const buildDevServer = (options: IBuildOptions): DevServerConfiguration => {
    return {
        open: true,
        port: options.port || 4000,
        historyApiFallback: true,
        hot: true
    }
}