import React from 'react'
import { navigate } from 'gatsby'
import { Router, Location } from "@reach/router"
import FullPage from '../layouts/FullPage'

export default () => (
    <Location>
        {({location}) => (
            <Router location={location} className="router">
                <ArticleEmpty path="/article"/>
                <ArticleID path="/article/:id/version/:version"/>
                <ArticleID path="/article/:id"/>
            </Router>
        )}
    </Location>
)

const ArticleEmpty = () => {
    navigate('/articles');
    return(
        <p>Bad request, redirecting</p>
    )
}

const ArticleID = props => (
    <FullPage>
        <section>
            <p>Hello this article {props.id}-{props.version}</p>
        </section>
    </FullPage>
)