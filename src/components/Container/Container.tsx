import { HTMLAttributes, PropsWithChildren, forwardRef } from "react";

type Props = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;
const Container = forwardRef<HTMLDivElement, Props>(function Container({ children, ...rest }, ref) {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Container;

export type { Props as ContainerProps };
