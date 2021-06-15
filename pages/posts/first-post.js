import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'

import Layout from '../../components/layout'

const A = styled.a`
    color: yellow;
`

const fisrtPost = () => {
    return (
        <>
            <Layout>
                <Head>
                    <title>Frirst Post</title>
                </Head>
                <h1>First Post</h1>
                <h2>
                    <Link href="/" >
                        <a>Back to home</a>
                    </Link>
                </h2>
            </Layout>
        </>
    )
}

export default fisrtPost
