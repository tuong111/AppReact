import React from 'react'; 

class Card2 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render() {
        const dieukien= this.props.submit
        if (dieukien === 1) {
            return (
                <div>
                    <p>
                        Ten : {this.props.name}<br/>
                        Tuoi : {this.props.age}<br/>
                        Mo ta : {this.props.des}
                    </p>
                </div>
            );
        }else{
            return (
                <div>
                    <p>
                        Ten : <br/>
                        Tuoi : <br/>
                        Mo ta : 
                    </p>
                </div>
            );
        }

    }
}
export default Card2;