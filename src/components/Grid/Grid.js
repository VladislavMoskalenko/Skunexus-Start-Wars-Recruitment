import "./Grid.css";

import { Table } from "antd";
import PropTypes from "prop-types";

function Grid({ columns, data, loading, rowKey, pagination, setPage }) {
  return (
    <Table
      dataSource={data}
      columns={columns}
      loading={loading}
      rowKey={rowKey}
      pagination={
        pagination ? { ...pagination, showSizeChanger: false } : false
      }
      onChange={(pagination) => setPage(pagination.current)}
    />
  );
}

Grid.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      dataIndex: PropTypes.string,
      title: PropTypes.string,
      render: PropTypes.func,
      align: PropTypes.string,
    })
  ),
  data: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  rowKey: PropTypes.string.isRequired,
  pagination: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      total: PropTypes.number,
      current: PropTypes.number,
      pageSize: PropTypes.number,
    }),
  ]),
  setPage: PropTypes.func,
};

Grid.defaultProps = {
  columns: [],
  data: [],
  pagination: false,
  loading: false,
  setPage: () => null,
};

export default Grid;
