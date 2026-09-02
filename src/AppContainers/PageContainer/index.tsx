import type { ReactNode } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PageContainerStyle } from "../styles/PageContainerStyle";

interface PageContainerProps {
  children?: ReactNode;
}

function PageContainer({ children }: PageContainerProps) {
  return (
    <PageContainerStyle>
      <Row>
        <Col className="col-12">{children}</Col>
      </Row>
    </PageContainerStyle>
  );
}

export default PageContainer;
