import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const EmpInfoCard = (props) => {
    const { empData } = props
    return (
        <>
            {empData.map((item, i) => {
                return <Card key={i} hoverable style={{ width: 240,margin:'5px' }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
                    <Meta title={item.fName + " " + item.lName} description={item.email} />
                </Card>
            })}
        </>
    )
}

export default EmpInfoCard;