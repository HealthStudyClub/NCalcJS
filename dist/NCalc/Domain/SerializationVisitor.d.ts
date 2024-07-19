import { BinaryExpression, Identifier, LogicalExpression, LogicalExpressionVisitor, NCalcFunction, TernaryExpression, UnaryExpression } from "./";
import { ValueExpression } from "./ValueExpression";
export declare class SerializationVisitor extends LogicalExpressionVisitor {
    private readonly _numberFormatInfo;
    protected EncapsulateNoValue(expression: LogicalExpression): void;
    constructor();
    Result: string[];
    Visit(expression: LogicalExpression): void;
    Visit(expression: TernaryExpression): void;
    Visit(expression: BinaryExpression): void;
    Visit(expression: UnaryExpression): void;
    Visit(expression: ValueExpression): void;
    Visit(func: NCalcFunction): void;
    Visit(parameter: Identifier): void;
    protected VisitLogical(expression: LogicalExpression): void;
    VisitTernary(expression: TernaryExpression): void;
    VisitBinary(expression: BinaryExpression): void;
    VisitUnary(expression: UnaryExpression): void;
    VisitValue(expression: ValueExpression): void;
    VisitFunction(func: NCalcFunction): void;
    VisitIdentifier(parameter: Identifier): void;
}
