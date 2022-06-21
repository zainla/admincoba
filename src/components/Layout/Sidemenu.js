import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";

import menuList from '../../routes/MenuList';

const { Sider } = Layout;
const { SubMenu } = Menu;

const userActivity = (obj) => {
    // console.log(obj)
}

class SideMenuComponent extends React.Component
{
    hasChild = (menu, i) => {
		let menuTree1St = menu.child
		let keyChild = "sub"+(i+1)
		return (
    		<SubMenu
	            key={keyChild}
	            title={
	              <span>
	                    <Icon type={menu.icon} />
	                    <span>{menu.title}</span>
	              </span>
	            }
			>
				<Menu.ItemGroup style={{minHeight:"100vh", width:"33vh", background: 'linear-gradient(to bottom, #69C1F7, #287DFF)'}} title={<h3 style={{color: 'white', textAlign: 'center', backgroundColor: '#65bdf8'}}>{menu.title}</h3>}>
				{menuTree1St.map((submenu1st, j) => {
		            return (
		            	<Menu.Item key={i+1+j}>
    						<Link to={submenu1st.url} className="titleMenulink">
    			                <span>{submenu1st.title}</span>
    						</Link>
    		            </Menu.Item>
    		        )
				})}
				</Menu.ItemGroup>
	        </SubMenu>
        )
	}

    render() {
        return (
            <Sider
                trigger={null}
                collapsible
                collapsed={this.props.collapsed}
				className="background-sider"
            >
				<div className={this.props.collapsed ? 'logo-collapsed' : 'logo'}/>
                    <Menu 
						theme="dark"
						mode="vertical"
						className="background-sider"
					>
                        {menuList.map((menu, i) => {
                        if (menu.child) {
		            	    return this.hasChild(menu, i)
		                }
                        return (
                            <Menu.Item key={i+10}>
                                <Link to={menu.url} className="titleMenulink" onClick={() => userActivity(menu.title)}><Icon type={menu.icon} /><span>{menu.title}</span></Link>
                            </Menu.Item>
                        )
                        })}
                    </Menu>
                <div/>
            </Sider>
        );
    }
}

export default SideMenuComponent;