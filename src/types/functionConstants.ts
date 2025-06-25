export interface FunctionConfig {
  versions: {
    created: string;
    updated: string;
    available: string;
  };
  resourceLinkPath: string;
  codeSandboxLink?: string;
}

export type FunctionsConfig<Names extends string> = Record<Names, FunctionConfig>;
