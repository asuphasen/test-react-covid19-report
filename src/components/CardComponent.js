import './CardComponent.css'
import { Card } from 'antd';

const CardComponent = (props) => {
    const {
        province,
        new_case,
        total_case,
        new_case_excludeabroad,
        total_case_excludeabroad,
        new_death,
        total_death,
        update_date
    } = props

    return (
        <Card style={{width: '40vh', margin: '5px'}}>
            <h1>{province}</h1>
            <li>จำนวนผู้ป่วยรายใหม่ <span>{new_case}</span></li>
            <li>จำนวนผู้ป่วยสะสม <span>{total_case}</span></li>
            <li>จำนวนผู้ป่วยรายใหม่ (ไม่นับมาจากต่างประเทศ) <span>{new_case_excludeabroad}</span></li>
            <li>จำนวนผู้ป่วยสะสม (ไม่นับมาจากต่างประเทศ) <span>{total_case_excludeabroad}</span></li>
            <li>จำนวนผู้ป่วยเสียชีวิตรายใหม่ <span>{new_death}</span></li>
            <li>จำนวนผู้ป่วยเสียชีวิตสะสม <span>{total_death}</span></li>
            <h5 style={{ marginTop: 5 }}>อัพเดท : {update_date}</h5>
        </Card>
    )
}

export default CardComponent;