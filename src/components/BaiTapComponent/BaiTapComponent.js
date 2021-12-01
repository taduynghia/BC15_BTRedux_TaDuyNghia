import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Navigation from './Navigation'

export default class BaiTapComponent extends Component {

    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-8 mr-0 pr-0">
                        <Navigation />
                    </div>
                    <div className="col-4 ml-0 pl-0">
                        <Content />
                    </div>
                </div>
                <Footer />

            </div>
        )
    }
}
