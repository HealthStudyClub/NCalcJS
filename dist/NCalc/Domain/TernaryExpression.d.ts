import { LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class TernaryExpression extends LogicalExpression {
    constructor(leftExpression: LogicalExpression, middleExpression: LogicalExpression, rightExpression: LogicalExpression);
    LeftExpression: LogicalExpression;
    MiddleExpression: LogicalExpression;
    RightExpression: LogicalExpression;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
