"use client"

import { useId, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

type Question = {
  readonly question: string
  readonly answer: string
}

type Props = {
  readonly questions: readonly Question[]
}

// Matches the easing used elsewhere on the page.
const EASE = [0.32, 0.72, 0, 1] as const

/**
 * FAQ accordion. One panel open at a time — holding a single index rather than
 * a set makes that exclusivity structural instead of something to enforce.
 *
 * Framer handles the open *and* close transitions: animating to and from
 * `height: "auto"` is the part CSS can't do on its own without leaning on
 * `::details-content`, which snaps shut the moment the element is hidden.
 */
export const FaqAccordion = ({ questions }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()
  const baseId = useId()

  const duration = reduceMotion ? 0 : 0.32

  return (
    <div>
      {questions.map(({ question, answer }, i) => {
        const isOpen = openIndex === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`

        return (
          <div key={question} className="border-t border-[#C8102E]/25">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`flex w-full cursor-pointer items-center justify-between gap-6 px-1 py-[26px] text-left text-[clamp(1.1rem,2vw,1.5rem)] font-bold transition-colors duration-200 select-none hover:text-[#C8102E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C8102E] motion-reduce:transition-none ${
                  isOpen ? "text-[#C8102E]" : "text-[#111]"
                }`}
              >
                {question}
                {/* Two bars rather than a +/– glyph swap: the vertical one
                    fades out on its own, which a character cut can't do */}
                <span
                  aria-hidden="true"
                  className="relative size-[22px] flex-none"
                >
                  <span className="absolute top-1/2 left-0 h-[3px] w-full -translate-y-1/2 rounded-full bg-[#C8102E]" />
                  <motion.span
                    className="absolute top-1/2 left-0 h-[3px] w-full rounded-full bg-[#C8102E]"
                    initial={false}
                    animate={{ opacity: isOpen ? 0 : 1 }}
                    transition={{ duration, ease: EASE }}
                    style={{ translateY: "-50%", rotate: 90 }}
                  />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration, ease: EASE }}
                  className="overflow-hidden"
                >
                  <p className="mb-[26px] max-w-[760px] px-1 text-[17px] leading-[1.65] text-[#555]">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
