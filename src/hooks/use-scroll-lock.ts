import { useEffect } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';


export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? 'hidden' : 'visible';
    if (isLocked) {
      disablePageScroll()
    } else {
      enablePageScroll()
    }

    return () => {
      document.body.style.overflow = 'visible';
      enablePageScroll()
    };
  }, [isLocked]);
}
