import React, { Component } from 'react';
import ReactDataGrid from 'react-data-grid';
import { toast } from 'react-toastify';
import {
    Card, 
    CardBody,  
    CardHeader,
    ButtonGroup,
    Button,
}  from 'reactstrap';


export default class Table extends Component {

    constructor(props) {
        super(props)
        
        this._columns = [
            {
              key: 'id',
              name: 'ID'
            },
            {
              key: 'title',
              name: 'Title'
            },
            {
              key: 'count',
              name: 'Count'
            }
        ];
        let rows = [];
        for (let i = 1; i < 14; i++) {
            rows.push({
                id: i,
                title: 'Title ' + i,
                count: i * 1000
            });
        }
        this.state = { 
            rows,
            selectedIndexes: [],
            live: true,
            // bring from link or default
                count: 0, 
                currentPage: 0,
                limit: 14,
            prevVis: 0,
            nextVis: 0,
        };
        this.loadData = this.loadData.bind(this);
    }

    loadData() {
        // fetch data from API
            // this.setState({
            //     rows: []
            // })
    }

    rowGetter = (i) => {
        return this.state.rows[i];
    };

    onRowsSelected = (rows) => {
        this.setState({selectedIndexes: this.state.selectedIndexes.concat(rows.map(r => r.rowIdx))});
    };

    onRowsDeselected = (rows) => {
        let rowIndexes = rows.map(r => r.rowIdx);
        this.setState({selectedIndexes: this.state.selectedIndexes.filter(i => rowIndexes.indexOf(i) === -1 )});
    };

    Validate(num) {
        // num = 2 -> All not fraud
        // num = 1 -> Not fraud
        // num = 0 -> Fraud
        if(this.state.selectedIndexes.length == 0)
            // check if there is a selected element
            this.props.toast('😅 No selected element ', 'warn')
        else {
            // see what type of operation is asked
            if(num==1)
            {
                //Request('',function(){

                //})
            } else if (num == 2) {
                                //Request('',function() {

                //})
            } else {
                //Request('',function() {

                //})
            }
            //change the rows
            //if(this.state.live)
                //loadData()
            //else 
                //remove selectedrows only
            this.props.toast(' ✌😃 All good !', 'success')
            //remove all selected
            this.setState({
                selectedIndexes: []
            })
        }
    }

    prevPage() {
        this.setState({
            prevVis: this.state.page > 1,
            nextVis: (this.state.currentPage + 1) * this.state.limit < this.state.count ,
        })
    }
    nextPage() {
        this.setState({
            prevVis: this.state.page > 1,
            nextVis: (this.state.currentPage + 1) * this.state.limit < this.state.count ,
        })
    }

    render () {
        return (
            <Card style={{'marginTop': '24px'}}>
            <CardHeader>
                <i style={{display:"inline-block"}}><h4>Autorisations suspectées</h4></i> 
                <a className="card-header-actions">
                            <Button color="primary" style={{marginRight:"10px"}} className="btn-pill" onClick={() => this.Validate(2)}><i className="fa fa-check"></i>&nbsp;Valider Tous</Button>
                            <Button color="primary" style={{marginRight:"10px"}} className="btn-pill" onClick={() => this.Validate(1)}><i className="fa fa-check"></i>&nbsp;Valider selection</Button>
                            <Button color="danger" className="btn-pill" onClick={() => this.Validate(0)}><i className="fa fa-close"></i>&nbsp;Fraudes</Button>

                </a>
            </CardHeader> 
            <CardBody >
                <div style={{'marginLeft': '10px','marginRight': '18px'}}>
                <ReactDataGrid 
                    rowKey="id"
                    columns={this._columns}
                    rowGetter={this.rowGetter}
                    rowsCount={this.state.rows.length}
                    minHeight={500}
                    rowSelection={{
                        showCheckbox: true,
                        enableShiftSelect: true,
                        onRowsSelected: this.onRowsSelected,
                        onRowsDeselected: this.onRowsDeselected,
                        selectBy: {
                            indexes: this.state.selectedIndexes
                        }
                }} />
                <ButtonGroup className="float-right" style={{"marginTop":"20px"}}>                                        
                    <Button color="primary" onClick={() => this.prevPage()}>Precedent</Button>
                    <Button color="primary" onClick={() => this.nextPage()}>Suivant</Button>

                </ButtonGroup>
                </div>
             </CardBody>
        </Card>
           
        );
    }
}