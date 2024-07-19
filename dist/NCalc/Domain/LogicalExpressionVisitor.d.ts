import { BinaryExpression, Identifier, LogicalExpression, NCalcFunction, TernaryExpression, UnaryExpression, ValueExpression } from '.';
export declare abstract class LogicalExpressionVisitor {
    abstract Visit(expression: LogicalExpression): void;
    abstract Visit(expression: TernaryExpression): void;
    abstract Visit(expression: BinaryExpression): void;
    abstract Visit(expression: UnaryExpression): void;
    abstract Visit(expression: ValueExpression): void;
    abstract Visit(func: NCalcFunction): void;
    abstract Visit(func: Identifier): void;
    abstract Visit(expression: any): void;
}
