import { Expression } from './Expression';
export declare class FunctionArgs {
    private _result;
    HasResult: boolean;
    private _parameters;
    get Result(): any;
    set Result(value: any);
    get Parameters(): Expression[];
    set Parameters(value: Expression[]);
}
