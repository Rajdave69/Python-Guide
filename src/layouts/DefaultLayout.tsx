import React from 'react';
import Head from '@docusaurus/Head';
import Layout from "@theme/Layout";

import { site } from '@site/src/constants/site';
// import '../scss/main.scss';

interface DefaultLayoutProps {
    title?: string,
    description?: string
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <title>{ title } - { site.tagline }</title>
                <meta name="description" content={ description } />
                <meta property="og:description" content="Raj's info-rich Python Guide" />
                <meta property="og:title" content="Raj's Python Guide" />
                <meta property="og:image" content="https://github.com/RajDave69.png" />
                <meta name="theme-color" content="#5865F2" />
            </Head>
            <Layout>
                { children }
            </Layout>
        </>
    );
};

export default DefaultLayout;
