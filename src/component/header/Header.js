
import React from "react";
import {Link} from 'react-router-dom'
import {Dropdown,Space,Menu,} from "antd"
import "./Header.css";
import {UserOutlined,DownOutlined,
    SettingFilled,
    LoginOutlined,
    HomeFilled,
    ShopFilled
} from "@ant-design/icons"
const Header = (props) => {
    const is_login = localStorage.getItem("is_login");
    const username = localStorage.getItem("username");

    const handleLoginOut = () => {
        localStorage.setItem("is_login","false");
        window.location.href = "/login"
    }

    const menu = (
        <Menu
          style={{width:200}}
          items={[
            { label: (
                <Link  to="/setting">
                  Setting
                </Link>
              ),
              icon : <SettingFilled/>
            },
            { label: (
                <Link  to="/profile">
                  Profile
                </Link>
              ),
              icon : <UserOutlined/>
            },
            { label: (
                <Link onClick={handleLoginOut} to="/login">
                  Logout
                </Link>
              ),
              icon : <LoginOutlined/>,
              danger : true
            }
          ]}
        />
      );


    return (
        <div>
            {is_login == "true" ?
            <div className="menu_main">
                <div>
                <Link className="menu_item" to="/"><HomeFilled/>Home</Link>
                <Link className="menu_item" to="/course"><ShopFilled/>Course</Link>
                <Link className="menu_item" to="/teacher"><UserOutlined/>Teachre</Link>
                <Link className="menu_item" to="/student"><HomeFilled/>Classroom</Link>
                <Link className="menu_item" to="/student"><UserOutlined/>Student</Link>
                </div>
                <div>
                <Dropdown overlay={menu}>
                    <a className="menu_item" onClick={e => e.preventDefault()}>
                    <Space><UserOutlined/>{username.toUpperCase()}<DownOutlined /></Space>
                    </a>
                </Dropdown>
                </div>
            </div>
            :
            <div className="menu_main">
                <Link className="menu_item" to="/login">Brand Name</Link>
            </div>
            }
            {/* {props.children} */}
            {/* <div>
                <h1>Foooter</h1>
            </div> */}
        </div>
    )
}

export default Header;