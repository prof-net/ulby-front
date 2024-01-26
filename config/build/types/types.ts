export interface IBuildPath {
    entry: string;
    html: string;
    output: string;
    public: string;
}

export type BuildMode = 'development' | 'production';

export interface IBuildOptions {
    port: number;
    paths: IBuildPath;
    mode: BuildMode;
}