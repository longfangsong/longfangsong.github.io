/* tslint:disable */
/* eslint-disable */
/**
*/
export class BinaryDecisionDiagram {
  free(): void;
/**
* @returns {BinaryDecisionDiagram}
*/
  reduce(): BinaryDecisionDiagram;
/**
* @param {string} variable_name
* @param {boolean} variable_value
*/
  restrict(variable_name: string, variable_value: boolean): void;
/**
* @param {string} variable_name
* @returns {BinaryDecisionDiagram}
*/
  exists(variable_name: string): BinaryDecisionDiagram;
/**
* @param {string} variable_name
* @returns {BinaryDecisionDiagram}
*/
  universal(variable_name: string): BinaryDecisionDiagram;
/**
* @returns {string}
*/
  dot(): string;
/**
* @param {string} code
* @returns {BinaryDecisionDiagram}
*/
  static from_str(code: string): BinaryDecisionDiagram;
/**
* @param {BinaryDecisionDiagram} other
* @returns {BinaryDecisionDiagram}
*/
  or(other: BinaryDecisionDiagram): BinaryDecisionDiagram;
/**
* @param {BinaryDecisionDiagram} other
* @returns {BinaryDecisionDiagram}
*/
  and(other: BinaryDecisionDiagram): BinaryDecisionDiagram;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_binarydecisiondiagram_free: (a: number) => void;
  readonly binarydecisiondiagram_reduce: (a: number) => number;
  readonly binarydecisiondiagram_restrict: (a: number, b: number, c: number, d: number) => void;
  readonly binarydecisiondiagram_exists: (a: number, b: number, c: number) => number;
  readonly binarydecisiondiagram_universal: (a: number, b: number, c: number) => number;
  readonly binarydecisiondiagram_dot: (a: number, b: number) => void;
  readonly binarydecisiondiagram_from_str: (a: number, b: number) => number;
  readonly binarydecisiondiagram_or: (a: number, b: number) => number;
  readonly binarydecisiondiagram_and: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
