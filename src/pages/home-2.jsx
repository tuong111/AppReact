import React from 'react'; 
import Card2 from '../components/card2'


class Home_2 extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            name : '',
            age : '',
            des : '',
            submit : 0
        }
    }
    onChangeName(value){
            this.setState({
                name : value
            })
            console.log(this.state.name)
        }
    onChangeAge(value){
            this.setState({
                age : value
            })
            console.log(this.state.name)
        }
    onChangeDes(value){
            this.setState({
                des : value
            })
            console.log(this.state.name)
        }
    chuyenData(){
        this.setState({
            submit : 1
    })
    }

    render() {
        return (
            <div style = {{width : 500, margin :"auto", borderTopColor: "red"}}>
                TEN : <input type="text" onChange={(e)=> this.onChangeName(e.target.value)}/><br/>
                TUOI : <input type="number" onChange={(e)=> this.onChangeAge(e.target.value)}/><br/>
                MO TA : <input type="text" onChange={(e)=> this.onChangeDes(e.target.value)}/><br/>
                <button onClick={()=> this.chuyenData()}>Click</button>
                <br/>
                <hr/>
                <Card2 name = {this.state.name} age = {this.state.age} des = {this.state.des} submit = {this.state.submit}/>
            </div>
        );
    }
}
export default Home_2;