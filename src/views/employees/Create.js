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

const toggleToast = () => setShowToast(!showToast);

const handleSubmit = (event) => {
event.preventDefault();
// Here you can add your form submission logic
setShowToast(true)


// Retrieve the current array from localStorage
const existingArray = JSON.parse(localStorage.getItem('employeesArray')) || [];

// New object to insert into the array
const newObject = {
employee_no: employeeValue,
fullname: fullnameValue,
position: positionValue 
};

// Add the new object to the array
existingArray.push(newObject);
// Store the updated array back into localStorage
localStorage.setItem('employeesArray', JSON.stringify(existingArray));
console.log('Form submitted',employeeValue,fullnameValue,positionValue);


};

const employeevaluechange = (event) => {
setEmployeeValue(event.target.value); // Update the state with the input value
};


const fullnamevaluechange = (event) => {
setFullnameValue(event.target.value); // Update the state with the input value
};

const positionvaluechange = (event) => {
setPositionValue(event.target.value); // Update the state with the input value
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
<strong>Create Employees</strong>
</CCardHeader>
<CCardBody>
<CForm onSubmit={handleSubmit}>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Employee</CFormLabel>
<CFormInput
type="text"
value={employeeValue} 
onChange={employeevaluechange} 
id="exampleFormControlInput1"
placeholder="Employee No"
/>
</div>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Fullname</CFormLabel>
<CFormInput
type="text"
value={fullnameValue} 
onChange={fullnamevaluechange} 
id="exampleFormControlInput1"
placeholder="Fullname"
/>
</div>
<div className="mb-3">
<CFormLabel htmlFor="exampleFormControlInput1">Position</CFormLabel>
<CFormInput
type="text"
value={positionValue} 
onChange={positionvaluechange}
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
</CCardBody>
</CCard>
</CCol>
</CRow> 
)
}

export default Create
