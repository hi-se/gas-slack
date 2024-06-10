/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { main } from "./app.js";

/**
 * @file GASエディタから実行できる関数を定義する
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const global: any;
global.main = main;
