import React, { Component, Fragment } from 'react'
import { Breadcrumb, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons'

import styles from './navigation-ls.css'
import './navigation-ls.css';

export default class NavigationLS extends Component {
    
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                  General
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                  Layout
                </a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                  Navigation
                </a>
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
                                <a href="">
                                    info
                                </a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                </div>
                
            </Fragment>

        )
    }
}
