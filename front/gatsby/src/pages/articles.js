import React from "react"

import Wrapped from '../layouts/Wrapped'
import Articles from '../components/Articles'

import '../styles/general.scss'

export default () => {
    const isBrowser = typeof window !== 'undefined';
    return (
    <Wrapped title="Stylo | Articles">
        <section>
            {isBrowser && <Articles/>}
        </section>
    </Wrapped>
)}