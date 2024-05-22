import React, { useState } from 'react'
import { CCard,CButton, CCardBody, CCardHeader, CCol, CFormCheck, CFormSwitch, CRow,  CTable,
CTableBody,

CTableCaption,
CTableDataCell,
CTableHead,
CTableHeaderCell,
CTableRow,
CModal,
CModalBody,
CModalFooter,
CModalHeader,
CModalTitle,
CPopover,
CTooltip,
CForm,
CFormInput,
CFormLabel,
CFormTextarea } from '@coreui/react'
import { NavLink } from 'react-router-dom'
import { DocsExample } from 'src/components'

const Employees = () => {
const data = JSON.parse(localStorage.getItem('employeesArray')) || [];
return (

<CRow>
<CCol xs={12}>
<CCard className="mb-4">
<CCardHeader>
<strong>Employee Management</strong>
</CCardHeader>
<CCardBody>
<CButton color="primary" href="#/employees/create">Create New</CButton>
<CTable>
<CTableHead>
<CTableRow>
<CTableHeaderCell scope="col">Employee No</CTableHeaderCell>
<CTableHeaderCell scope="col">Employee Name</CTableHeaderCell>
<CTableHeaderCell scope="col">Office</CTableHeaderCell>
<CTableHeaderCell scope="col">Position Status</CTableHeaderCell>
<CTableHeaderCell scope="col">Action</CTableHeaderCell>
</CTableRow>
</CTableHead>
<CTableBody>
{data.map((user, index) => (
<CTableRow>
  <React.Fragment key={user.id}>
    <CTableDataCell scope="row">{index + 1}</CTableDataCell>
    <CTableDataCell>{user.employee_no}</CTableDataCell>
    <CTableDataCell>{user.fullname}</CTableDataCell>
    <CTableDataCell>{user.position}</CTableDataCell>
    <CTableDataCell>
      <CButton color="secondary" href="#/employees/update">Update</CButton>
      <CButton color="danger">Delete</CButton>
    </CTableDataCell>
  </React.Fragment>
</CTableRow>
))}
</CTableBody>
</CTable>
</CCardBody>
</CCard>
</CCol>
</CRow>
)
}

export default Employees
