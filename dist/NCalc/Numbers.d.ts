export declare class InvalidOperationException extends Error {
}
export declare enum TypeCode {
    Boolean = "boolean",
    Byte = "number",
    SByte = "number",
    Int16 = "number",
    UInt16 = "number",
    Int32 = "number",
    UInt32 = "number",
    Int64 = "bigint",
    UInt64 = "bigint",
    Single = "number",
    Double = "number",
    Decimal = "number"
}
export declare class Numbers {
    private static ConvertIfString;
    static Add(a: any, b: any): any;
    static Subtract(a: any, b: any): any;
    static Multiply(a: any, b: any): any;
    static Divide(a: any, b: any): any;
    static Modulo(a: any, b: any): any;
    static Max(a: any, b: any): any;
    static Min(a: any, b: any): any;
}
