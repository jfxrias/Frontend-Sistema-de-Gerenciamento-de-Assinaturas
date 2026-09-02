import Card from "react-bootstrap/Card";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BasicCardStyle } from "./style";

interface BasicCardProps {
  title: string;
  text: string;
  buttonAlternativeText: string;
  action: () => void;
}

function BasicCardComponent({ title, text, buttonAlternativeText, action }: BasicCardProps) {
  return (
    <BasicCardStyle>
      <Card>
        <Card.Body className="card-body d-flex justify-content-between align-items-center">
          <div>
            <Card.Title tabIndex={0}>{title}</Card.Title>
            <Card.Text tabIndex={0}>{text}</Card.Text>
          </div>
          <button
            role="button"
            aria-label={buttonAlternativeText}
            title={buttonAlternativeText}
            onClick={action}
          >
            <RiDeleteBin6Line />
          </button>
        </Card.Body>
      </Card>
    </BasicCardStyle>
  );
}

export default BasicCardComponent;
