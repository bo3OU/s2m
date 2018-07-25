import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container }  from 'reactstrap';
import {
HeadBar,
GraphGroup,
Table,
} from './_Components';

export default class Main extends React.Component {
    toastId = null;
    constructor(props) {
        super(props);
        this.notify = this.notify.bind(this)
    }

    notify = (Message, Type) => { 
        toast[Type](Message)
    }
    render () {
        return (
            <div className="app">
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange={false}
                    draggable
                    pauseOnHover={false}
                /> 
                <HeadBar></HeadBar>
                <div className="app-body">
                    <main className="main">
                        <Container fluid>
                            <div className="animated fadeIn">  
                            <Table 
                                toast={this.notify}
                            ></Table>
                            <GraphGroup>
                            </GraphGroup>
                            </div>
                        </Container>
                    </main>
                </div>
            </div>
        )
    }
}


