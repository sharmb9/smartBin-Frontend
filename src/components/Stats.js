import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import firestore from "./Firestore";


class Stats extends React.Component  {
    constructor(){
        super();
        this.state={
            label:"",
            category:""
            
        }
    }
    
    updateInput = e => {
  this.setState({
    [e.target.name]: e.target.value
  });
}

    render(){
        const {label, category}= this.state;
        return (
            <div className="main">
        <section id="container">

            <p className="blurb " id="about_blurb">
                <div className="title" id="about_title">
                    <h2 >
                        <span class="about_name">smartBin stats</span> <span role="img" aria-label="hello"></span>
                    </h2>
                    <br></br>
                </div>
                <p className="intro">
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                    />
                    </p>
                <br></br>
            </p>

        </section>

    </div>
        )
    }
    
                    }

export default Stats;