

import React from "react";

const useResize = () => {

    const ref: any = React.useRef();

    const [width, setWidth] = React.useState<null | number>(null);

    const observer = React.useRef(
      new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;
        setWidth(width);
      })
    );
    const disconnect = React.useCallback(() => observer.current?.disconnect(), []);

    const observe = React.useCallback(() => {
      observer.current = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect;
        setWidth(width);
      })
  
      if (ref) observer.current.observe(ref.current)
    }, [ref]);

    React.useLayoutEffect(() => {
      observe();
      return () => disconnect();
    }, [disconnect, observe]);
 
    return [ref, width];
}

export default useResize;