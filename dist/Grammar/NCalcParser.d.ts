import { ATN, DFA, FailedPredicateException, Parser, ParserRuleContext, TerminalNode, Token, TokenStream } from 'antlr4';
import NCalcListener from "./NCalcListener.js";
import NCalcVisitor from "./NCalcVisitor.js";
import { Identifier, ValueExpression, LogicalExpression } from "../NCalc/Domain";
export default class NCalcParser extends Parser {
    static readonly T__0 = 1;
    static readonly T__1 = 2;
    static readonly T__2 = 3;
    static readonly T__3 = 4;
    static readonly T__4 = 5;
    static readonly T__5 = 6;
    static readonly T__6 = 7;
    static readonly T__7 = 8;
    static readonly T__8 = 9;
    static readonly T__9 = 10;
    static readonly T__10 = 11;
    static readonly T__11 = 12;
    static readonly T__12 = 13;
    static readonly T__13 = 14;
    static readonly T__14 = 15;
    static readonly T__15 = 16;
    static readonly T__16 = 17;
    static readonly T__17 = 18;
    static readonly T__18 = 19;
    static readonly T__19 = 20;
    static readonly T__20 = 21;
    static readonly T__21 = 22;
    static readonly T__22 = 23;
    static readonly T__23 = 24;
    static readonly T__24 = 25;
    static readonly T__25 = 26;
    static readonly T__26 = 27;
    static readonly T__27 = 28;
    static readonly NOT = 29;
    static readonly TRUE = 30;
    static readonly FALSE = 31;
    static readonly AND = 32;
    static readonly OR = 33;
    static readonly ID = 34;
    static readonly FLOAT = 35;
    static readonly INTEGER = 36;
    static readonly STRING = 37;
    static readonly DATETIME = 38;
    static readonly NAME = 39;
    static readonly EXPONENT = 40;
    static readonly WS = 41;
    static readonly EOF: number;
    static readonly RULE_ncalcExpression = 0;
    static readonly RULE_logicalExpression = 1;
    static readonly RULE_conditionalExpression = 2;
    static readonly RULE_booleanExpression = 3;
    static readonly RULE_relationalExpression = 4;
    static readonly RULE_shiftExpression = 5;
    static readonly RULE_additiveExpression = 6;
    static readonly RULE_multiplicativeExpression = 7;
    static readonly RULE_unaryExpression = 8;
    static readonly RULE_exponentialExpression = 9;
    static readonly RULE_primaryExpression = 10;
    static readonly RULE_value = 11;
    static readonly RULE_identifier = 12;
    static readonly RULE_expressionList = 13;
    static readonly RULE_arguments = 14;
    static readonly literalNames: (string | null)[];
    static readonly symbolicNames: (string | null)[];
    static readonly ruleNames: string[];
    get grammarFileName(): string;
    get literalNames(): (string | null)[];
    get symbolicNames(): (string | null)[];
    get ruleNames(): string[];
    get serializedATN(): number[];
    protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException;
    BS: string;
    ExtractString(text: any): any;
    Errors: any[];
    GetExpression(): LogicalExpression;
    constructor(input: TokenStream);
    ncalcExpression(): NcalcExpressionContext;
    logicalExpression(): LogicalExpressionContext;
    conditionalExpression(): ConditionalExpressionContext;
    booleanExpression(): BooleanExpressionContext;
    relationalExpression(): RelationalExpressionContext;
    shiftExpression(): ShiftExpressionContext;
    additiveExpression(): AdditiveExpressionContext;
    multiplicativeExpression(): MultiplicativeExpressionContext;
    unaryExpression(): UnaryExpressionContext;
    exponentialExpression(): ExponentialExpressionContext;
    primaryExpression(): PrimaryExpressionContext;
    value(): ValueContext;
    identifier(): IdentifierContext;
    expressionList(): ExpressionListContext;
    arguments(): ArgumentsContext;
    static readonly _serializedATN: number[];
    private static __ATN;
    static get _ATN(): ATN;
    static DecisionsToDFA: DFA[];
}
export declare class NcalcExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _logicalExpression: LogicalExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    logicalExpression(): LogicalExpressionContext;
    EOF(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class LogicalExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: ConditionalExpressionContext;
    _middle: ConditionalExpressionContext;
    _right: ConditionalExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    conditionalExpression_list(): ConditionalExpressionContext[];
    conditionalExpression(i: number): ConditionalExpressionContext;
    WS_list(): TerminalNode[];
    WS(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ConditionalExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: BooleanExpressionContext;
    _right: BooleanExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    booleanExpression_list(): BooleanExpressionContext[];
    booleanExpression(i: number): BooleanExpressionContext;
    AND_list(): TerminalNode[];
    AND(i: number): TerminalNode;
    OR_list(): TerminalNode[];
    OR(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class BooleanExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: RelationalExpressionContext;
    _right: RelationalExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    relationalExpression_list(): RelationalExpressionContext[];
    relationalExpression(i: number): RelationalExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class RelationalExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: ShiftExpressionContext;
    _right: ShiftExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    shiftExpression_list(): ShiftExpressionContext[];
    shiftExpression(i: number): ShiftExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ShiftExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: AdditiveExpressionContext;
    _right: AdditiveExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    additiveExpression_list(): AdditiveExpressionContext[];
    additiveExpression(i: number): AdditiveExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class AdditiveExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: MultiplicativeExpressionContext;
    _right: MultiplicativeExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    multiplicativeExpression_list(): MultiplicativeExpressionContext[];
    multiplicativeExpression(i: number): MultiplicativeExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class MultiplicativeExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: UnaryExpressionContext;
    _right: UnaryExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    unaryExpression_list(): UnaryExpressionContext[];
    unaryExpression(i: number): UnaryExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class UnaryExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _exponentialExpression: ExponentialExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    exponentialExpression(): ExponentialExpressionContext;
    WS_list(): TerminalNode[];
    WS(i: number): TerminalNode;
    NOT(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ExponentialExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _left: PrimaryExpressionContext;
    _right: UnaryExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    primaryExpression(): PrimaryExpressionContext;
    unaryExpression_list(): UnaryExpressionContext[];
    unaryExpression(i: number): UnaryExpressionContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class PrimaryExpressionContext extends ParserRuleContext {
    val: LogicalExpression;
    _logicalExpression: LogicalExpressionContext;
    _expr: ValueContext;
    _identifier: IdentifierContext;
    _arguments: ArgumentsContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    logicalExpression(): LogicalExpressionContext;
    value(): ValueContext;
    identifier(): IdentifierContext;
    arguments(): ArgumentsContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ValueContext extends ParserRuleContext {
    val: ValueExpression;
    _FLOAT: Token;
    _INTEGER: Token;
    _STRING: Token;
    _DATETIME: Token;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    FLOAT(): TerminalNode;
    INTEGER(): TerminalNode;
    STRING(): TerminalNode;
    DATETIME(): TerminalNode;
    TRUE(): TerminalNode;
    FALSE(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class IdentifierContext extends ParserRuleContext {
    val: Identifier;
    _ID: Token;
    _NAME: Token;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    ID(): TerminalNode;
    NAME(): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ExpressionListContext extends ParserRuleContext {
    val: LogicalExpression[];
    _first: LogicalExpressionContext;
    _follow: LogicalExpressionContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    logicalExpression_list(): LogicalExpressionContext[];
    logicalExpression(i: number): LogicalExpressionContext;
    WS_list(): TerminalNode[];
    WS(i: number): TerminalNode;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
export declare class ArgumentsContext extends ParserRuleContext {
    val: LogicalExpression[];
    _expressionList: ExpressionListContext;
    constructor(parser?: NCalcParser, parent?: ParserRuleContext, invokingState?: number);
    expressionList(): ExpressionListContext;
    get ruleIndex(): number;
    enterRule(listener: NCalcListener): void;
    exitRule(listener: NCalcListener): void;
    accept<Result>(visitor: NCalcVisitor<Result>): Result;
}
