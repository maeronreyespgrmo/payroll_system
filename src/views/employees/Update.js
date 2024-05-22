import React, { useState } from 'react'
import { CCard,CButton, CCardBody, CCardHeader, CCol, CRow,  CTable,CToast,CToastHeader,CToastBody,CToastClose,
CForm,
CFormInput,
CFormLabel,
CFormTextarea } from '@coreui/react'
import { DocsExample } from 'src/components'

const Create = () => {

const [employeeValue, setEmployeeValue] = useState('');
const [fullnameValue, setFullnameValue] = useState('');
const [positionValue, setPositionValue] = useState('');
const [showToast, setShowToast] = React.useState(false);
const [formValues, setFormValues] = useState({}); // State to hold form values

const toggleToast = () => setShowToast(!showToast);

const existingArray = JSON.parse(localStorage.getItem('employeesArray')) || [];
const updateItemById = (id, newData) => {
return existingArray.map(item => item.employee_no === id ? { ...item, ...newData } : item);
};
const updatedArray = updateItemById('232');

console.log(updatedArray)



const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  // Access the values of all text boxes in the form
  console.log('Form values:', formValues);
};

return (

<CRow>
<CToast visible={showToast} autohide={true} fade={3000} onClose={toggleToast} color="success" className="text-white align-items-center">
<div className="d-flex">
    <CToastBody>Success.</CToastBody>
    <CToastClose className="me-2 m-auto" white />
  </div>
            </CToast>
<CCol xs={12}>
<CCard className="mb-4">
    
<CCardHeader>
<strong>Update Employees</strong>
</CCardHeader>
<CCardBody>
{updatedArray.map((value, index) => (
<React.Fragment key={value.employee_no}>
<CForm onSubmit={handleSubmit}>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Employee</CFormLabel>
<CFormInput
type="text"
value={value.employee_no}
onChange={handleInputChange} 
id="exampleFormControlInput1"
placeholder="Employee No"
/>
</div>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Fullname</CFormLabel>
<CFormInput
type="text"
value={value.fullname}
onChange={handleInputChange}
id="exampleFormControlInput1"
placeholder="Fullname"
/>
</div>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Position</CFormLabel>
<CFormInput
type="text"
value={value.position}
onChange={handleInputChange}
id="exampleFormControlInput1"   
placeholder="Position"
/>
</div>

<div className="mb-3">
<CButton color="primary" onClick={handleSubmit} id="SubmitInformation">Save Information</CButton>
</div>

{/* <div className="mb-3">
<CButton color="secondary" href="#/employees/create">Clear Information</CButton>
</div> */}
</CForm>
</React.Fragment>
))}

</CCardBody>
</CCard>
</CCol>
</CRow> 
)
}

export default Create
