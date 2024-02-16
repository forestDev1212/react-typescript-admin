import { ActionType, ProColumns, ProTable } from "@ant-design/pro-components";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
type Employee = {
  id: number;
  firstName: string;
  lastName: string;
  // emailId : string;
};

const columns: ProColumns<Employee>[] = [
  {
    dataIndex: "firstName",
    width: "20%",
  },
  {
    dataIndex: "lastName",
    width: "20%",
  },
  {
    dataIndex: "emailId",
    width: "20%",
  },
];
const EmployeePage: React.FC = () => {
  const actionRef = useRef<ActionType>();
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/employees").then((res) => {
      console.log(res);
      setDataSource(res.data);
    });
  }, []);
  return (
    <React.Fragment>
      <ProTable<Employee>
        columns={columns}
        // request={dataSource}
        // dataSource={dataSource}
        request={async () => {
          const res = await axios.get("http://localhost:8080/api/v1/employees");
          // .then(res => {
          //   return {
          //     data : res.data,
          //     success : true
          //   }
          // })
          return {
            data: res.data,
            success: true,
          };
        }}
        rowKey={(record) => record.id}
      />
    </React.Fragment>
  );
};

export default EmployeePage;
