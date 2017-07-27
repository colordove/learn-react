import * as React from 'react';
import './home.component.scss';
import { autobind } from 'core-decorators';
import swal from 'sweetalert2';
import { HomeProps, HomeState } from './home.model';

@autobind
export class Home extends React.Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            enthusiasmLevel: 1
        };
    }
    getExclamationMarks(num: number) {
        return Array(num + 1).join('!');
    }
    onIncrement() {
        let enthusiasmLevel = this.state.enthusiasmLevel;
        enthusiasmLevel++;
        this.setState({
            enthusiasmLevel: enthusiasmLevel
        });
    }
    onDecrement() {
        if (this.state.enthusiasmLevel <= 0) {
            swal('Oops...', 'enthusiasmLevel不能小于0', 'error');
            return;
        }
        let enthusiasmLevel = this.state.enthusiasmLevel;
        enthusiasmLevel--;
        this.setState({
            enthusiasmLevel: enthusiasmLevel
        });
    }
    render() {
        return (
            <div className="hello">
                <div className="greeting">
                     Hello {name + this.getExclamationMarks(this.state.enthusiasmLevel)}
                </div>
                <div className="button-group">
                    <button className="button-material" onClick={() => this.onDecrement()}>-</button>
                    <button className="button-material" onClick={() => this.onIncrement()}>+</button>
                </div>
                <button className="button-material">Hello</button>
            </div>
        );
    }
}