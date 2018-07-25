import React, { Component } from 'react';
import { Bar, Doughnut, Line, Pie, Polar, Radar } from 'react-chartjs-2';
import { Card, CardBody, CardColumns, CardHeader } from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import ReactDataGrid from 'react-data-grid';

const line = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: true,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 0, 81, 56, 160, 40],
      },
    ],
  };
  
  const options = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false
  }
  
export default class Test extends React.Component {

    constructor(props) {
        super(props);
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
        this.show_selected = this.show_selected.bind(this);
        let rows = [];
        for (let i = 1; i < 1000; i++) {
          rows.push({
            id: i,
            title: 'Title ' + i,
            count: i * 1000
          });
        }
        this.state = { rows, selectedIndexes: [] };
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

    show_selected() {
        window.confirm(this.state.selectedIndexes.length)
    }

    render () {
        const rowText = this.state.selectedIndexes.length === 1 ? 'row' : 'rows';
        return (
            <div className="animated fadeIn">   
            <button onClick={this.show_selected}>ok</button>
                <Card style={{height: '600px', width: '720px'}}>
                    <CardBody>
                    <div className="chart-wrapper" style={{height: '500px', width: '700px'}}>
                        <Line data={line} options={options}  />
                    </div>
                    </CardBody>
                </Card>
                <span>{this.state.selectedIndexes.length} {rowText} selected</span>
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
            </div>
        )
    }
}


