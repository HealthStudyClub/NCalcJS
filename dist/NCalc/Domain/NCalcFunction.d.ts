import { Identifier, LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class NCalcFunction extends LogicalExpression {
    constructor(identifier: Identifier, expressions: LogicalExpression[]);
    Identifier: Identifier;
    Expressions: LogicalExpression[];
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
