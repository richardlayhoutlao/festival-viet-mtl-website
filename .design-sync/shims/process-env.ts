/*
 * Minimal `process` global for the preview/bundle environment.
 *
 * next and next-intl read process.env.__NEXT_* / _next_intl_* at module top
 * level. In a real Next build those are inlined at compile time; in a plain
 * browser bundle they throw "process is not defined" before window.<GLOBAL> is
 * assigned, which kills the entire bundle at load.
 *
 * An empty env is the correct preview semantics: every Next feature flag reads
 * as unset. This file MUST stay import-free and MUST stay first in
 * cfg.extraEntries — the combined entry evaluates extraEntries before the main
 * package, and a module with no imports of its own evaluates before everything.
 */
const g = globalThis as unknown as {
  process?: { env: Record<string, string | undefined>; nextTick?: (fn: (...a: unknown[]) => void, ...a: unknown[]) => void }
}

g.process ??= { env: {} }
g.process.env ??= {}
g.process.nextTick ??= (fn, ...a) => { queueMicrotask(() => fn(...a)) }

export {}
