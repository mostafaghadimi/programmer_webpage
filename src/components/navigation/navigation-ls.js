import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons'

import './navigation-ls.css';

export default class NavigationLS extends Component {
    
    render() {
        const menu = (
          <Menu>
            <Menu.Item key={1}>
              <Link to="/edu">
                education
              </Link>
            </Menu.Item>

            <Menu.Item key={2}>
              <Link to="/skills" >
                skills
              </Link>
            </Menu.Item>

            <Menu.Item key={3}>
              <Link to="/honors" >
                honors
              </Link>
            </Menu.Item>
          
        </Menu>
        );
        return (
            <Fragment>
                <div className="nav">
                    <div className="pwd">
                        $PWD
                    </div>
                    <div className="breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <HomeOutlined/>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item overlay={menu}>
                                <Link to="/">
                                    info
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                </div>
                
            </Fragment>

        )
    }
}
