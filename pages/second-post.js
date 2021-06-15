import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width:80vw;
    height: 80vh;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
`
const H1 = styled.h1``

const secondPost = () => {
    return (
        <>
            <Wrapper>
                <H1>Second Post</H1>
            </Wrapper>
        </>
    )
}

export default secondPost
