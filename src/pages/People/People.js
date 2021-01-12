import { useEffect } from "react";
import { Button } from "antd";
import { Link, useParams } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import Grid from "../../components/Grid";
import Page from "../../components/Page/Page";

function People() {
  const { planetId, filmId } = useParams();
  const { list: peopleList, loading, pagination } = useStoreState(
    (state) => state.people
  );
  const { getList, clearList } = useStoreActions((actions) => actions.people);

  useEffect(() => {
    getList({ planetId, filmId });
    return clearList;
  }, []);

  const columns = [
    { title: "Name", key: "name", dataIndex: "name" },
    { title: "Height", key: "height", dataIndex: "height", align: "right" },
    { title: "Mass", key: "mass", dataIndex: "mass", align: "right" },
    { title: "Hair Color", key: "hair_color", dataIndex: "hair_color" },
    { title: "Skin Color", key: "skin_color", dataIndex: "skin_color" },
    { title: "Eye Color", key: "eye_color", dataIndex: "eye_color" },
    {
      title: "Birth Year",
      key: "birth_year",
      dataIndex: "birth_year",
      align: "right",
    },
    { title: "Gender", key: "gender", dataIndex: "gender" },
    {
      title: "Homeworld",
      key: "homeworld",
      render: (item) => {
        return (
          <Link to={`/planets/${item.homeworld.id}`}>
            {item.homeworld.name}
          </Link>
        );
      },
    },
    {
      title: "Films",
      key: "films",
      render: (item) => (
        <Link to={`/people/${item.id}/films`}>
          <Button>Go to Films ({item.films.length})</Button>
        </Link>
      ),
    },
  ];

  return (
    <Page title="Star Wars Characters">
      <Grid
        data={peopleList}
        columns={columns}
        loading={loading}
        pagination={pagination}
      />
    </Page>
  );
}

export default People;
