import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import {Grid, Row, Col, PageHeader} from 'react-bootstrap'

import UsersList from './components/UsersList'
import UsersDetails from './components/UsersDetails'
import UsersUpdate from './components/UsersUpdate'
import UsersAdd from './components/UsersAdd'

import {Provider} from 'react-redux'
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Grid>
                        <Row>
                            <Col>
                                <PageHeader style={{textAlign:'center'}}>Users Management</PageHeader>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Route path="/" exact={true} component={UsersList}/>
                                <Route path="/users-details/:uid/" component={UsersDetails}/>
                                <Route path="/users-update/:uid/" component={UsersUpdate}/>
                                <Route path="/users-add/" component={UsersAdd}/>
                            </Col>
                        </Row>
                    </Grid>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;