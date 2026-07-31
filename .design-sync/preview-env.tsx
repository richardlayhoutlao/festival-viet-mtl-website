/*
 * Preview environment exports for design-sync.
 *
 * Every component in this repo that renders copy goes through next-intl's
 * useTranslations(), which throws outside a NextIntlClientProvider. Neither the
 * provider nor the message catalogue is part of this repo's own component API,
 * so they're re-exported here and merged onto the bundle global via
 * cfg.extraEntries — that's what lets cfg.provider reference them by name.
 *
 * previewMessages is a $ref rather than an inlined copy so the cards always
 * render the repo's real strings and never drift from messages/en.json.
 */
import messages from "../messages/en.json"

export { NextIntlClientProvider } from "next-intl"

export const previewMessages = messages

/*
 * VietFestLogo.tsx default-exports a const named SVGComponent. The synthesized
 * entry uses `export *`, which never re-exports a default — so the logo would
 * reach neither the bundle nor the design agent. This binds it under the name
 * the repo actually calls it by.
 */
export { default as VietFestLogo } from "../components/common/VietFestLogo"
