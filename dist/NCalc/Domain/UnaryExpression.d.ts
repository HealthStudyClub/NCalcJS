import { LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class UnaryExpression extends LogicalExpression {
    constructor(type: UnaryExpressionType, expression: LogicalExpression);
    Expression: LogicalExpression;
    Type: UnaryExpressionType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum UnaryExpressionType {
    Not = 0,
    Negate = 1,
    BitwiseNot = 2,
    Positive = 3
}
