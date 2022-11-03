/** Add custom mixins to the Material UI types. */
declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    truncateText: { [selector: string]: { [property: string]: string } }; //CSSSelector or CSSObject?
  }
}

// https://github.com/mui/material-ui/issues/35287 - should become obsolete with react18 and the according types
declare global {
  namespace React {
    interface DOMAttributes<T> {
      onResize?: ReactEventHandler<T> | undefined;
      onResizeCapture?: ReactEventHandler<T> | undefined;
      nonce?: string | undefined;
    }
  }
}

export {};
