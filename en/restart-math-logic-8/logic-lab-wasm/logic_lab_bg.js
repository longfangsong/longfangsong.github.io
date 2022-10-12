import * as wasm from './logic_lab_bg.wasm';

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
    if (cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedInt32Memory0 = new Int32Array();

function getInt32Memory0() {
    if (cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
*/
export class BinaryDecisionDiagram {

    static __wrap(ptr) {
        const obj = Object.create(BinaryDecisionDiagram.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_binarydecisiondiagram_free(ptr);
    }
    /**
    * @returns {BinaryDecisionDiagram}
    */
    reduce() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.binarydecisiondiagram_reduce(ptr);
        return BinaryDecisionDiagram.__wrap(ret);
    }
    /**
    * @param {string} variable_name
    * @param {boolean} variable_value
    */
    restrict(variable_name, variable_value) {
        const ptr0 = passStringToWasm0(variable_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.binarydecisiondiagram_restrict(this.ptr, ptr0, len0, variable_value);
    }
    /**
    * @param {string} variable_name
    * @returns {BinaryDecisionDiagram}
    */
    exists(variable_name) {
        const ptr0 = passStringToWasm0(variable_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.binarydecisiondiagram_exists(this.ptr, ptr0, len0);
        return BinaryDecisionDiagram.__wrap(ret);
    }
    /**
    * @param {string} variable_name
    * @returns {BinaryDecisionDiagram}
    */
    universal(variable_name) {
        const ptr0 = passStringToWasm0(variable_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.binarydecisiondiagram_universal(this.ptr, ptr0, len0);
        return BinaryDecisionDiagram.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    dot() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.binarydecisiondiagram_dot(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} code
    * @returns {BinaryDecisionDiagram}
    */
    static from_str(code) {
        const ptr0 = passStringToWasm0(code, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.binarydecisiondiagram_from_str(ptr0, len0);
        return BinaryDecisionDiagram.__wrap(ret);
    }
    /**
    * @param {BinaryDecisionDiagram} other
    * @returns {BinaryDecisionDiagram}
    */
    or(other) {
        _assertClass(other, BinaryDecisionDiagram);
        const ret = wasm.binarydecisiondiagram_or(this.ptr, other.ptr);
        return BinaryDecisionDiagram.__wrap(ret);
    }
    /**
    * @param {BinaryDecisionDiagram} other
    * @returns {BinaryDecisionDiagram}
    */
    and(other) {
        _assertClass(other, BinaryDecisionDiagram);
        const ret = wasm.binarydecisiondiagram_and(this.ptr, other.ptr);
        return BinaryDecisionDiagram.__wrap(ret);
    }
}

export function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

