/* eslint-disable @typescript-eslint/no-explicit-any */
import { ConfigProvider, Table } from "antd";

const MyTable = ({
  data,
  columns,
  pageSize,
}: {
  data: any[];
  columns: any[];
  pageSize: number;
}) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: "#071C1F",
            headerColor: "#ffffff",
            padding: 11,
            headerSplitColor: "transparent",
            borderColor: "#E5E8F7",
          },
        },
      }}
    >
      <div className="ic_table_responsive">
        <Table
          dataSource={data}
          columns={columns}
          pagination={{
            pageSize: pageSize,
            showSizeChanger: false,
            position: ["bottomCenter"],
          }}
        />
      </div>
    </ConfigProvider>
  );
};

export default MyTable;
