import { Link, useParams } from "react-router-dom";
import { Button } from "antd";
import Grid from "../../components/Grid";
import { useStoreState, useStoreActions } from "easy-peasy";
import { useEffect } from "react";
import Page from "../../components/Page/Page";
import AddModal from "./AddModal";

function Planets() {
  const { list: planetsList, loading, pagination } = useStoreState(
    (state) => state.planets
  );
  const { getList, clearList } = useStoreActions((actions) => actions.planets);
  const { filmId } = useParams();

  useEffect(() => {
    getList({ filmId });
    return clearList;
  }, []);

  const columns = [
    {
      title: "Name",
      key: "name",
      render: (item) => <Link to={`/planets/${item.id}`}>{item.name}</Link>,
    },
    {
      title: "Rotation Period",
      dataIndex: "rotation_period",
      align: "right",
    },
    {
      title: "Orbital Period",
      dataIndex: "orbital_period",
      align: "right",
    },
    {
      title: "Diameter",
      dataIndex: "diameter",
      align: "right",
    },
    { title: "Climate", dataIndex: "climate" },
    { title: "Gravity", dataIndex: "gravity" },
    { title: "Terrain", dataIndex: "terrain" },
    {
      title: "Surface Water",
      dataIndex: "surface_water",
      align: "right",
    },
    {
      title: "Population",
      dataIndex: "population",
      align: "right",
    },
    {
      title: "Actions",
      key: "id",
      render: (item) => (
        <span>
          {item.films.length ? (
            <Link to={`/planets/${item.id}/films`}>
              <Button className="tableButton" size="small" type="primary">
                Go To Films({item.films.length})
              </Button>
            </Link>
          ) : null}
          {item.residents.length ? (
            <Link to={`/planets/${item.id}/residents`}>
              <Button className="tableButton" size="small" type="primary">
                Go To Residents({item.residents.length})
              </Button>
            </Link>
          ) : null}
        </span>
      ),
    },
  ];

  return (
    <Page title="Star Wars Planets">
      <Grid
        data={planetsList}
        columns={columns}
        loading={loading}
        rowKey="id"
        pagination={pagination}
        setPage={(page) => getList({ page })}
      />
      <AddModal />
    </Page>
  );
}

export default Planets;
