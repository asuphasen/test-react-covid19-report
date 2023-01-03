import React, { useState } from 'react'
import EmpInfoCard from './EmpInfoCard'
import { Modal, Button, Form, Input, DatePicker, Space, Radio } from 'antd';

const EmpInformationPage = () => {
  const [modalState, setModalState] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState([])
  const [gender, setGender] = useState("");

  const Employee = [
    {
      fName: 'Tony',
      lName: 'Stark J.',
      email: 'mockingJ@email.com',
      birthDay: 'xx-xxxx-xxxx',
      gender: 'Male'
    },
    {
      fName: 'Steve',
      lName: 'Johnson',
      email: 'manhadton@email.com',
      birthDay: 'xx-xxxx-xxxx',
      gender: 'Male'
    }
  ]
  const [allEmployee, setAllEmployee] = useState(Employee)

  const setModal2Visible = (modalState) => {
    setModalState(modalState);
  }

  const onFirstNameChange = (value) => {

    setFirstName(value.target.value)
  }

  const onLastNameChange = (value) => {

    setLastName(value.target.value)
  }

  const onEmailChange = (value) => {

    setEmail(value.target.value)
  }

  const onReEmailChange = (value) => {
    console.log('Re-email is ', value.target.value)
  }

  const onPasswordChange = (value) => {
    console.log('Password is ', value.target.value)
  }

  function onDateChange(date, dateString) {
    // let newDate = dateString.split("-")
    // let dateData = {
    //   date: Number(newDate[2]),
    //   month: Number(newDate[1]),
    //   year: Number(newDate[0])
    // }
    setDateOfBirth(dateString);
  }

  const onGenderChange = e => {
    console.log('radio checked', e.target.value);
    setGender(e.target.value);
  };
  console.log('----------------------------')
  console.log('First name is ', firstName)
  console.log('Last name is ', lastName)
  console.log('Email is ', email)
  console.log('Date of Birth', dateOfBirth)
  console.log('Gender', gender)

  const onInsertEmp = () => {
    const itemData = {
      fName: firstName,
      lName: lastName,
      email: email,
      birthDay: dateOfBirth,
      gender: gender
    }
    setAllEmployee((allEmp) => {
      return [itemData, ...allEmp]
    })

    setFirstName("")
    setLastName("")
    setEmail("")
    setDateOfBirth([])
    setGender("")
    setModal2Visible(false)
  }

  return (
    <>
      <div style={{ margin: 10, display: 'flex', justifyContent: 'center' }}>
        <Button type="primary" onClick={() => setModalState(true)}>
          Add Employee
        </Button>
        <Modal
          title="Please input information"
          centered
          visible={modalState}
          onOk={() => onInsertEmp()}
          onCancel={() => setModal2Visible(false)}
          okText='Add'
          destroyOnClose
        >
          <Form.Item required>
            <Input onChange={onFirstNameChange} placeholder="First Name" />
          </Form.Item>
          <Form.Item>
            <Input onChange={onLastNameChange} placeholder="Last Name" />
          </Form.Item>
          <Form.Item>
            <Input type="email" onChange={onEmailChange} placeholder="Your Email" />
          </Form.Item>
          <Form.Item>
            <Input type="email" onChange={onReEmailChange} placeholder="Re-enter Email" />
          </Form.Item>
          <Form.Item>
            <Input onChange={onPasswordChange} placeholder="New Password" />
          </Form.Item>
          <Space direction="vertical">
            <DatePicker placeholder='Birthday' onChange={onDateChange} />
          </Space>
          <Radio.Group style={{ marginLeft: '10px' }} onChange={onGenderChange} value={gender}>
            <Radio value='Male'>Male</Radio>
            <Radio value='Female'>Female</Radio>
          </Radio.Group>
        </Modal>
      </div>
      <div className='container'>
        <EmpInfoCard empData={allEmployee} />
      </div>
    </>

  )
}

export default EmpInformationPage;