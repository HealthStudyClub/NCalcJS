import { LogicalExpression, LogicalExpressionVisitor } from "./";
export declare class ValueExpression extends LogicalExpression {
    constructor();
    constructor(value: string);
    constructor(value: number);
    constructor(value: boolean);
    constructor(value: string, valueType: ValueType);
    constructor(value: number, valueType: ValueType);
    constructor(value: boolean, valueType: ValueType);
    Value: any;
    Type: ValueType;
    ClassName: string;
    Accept(visitor: LogicalExpressionVisitor): void;
}
export declare enum ValueType {
    None = 0,
    Integer = 1,
    String = 2,
    DateTime = 3,
    Float = 4,
    Boolean = 5
}
