import { LogicalExpression } from "./Domain/index";
import { EvaluateOptions } from './EvaluationOptions';
import { EvaluateFunctionHandler, EvaluateParameterHandler } from './types';
export declare class Expression {
    Options: EvaluateOptions;
    /**
   * Orginal strings representation of the expression
   */
    protected OriginalExpression: string;
    private static _cacheEnabled;
    private static _compiledExpression;
    ParsedExpression: LogicalExpression;
    protected ParameterEnumerators: {
        [key: string]: any;
    };
    protected ParametersBackup: {
        [key: string]: object;
    };
    Parameters: {
        [key: string]: any;
    };
    get CacheEnabled(): boolean;
    set CacheEnabled(value: boolean);
    static get CachedExpressions(): {
        [key: string]: WeakRef<LogicalExpression>;
    };
    constructor(expression: LogicalExpression);
    constructor(expression: string);
    constructor(expression: LogicalExpression, options: EvaluateOptions);
    constructor(expression: string, options: EvaluateOptions);
    errors: any[];
    static Compile(expression: string, nocache: boolean): LogicalExpression;
    /**
   * Detects whether the expression has errors. This will simply return a boolean value.
   * You can access the error by using the `errors` getter.
   */
    HasErrors(): boolean;
    EvaluateFunction: {
        [key: string]: EvaluateFunctionHandler;
    };
    EvaluateParameter: {
        [key: string]: EvaluateParameterHandler;
    };
    Evaluate(): any;
}
