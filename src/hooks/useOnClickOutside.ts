import type { RefObject } from 'react'

import { useEventListener } from 'usehooks-ts'

type Handler = (event: MouseEvent) => void

function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  ref2?: RefObject<T>,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, event => {
    const el = ref?.current
    const el2 = ref2?.current

    // Do nothing if clicking ref's element or descendent elements
    if ((!el || el.contains(event.target as Node)) || (!el2 || el2.contains(event.target as Node)) ) {
      return
    }

    handler(event)
  })
}

export default useOnClickOutside
