import { BackTop } from "antd";
import { UpOutlined } from '@ant-design/icons';
import './BackTopBtn.css';

const BackTopBtn = () => {

    return (
        <BackTop>
            <div className='ant-back-top-content'>
                <div className='ant-back-top-icon'>
                    <UpOutlined />
                </div>
            </div>
        </BackTop>
    )
}

export default BackTopBtn;