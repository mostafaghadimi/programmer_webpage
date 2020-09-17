import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Breadcrumb, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons'

import { makeMenu } from '../../redux/actions'
import './navigation-ls.css';

class NavigationLS extends Component {

    
    render() {
        const urls = this.props.state
        const menu = (
          <Menu>
            {
      
              urls.menu_urls.map((url, index) => 
                <Menu.Item key={index}>
                  <Link to={"/" + url}>
                      {url}
                  </Link>
                </Menu.Item>
              )
            }
        </Menu>
        );
        console.log(this.props.state)
        // console.log(urls)
        // console.log(urls.current_url)
        return (
          <Fragment>
              {/* {console.log(this.props.state)} */}
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

const mapStateToProps = (state) => ({
  state: state.makeMenu
})

export default connect(
  mapStateToProps,
  { makeMenu }
)(NavigationLS)