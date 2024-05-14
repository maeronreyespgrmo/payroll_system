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
import { DocsExample } from 'src/components'

const Employees = () => {
const [visible, setVisible] = useState(false)

return (

<CRow>
<CCol xs={12}>
<CCard className="mb-4">
<CCardHeader>
<strong>Employee Management</strong>
</CCardHeader>
<CCardBody>
<CButton color="primary" onClick={() => setVisible(!visible)}>Create New</CButton>
<CModal visible={visible} onClose={() => setVisible(false)}>
<CModalHeader>
<CModalTitle>Modal title</CModalTitle>
</CModalHeader>
<CModalBody>

              <CForm>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlInput1">Email address</CFormLabel>
                  <CFormInput
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <CFormLabel htmlFor="exampleFormControlTextarea1">Example textarea</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows={3}></CFormTextarea>
                </div>
              </CForm>

</CModalBody>
<CModalFooter>
<CButton color="secondary" onClick={() => setVisible(false)}>
Close
</CButton>
<CButton color="primary">Save changes</CButton>
</CModalFooter>
</CModal>
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
<CTableDataCell><CButton color="secondary" onClick={() => setVisible(!visible)}>Update</CButton><CButton color="danger">Delete</CButton></CTableDataCell>
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
