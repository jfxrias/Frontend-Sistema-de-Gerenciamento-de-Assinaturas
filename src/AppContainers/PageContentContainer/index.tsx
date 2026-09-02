import type { ReactNode } from "react";
import { PageContentContainerStyle } from "../styles/PageContentContainerStyle";

interface PageContentContainerProps {
  children?: ReactNode;
}

function PageContentContainer({ children }: PageContentContainerProps) {
  return (
    <PageContentContainerStyle>
      {children}
    </PageContentContainerStyle>
  );
}

export default PageContentContainer;
