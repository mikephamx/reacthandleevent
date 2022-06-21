import React, { Component } from 'react'
//cach dau tien: import css, cach nay se anh huong toi toan bo project 
import './Styling.css';
//Cach 2: import css rieng cho tung component: Styling with module
//Cach nay khong anh huong toi cac component khac
import style from './Styling.module.css';//file css phai co hau to .module
//CAch 3: inline css styling

export default class Styling extends Component {
  render() {
    //Luu y duoi dang thuoc tinh document.getElementbyID().style().backgroundColor......
    const styleText = {
        color: 'pink',
        padding:'15px',
        backgroundColor: "black",
    }
    return (
      <div>
        <p className='txt'>Hello Mike</p>
        <p className={style.txtStyle}>Hello Mike Import theo module</p>
        <p style={styleText}>Hello Mike inline css Styling</p>
      </div>
    )
  }
}
