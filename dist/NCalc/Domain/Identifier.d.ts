import { LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class Identifier extends LogicalExpression {
    constructor(name: string);
    Name: string;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
