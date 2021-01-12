import { Select, Form, Col } from "antd";
import PropTypes from "prop-types";

function SelectField({ name, title, options, colProps, placeholder, rules }) {
  return (
    <Col {...colProps}>
      <Form.Item name={name} label={title} rules={rules}>
        <Select placeholder={placeholder}>
          {options.map((option) => (
            <Select.Option key={option.value} value={option.value}>
              {option.name}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Col>
  );
}

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, value: PropTypes.string })
  ),
  colProps: PropTypes.shape({
    md: PropTypes.number,
    sm: PropTypes.number,
    xs: PropTypes.number,
  }),
  placeholder: PropTypes.string,
  rules: PropTypes.arrayOf(PropTypes.object),
};

SelectField.defaultProps = {
  title: "",
  options: [],
  colProps: { md: 24, sm: 24, xs: 24 },
  placeholder: "",
  rules: [],
};

export default SelectField;
