import { ICallback, IEventPayload } from './../../models';
import { Context, Callback } from 'aws-lambda';
export declare function hello(event: IEventPayload, context: any, callback: ICallback): void;
export declare function dataReceiver(event: any, context: Context, callback: Callback): void;
export declare function logger(event: any, context: Context, callback: Callback): void;
