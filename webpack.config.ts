import path from "path";
import {buildWebpack} from "./config/build/buildWebpack";
import {BuildMode} from "./config/build/types/types";

interface IEnvVariables {
    mode: BuildMode
}

export default (env: IEnvVariables) => {
    return buildWebpack({
        mode: env.mode,
        port: 4000,
        paths: {
            html: path.resolve(__dirname, 'public', 'index.html'),
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            output: path.resolve(__dirname, 'build'),
            public: path.resolve(__dirname, 'public'),
        }
    });
}