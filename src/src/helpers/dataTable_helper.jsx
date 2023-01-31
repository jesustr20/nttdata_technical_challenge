const dataTableColumns = (data) => {

  const dataTable = data?.map(item => ({
    first: item?.name.first,
    last: item?.name.last,
    dob: item?.dob.age,
    gender: item?.gender,
    email: item?.email,
    nat: item?.nat,
    picture: item?.picture.thumbnail
  }))

  return dataTable;
}
export default dataTableColumns;