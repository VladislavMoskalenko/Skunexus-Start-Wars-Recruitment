import "./TextField.css";

import { Form, Input, InputNumber, Col } from "antd";
import PropTypes from "prop-types";

function TextField({ name, placeholder, title, rules, type, colProps }) {
  const Component = type === "number" ? InputNumber : Input;
  return (
    <Col {...colProps}>
      <Form.Item label={title} name={name} rules={rules} type={type}>
        <Component className="textInput" placeholder={placeholder} />
      </Form.Item>
    </Col>
  );
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  colProps: PropTypes.shape({
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
  }),
  placeholder: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.object),
};

TextField.defaultProps = {
  title: "",
  colProps: { md: 24, sm: 24, xs: 24 },
  placeholder: "",
  rules: [],
};

export default TextField;
