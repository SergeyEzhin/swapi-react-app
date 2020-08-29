import React from 'react';
import './MainScreen.scss';
import {FormSearch} from '../../components/FormSearch/FormSearch';
import {TableResult} from '../../components/TableResult/TableResult';
import {connect} from 'react-redux';
import {fetchData} from '../../redux/actions';
import {Loader} from '../../ui/Loader/Loader';

class MainScreen extends React.Component 
{
    componentDidMount()
    {
        this.props.fetchData();
    }

    render()
    {
        if(this.props.data)
        {
            return (
                <div className="container">
                    <div className="title">
                        <h1>STAR WARS</h1>
                        <h2>Starship comparisons</h2>
                    </div>
                    <div className="info">
                        <h3>Select ships to compare</h3>
                    </div>
                    <div className="forms">
                        <div className="row">
                            <div className="col-md-6">
                                <FormSearch />
                            </div>
                            <div className="col-md-6">
                                <FormSearch />
                            </div>
                        </div>
                    </div>
                    <div className="result-compare">
                        <div className="row">
                            <div className="col-md-6">
                                <TableResult />
                            </div>
                            <div className="col-md-6">
                                <TableResult />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else 
        {
            return <Loader />
        }
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: () => dispatch(fetchData())
});

const mapStateToProps = state => ({
   data: state.data.data
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);