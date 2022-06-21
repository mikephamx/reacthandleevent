import React, { Component } from 'react'

export default class State extends Component {

    // State la thuoc tinh co san cua react class component giup dinh nghia nhung noi dung co kha nang thay doi do nguoi dung thao tac su kien
    state = {
        status: false
    }

    //setState la phuong thuc co san cua react class component giup thay doi gia tri state va render lai giao dien

    userLogin = {
        name: "Mike Pham",
        age: 28,
    }

    login = () => {
        // this.state.status = true; //Khong the viet ntn de thay doi gia tri truc tiep tren state ma phai thong qua phuong thuc setState
        let newState = {
            status: true
        }
        //goi phuong thuc setState de truyen lai gia tri moi
        //setState la mot phuong thuc bat dong bo
        this.setState(newState, () => {
            console.log(this.state)
        });
    }

    renderUserLogin = () => {
        if (this.state.status) {
            return <div className='text-center'>{this.userLogin.name}</div>
        }
        return <button onClick={() => { this.login() }} className='btn btn-danger'>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserLogin()}
            </div>
        )
    }
}
