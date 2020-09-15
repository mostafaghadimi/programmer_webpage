import React, { Component } from 'react'
import { Typography, Tooltip } from 'antd';



import NavigationLS from '../navigation/navigation-ls'
import './info-ls.css'

export default class InfoLS extends Component {
    render() {
        const { Title } = Typography;
        return (
            <div className="info-container">
                <NavigationLS/>
                <div className="avatar">
                    <img src={require("../../assets/images/photo.jpg")}/>
                </div>
                
                <div className="biography">
                    <Title level={4}>Hello World! I'm</Title>
                    <Title mark>Mostafa Ghadimi</Title>
                    <Title level={4}>
                        This personal webpage is somehow the formal description and history of my life. I wish it could be completed in near future.
                    </Title>
                    <Title level={4}>
                        I was born on <b>24th of October, 1997</b>. Currently, I am a BSc student of Computer Engineering at Sharif University of Technology, Tehran, Iran.
                    </Title>
                </div>

                <div className="find-me">
                    <div>
                        <Tooltip placement="top" title="linkedin account">

                            <a href="https://www.linkedin.com/in/mostafaghadimi/" target="_blank">
                                
                                <img src={require("../../assets/images/linkedin.png")} width={32}/>
                            </a>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip placement="top" title="stackoverflow account">

                            <a href="https://stackoverflow.com/users/7310077/mostafa-ghadimi" target="_blank">
                                
                                <img src={require("../../assets/images/stackoverflow.png")} width={32}/>
                            </a>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip placement="top" title="github account">

                            <a href="https://github.com/mostafaghadimi" target="_blank">
                                
                                <img src={require("../../assets/images/github.png")} width={32}/>
                            </a>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip placement="top" title="twitter account">

                            <a href="https://twitter.com/MostafaGhadimi" target="_blank">
                                
                                <img src={require("../../assets/images/twitter.png")} width={32}/>
                            </a>
                        </Tooltip>
                    </div>

                    <div>
                        <Tooltip placement="top" title="resume (PDF)">

                            <a href="https://github.com/mostafaghadimi/resume/raw/master/resume.pdf" target="_blank">
                                
                                <img src={require("../../assets/images/cv.png")} width={32} />
                            </a>
                        </Tooltip>
                    </div>
                </div>

                
                
            </div>
        )
    }
}
