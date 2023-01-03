import React, { useState } from 'react';
import { Form, Input } from "antd";
import { DatePicker, Space, Radio } from "antd";
import './InputPage.css';

const InputPage = () => {
    const [dateOfBirth, setDateOfBirth] = useState([])
    const [gender, setGender] = useState("");
    const [empInfo, setEmpInfo] = useState([])

    const onFirstNameChange = (value) => {
        console.log('First name is ', value.target.value)
    }

    const onLastNameChange = (value) => {
        console.log('Last name is ', value.target.value)
    }

    const onEmailChange = (value) => {
        console.log('Email is ', value.target.value)
    }

    const onReEmailChange = (value) => {
        console.log('Re-email is ', value.target.value)
    }

    const onPasswordChange = (value) => {
        console.log('Password is ', value.target.value)
    }

    function onDateChange(date, dateString) {
        let newDate = dateString.split("-")
        let dateData = {
            date: Number(newDate[2]),
            month: Number(newDate[1]),
            year: Number(newDate[0])
        }
        setDateOfBirth(dateData);
    }

    const onGenderChange = e => {
        console.log('radio checked', e.target.value);
        setGender(e.target.value);
    };

    console.log('Date of Birth', dateOfBirth)
    console.log('Gender', gender)

    return (
        <div className='container'>
            <div className='box-1'>
                <h1 className='center'>Sign Up</h1>
                <Form layout='Horizontal'>
                    <Form.Item required>
                        <Input onChange={onFirstNameChange} placeholder="First Name" />
                    </Form.Item>
                    <Form.Item>
                        <Input onChange={onLastNameChange} placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item>
                        <Input onChange={onEmailChange} placeholder="Your Email" />
                    </Form.Item>
                    <Form.Item>
                        <Input onChange={onReEmailChange} placeholder="Re-enter Email" />
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
                </Form>
            </div>
        </div>
    )
}

export default InputPage;