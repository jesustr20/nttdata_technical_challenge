import { CSVLink } from "react-csv"
import {columns} from '../table/constant/DataTable'
import dataTableColumns from '../helpers/dataTable_helper'

const DownloadCSV = ({data}) => {
  
  const csvExport = []
  const contentColumns = []

  const ColumnTable = columns?.map(item => item.title)
  contentColumns.push(ColumnTable)

  const ListDataTable = dataTableColumns(data)?.map(item => Object.values(item))
  csvExport.push(...contentColumns, ...ListDataTable)

  const csvReport = {
    filename: 'jarvis-data.csv',
    data: csvExport,
  }
  
  return(
    <>
      <CSVLink {...csvReport} style={{color: "black"}}>Descargar Lista de Usuarios</CSVLink>
    </>
  )
}

export default DownloadCSV;