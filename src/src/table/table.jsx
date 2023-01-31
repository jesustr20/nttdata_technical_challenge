import React, {useEffect, useState} from 'react';
import {DownloadOutlined, SyncOutlined } from '@ant-design/icons';
import {Table, Button} from 'antd';
import {columns} from './constant/DataTable'
import {getDataUsers} from '../service/jarvis.service'
import DownloadCSV from '../export/export_csv'
import dataTableColumns from '../helpers/dataTable_helper'

function ListUsers(){
  const [data, setData] = useState([]);
  const [newSort, setNewSort] = useState('ascend');

  async function getData(){
    const response = await getDataUsers();
    setData(response.results);   
  }

useEffect(() => {
  getData();
},[])

return(
  <>
    <h1 style={{
          textAlign: 'center', 
          marginTop:'0px'}}>
      Lista de Usuarios
    </h1>
    <Button 
      type="link" 
      onClick={getData} 
      style={{
        backgroundColor:"white",
        background: "#fff", 
        borderColor: "#1890ff", 
        float: 'right'
        }} 
        icon={<SyncOutlined />}
      >
      Actualizar Data
    </Button>

    <Button 
      type="link" 
      style={{
        backgroundColor:"white",
        background: "#fff",
        borderColor: "#1890ff", 
        marginBottom:"10px",
        float: 'right'
        }} 
        danger 
        icon={<DownloadOutlined />}
      >
      <DownloadCSV data={[...data]?.sort((a,b) => {
        if(newSort === 'ascend'){
          return a.dob.age - b.dob.age
        }else if(newSort === 'descend'){
          return b.dob.age - a.dob.age
        }
      })
      }/>
    </Button>

    <Table
      size="middle"
      columns={columns} 
      dataSource={dataTableColumns(data)}
      pagination={{
        defaultPageSize: 15,
        }}
      onChange={(a,b,c,d) => {setNewSort(c.order)
      }}
      />
    <br/>
    <br/>
  </>
)
}
export default ListUsers;
