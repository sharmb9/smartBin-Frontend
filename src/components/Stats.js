import React from 'react';
import PieChart from 'react-minimal-pie-chart';
import db from "./Firestore";

// Need to display most recent cateogry and label
//need to send catefgory(0,1,2) to the bin
// Need to display total number for each catoegory on pie chart

class Stats extends React.Component {
    constructor() {
        super();
        this.state = {
            label: "",
            category: ""

        }
    }

    // updateInput = e => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     });
    // }

     componentDidMount() {

        db.collection("items")
            .where("item_tag", "==", "Plastic bottle")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                this.setState({
                    label:data[0].item_tag,
                    category:data[0].item_cat
                })
                console.log(data); // array of item objects
            });

    //     db.collection("items")
    //         .get()
    //         .then(querySnapshot => {
    //             const data = querySnapshot.docs.map(doc => doc.data());
    //             console.log(data);
    //             this.setState({
    //                 label: data,
    //                 category: data
    //             });
    //         });

     }


    render() {
        const { label, category } = this.state;
        return (
            <div className="main">
                <section id="container">

                    <p className="blurb " id="about_blurb">
                        <div className="title" id="about_title">
                        <h2 >
                            <span class="about_name">Label: {label}</span> 
                            <br></br>
                            <span class="about_name">Category: {category}</span>
                        </h2>

                            <br></br>
                        </div>
                        <p className="intro">

                            {/* <PieChart
                            data={[
                                { title: 'One', value: 10, color: '#E38627' },
                                { title: 'Two', value: 15, color: '#C13C37' },
                                { title: 'Three', value: 20, color: '#6A2135' },
                            ]}
                        /> */}
                        </p>
                        <br></br>
                    </p>

                </section>

            </div>
        )
    }

}

export default Stats;