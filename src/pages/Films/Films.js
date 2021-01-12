import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";
import { Link, useParams } from "react-router-dom";
import Grid from "../../components/Grid";
import Page from "../../components/Page/Page";

function Films() {
  const { planetId, personId } = useParams();

  const { list: filmsList, loading, pagination } = useStoreState(
    (state) => state.films
  );
  const { getList, clearList } = useStoreActions((actions) => actions.films);
  useEffect(() => {
    getList({ planetId, personId });
    return clearList;
  }, []);

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Episode Id",
      align: "right",
      dataIndex: "episode_id",
      key: "episode_id",
    },
    {
      title: "Characters",
      key: "characters",
      align: "right",
      render: (item) => (
        <Link to={`/films/${item.id}/characters`}>
          {item.characters.length}
        </Link>
      ),
    },
    {
      title: "Planets",
      key: "planets",
      align: "right",
      render: (item) => (
        <Link to={`/films/${item.id}/planets`}>{item.planets.length}</Link>
      ),
    },
    {
      title: "Starships",
      key: "starships",
      align: "right",
      render: (item) => item.starships.length,
    },
    {
      title: "Vehicles",
      key: "vehicles",
      align: "right",
      render: (item) => item.vehicles.length,
    },
    {
      title: "Species",
      align: "right",
      key: "species",
      render: (item) => item.species.length,
    },
  ];

  return (
    <Page title="Star Wars Films">
      <Grid
        columns={columns}
        data={filmsList}
        loading={loading}
        rowKey="id"
        pagination={pagination}
      />
    </Page>
  );
}

export default Films;
