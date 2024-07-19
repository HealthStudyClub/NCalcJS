import { BinaryExpression, Identifier, LogicalExpressionVisitor, NCalcFunction, TernaryExpression, UnaryExpression } from "./";
import { EvaluateOptions } from "../EvaluationOptions";
import { EvaluateFunctionHandler, EvaluateParameterHandler } from "../types";
import { ValueExpression } from "./ValueExpression";
export declare class EvaluationVisitor extends LogicalExpressionVisitor {
    private readonly _options;
    private get IgnoreCase();
    constructor(options: EvaluateOptions);
    Result: any;
    private Evaluate;
    static FromJson(expression: any): any;
    Visit(expression: any): void;
    VisitTernary(expression: TernaryExpression): void;
    private static CommonTypes;
    private static GetMostPreciseType;
    CompareUsingMostPreciseType(a: any, b: any): number;
    private static IsReal;
    VisitBinaryExpression(expression: BinaryExpression): void;
    VisitUnaryExpression(expression: UnaryExpression): void;
    VisitValueExpression(expression: ValueExpression): void;
    VisitNCalcFunction(func: NCalcFunction): void;
    private CheckCase;
    Parameters: {
        [key: string]: any;
    };
    EvaluateFunction: {
        [key: string]: EvaluateFunctionHandler;
    };
    EvaluateParameter: {
        [key: string]: EvaluateParameterHandler;
    };
    private OnEvaluateFunction;
    private OnEvaluateParameter;
    VisitIdentifier(parameter: Identifier): void;
}
