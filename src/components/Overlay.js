import React from 'react'
import styled from 'styled-components'

const BlackScreen = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0px;
    `

const Overlay = ({ ...rest }) => (
    <BlackScreen {...rest}></BlackScreen>
)

export default Overlay