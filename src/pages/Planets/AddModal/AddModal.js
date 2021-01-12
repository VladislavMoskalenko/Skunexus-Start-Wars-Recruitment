import "./AddModal.css";

import { useState } from "react";
import { Button, Modal, Form, Row, Col } from "antd";
import { TextField, SelectField } from "../../../components/FormFields";
import { useStoreActions } from "easy-peasy";

function AddModal() {
  const [modalVisible, setModalShown] = useState(false);
  const { addPlanet } = useStoreActions((actions) => actions.planets);
  return (
    <>
      <Button
        size="large"
        type="primary"
        className="modalButton"
        onClick={() => setModalShown(true)}
      >
        Add Planet
      </Button>
      <Modal
        title="Add Planet"
        destroyOnClose
        visible={modalVisible}
        onCancel={() => setModalShown(false)}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            setModalShown(false);
            addPlanet(values);
          }}
        >
          <Row gutter={[16, 16]}>
            <TextField
              name="name"
              type="text"
              placeholder="Name"
              colProps={{ md: 12 }}
              rules={[{ required: true, message: "Name is required" }]}
            />
            <TextField
              name="rotation_period"
              type="number"
              placeholder="Rotation Period"
              colProps={{ md: 12 }}
              rules={[
                { required: true, message: "Rotation Perios is required" },
              ]}
            />
            <TextField
              name="orbital_period"
              type="number"
              placeholder="OrbitalPeriod"
              colProps={{ md: 12 }}
              rules={[
                { required: true, message: "Orbital Period is required" },
              ]}
            />
            <TextField
              name="diameter"
              type="number"
              placeholder="Diameter"
              colProps={{ md: 12 }}
              rules={[{ required: true, message: "Diameter is required" }]}
            />
            <TextField
              name="climate"
              type="text"
              placeholder="Climate"
              colProps={{ md: 12 }}
              rules={[{ required: true, message: "Climate is required" }]}
            />
            <TextField
              name="gravity"
              type="text"
              placeholder="Gravity"
              colProps={{ md: 12 }}
              rules={[{ required: true, message: "Gravity is required" }]}
            />
            <SelectField
              name="terrain"
              colProps={{ md: 12 }}
              placeholder="Terrain"
              options={[
                { name: "Desert", value: "desert" },
                { name: "Grasslands", value: "grasslands" },
                { name: "Mountains", value: "mountains" },
                { name: "Jungle", value: "jungle" },
                { name: "Rainforests", value: "rainforests" },
                { name: "Tundra", value: "tundra" },
                { name: "Ice Caves", value: "ice_caves" },
                { name: "Swamp", value: "swamp" },
                { name: "Gas Giant", value: "gas_giant" },
                { name: "Lakes", value: "lakes" },
              ]}
              rules={[{ required: true, message: "Terrain is required" }]}
            />
            <TextField
              name="surface_water"
              type="number"
              placeholder="Surface Water"
              colProps={{ md: 12 }}
              rules={[
                { required: true, message: "Surface Water is required" },
              ]}
            />
            <Col md={24}>
              <Button type="primary" htmlType="submit">
                Add Planet
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default AddModal;
