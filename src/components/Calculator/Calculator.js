import React, {useState} from 'react';
import { Row, Col, Dropdown, Space, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import SplitInput from '../SplitInput/SplitInput';

import './Calculator.css';

export default function Calculator() {
  const items= [
    {
      key: '1',
      label:'Km/l'
    },
    {
      key: '2',
      label:'M/l'
    }
  ];
  const [value, setValue] = useState(1);

  return (
    <div className="calc-container">
      <Row className='row'>
        <Col xs={24} sm={24} md={12} lg={8} className='label'>
          <h4 style={{margin:'0px'}}>Fuel Price :</h4>
          <Dropdown menu={{ items }}><Space>Select State<DownOutlined /></Space></Dropdown>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}><SplitInput />
        <Radio.Group onChange={(value) => setValue(value.target.value)} value={value} className='radio'>
          <Radio value={1}>Petrol</Radio>
          <Radio value={2}>Diesel</Radio>
        </Radio.Group>
        </Col>
      </Row>
      <Row className='row'>
        <Col xs={24} sm={24} md={12} lg={8} className='label'>
          <h4 style={{margin:'0px'}}>Travelled Distance :</h4>
          <Dropdown menu={{ items }}><Space>Distance Input Type<DownOutlined /></Space></Dropdown>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}><SplitInput /></Col>
        <Col xs={24} sm={24} md={12} lg={8} className='label'></Col>
        <Col xs={24} sm={24} md={12} lg={16}><SplitInput /></Col>
      </Row>
      <Row className='row'>
        <Col xs={24} sm={24} md={12} lg={8} className='label'>
          <h4 style={{margin:'0px'}}>Fuel Expense :</h4>
          <Dropdown menu={{ items }}><Space>Select Fuel Expense<DownOutlined /></Space></Dropdown>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}><SplitInput /></Col>
      </Row>

      <div className='crnt-mileage'>
        Current Mileage : 50 Km/l
      </div>

      <Row className='row'>
        <Col xs={24} sm={24} md={12} lg={8} className='label'>
          <h4 style={{margin:'0px'}}>Expected Mileage :</h4>
        </Col>
        <Col xs={24} sm={24} md={12} lg={16}><SplitInput /></Col>
      </Row>
    </div>
  );
}
