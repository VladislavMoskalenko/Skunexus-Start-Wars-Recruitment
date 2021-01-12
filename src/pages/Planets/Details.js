import Grid from "../../components/Grid";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Page from "../../components/Page/Page";

function Details() {
  const { planetId } = useParams();
  const { list: planetsList, loading } = useStoreState(
    (state) => state.planets
  );
  const { getList } = useStoreActions((actions) => actions.planets);
  useEffect(() => {
    getList({ id: planetId });
  }, []);
  const columns = [
    { title: "id", dataIndex: "id" },
    {
      title: "Name",
      dataIndex: "name",
    },
  ];
  return (
    <Page title="Start Wars Planet">
      <Grid
        columns={columns}
        data={planetsList}
        rowKey="id"
        loading={loading}
      />
    </Page>
  );
}

export default Details;
