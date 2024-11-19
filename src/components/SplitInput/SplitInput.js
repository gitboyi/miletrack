import React from 'react';
import { Button, Dropdown, Input } from 'antd';
import './SplitInput.css'

export default function SplitInput() {
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

  return(
    <div className='split-container'>
      <Input placeholder="Enter distance in kilometers" className='txt-field'/>
      <Dropdown menu={{ items }} placement="bottomLeft" className='drpd'>
        <Button>Km</Button>
      </Dropdown>
    </div>
  )
}