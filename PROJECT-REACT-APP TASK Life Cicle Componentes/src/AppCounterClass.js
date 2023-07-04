import { Component } from "react";//importa somente o componente do React

export default class AppCounterClass extends Component { //não precisar usar React.Componente porque na importação foi realizado de forma direta.

    constructor() {

        super();
        this.state={
            counter:0
        };

    }

    render() {
        return <>
            <h1>{this.state.counter}</h1>
            <button onClick={
                () => this.setState({
                    counter:this.state.counter + 1
                })
            }>+1</button>
             <button onClick={
                () => this.setState({
                    counter:this.state.counter - 1
                })
            }>-1</button>
        </>;
    }
}


