import { dlopen, FFIType, suffix } from "bun:ffi";

// `suffix` is either "dylib", "so", or "dll" depending on the platform
const path = `libsqlite3.${suffix}`;

const {
  symbols: {
    sqlite3_libversion, // the function to call
  },
} = dlopen(path, {
  sqlite3_libversion: {
    args: [], // no arguments
    returns: FFIType.cstring, // returns a string
  },
});

console.log(`SQLite 3 version: ${sqlite3_libversion()}`);