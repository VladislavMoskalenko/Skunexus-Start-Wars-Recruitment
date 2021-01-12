import { Row, Col } from "antd";
import PropTypes from "prop-types";

function Page({ title, children }) {
  return (
    <Row>
      <Col md={24}>
        <h1 className="pageTitle">{title}</h1>
      </Col>
      <Col md={24}>{children}</Col>
    </Row>
  );
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Page.defaultProps = {
  title: "",
  children: null,
};

export default Page;
