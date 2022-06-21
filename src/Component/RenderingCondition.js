import React, { Component } from 'react'

export default class RenderingCondition extends Component {
    login = true;
    userName = "Pham Xuan Manh";

    renderContent = () => {
        if (this.login) {
            return <p> Hello {this.userName}</p>
        }
        return <button>Login</button>
    }
    render() {
        return (
            <div>
                {/* {this.login ? <p>Hello {this.userName}</p> : <button>Login</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
