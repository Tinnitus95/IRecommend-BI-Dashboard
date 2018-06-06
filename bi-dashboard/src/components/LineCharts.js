import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import LineChart from './LineChart';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';

class LineCharts extends Component {
    state = {
        size: {
            width: 800,
            height: 200
        }
    }
    render() {
        const data = this.props.time;
        const { intl } = this.props;
        return(
            <Tabs>
                <TabList>
                    <Tab>{intl.formatMessage({ id:'line-chart-tab-hourly'})}</Tab>
                    <Tab>{intl.formatMessage({ id:'line-chart-tab-weekly'})}</Tab>
                </TabList>
                <TabPanel>
                    <LineChart
                        chartData={data.chartData}
                        options={data.options}
                        size={this.state.size}
                        classes="chart"
                    />
                </TabPanel>
                <TabPanel>
                    <LineChart
                        chartData={data.weekChart}
                        options={data.weekOptions}
                        size={this.state.size}
                        classes="chart"
                    />
                </TabPanel>
            </Tabs>
        );
    }
}

function mapStateToProps(state){
    return {
        time: state.time
    };
}
export default connect(mapStateToProps)(injectIntl(LineCharts));
