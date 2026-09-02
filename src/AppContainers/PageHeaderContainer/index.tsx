import type { ReactNode } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { PageHeaderContainerStyle } from "../styles/PageHeaderContainerStyle";

interface PageHeaderContainerProps {
  title: string;
  icon?: ReactNode;
}

function PageHeaderContainer({ title, icon }: PageHeaderContainerProps) {
  return (
    <Row>
      <Col>
        <PageHeaderContainerStyle>
          {icon}
          <span>{title}</span>
        </PageHeaderContainerStyle>
      </Col>
    </Row>
  );
}

export default PageHeaderContainer;
