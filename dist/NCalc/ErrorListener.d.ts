export declare class ErrorListener {
    private _errors;
    get errors(): any;
    syntaxError(...args: any): void;
    reportAmbiguity(): void;
    reportAttemptingFullContext(): void;
    reportContextSensitivity(): void;
}
