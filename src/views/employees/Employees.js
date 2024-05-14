import React from 'react'
import { CCard,CButton, CCardBody, CCardHeader, CCol, CFormCheck, CFormSwitch, CRow,  CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow } from '@coreui/react'
import { DocsExample } from 'src/components'

const Employees = () => {
  return (
  
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Employee Management</strong>
          </CCardHeader>
          <CCardBody>
          <CButton color="primary">Create New</CButton>
          <CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">ID No</CTableHeaderCell>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Position</CTableHeaderCell>
      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell></CTableDataCell>
    </CTableRow>
  </CTableBody>
</CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Employees
