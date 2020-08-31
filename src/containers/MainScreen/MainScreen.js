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
        let {data, keysSelects} = this.props;

        if(data.length)
        {
            console.log(data);
            return (
                <div className="container">
                    <div className="title">
                        <h1>STAR WARS</h1>
                        <div className="title__image">
                            <img src={process.env.PUBLIC_URL + '/img/img_line.svg'} alt=""/>
                        </div>
                    </div>
                    <div className="subtitle">
                        <div className="subtitle__image">
                            <img src={process.env.PUBLIC_URL + '/img/icon_ship.svg'} alt=""/>
                        </div>
                        <p>Starship <br />comparisons</p>
                    </div>
                    <div className="selects container-inner">
                        <div className="row">
                        {
                            keysSelects.map((elem, index) => {
                                return (
                                    <div className="col-md-6" key={index}>
                                        <FormSearch data={data} elem={elem} />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className="result-compare container-inner">
                        <TableResult />
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
   data: state.data.data,
   keysSelects: state.data.keysSelects
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);