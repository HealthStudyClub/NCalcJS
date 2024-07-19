import { LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class BinaryExpression extends LogicalExpression {
    constructor(type: BinaryExpressionType, leftExpression: LogicalExpression, rightExpression: LogicalExpression);
    LeftExpression: LogicalExpression;
    RightExpression: LogicalExpression;
    Type: BinaryExpressionType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum BinaryExpressionType {
    None = 0,
    And = 1,
    Or = 2,
    NotEqual = 3,
    LesserOrEqual = 4,
    GreaterOrEqual = 5,
    Lesser = 6,
    Greater = 7,
    Equal = 8,
    Minus = 9,
    Plus = 10,
    Modulo = 11,
    Div = 12,
    Times = 13,
    BitwiseOr = 14,
    BitwiseAnd = 15,
    BitwiseXOr = 16,
    LeftShift = 17,
    RightShift = 18,
    Unknown = 19,
    Exponentiation = 20
}
