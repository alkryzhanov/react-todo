import React, { Component } from 'react';
import './PostAddForm.css';

export class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        });
    }

    render() {
        const { text } = this.state;
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control new-post-label"
                    placeholder=" О чем вы сейчас думаете"
                    onChange={this.onValueChange}
                    value={text} />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                    onChange={this.onValueChange}>Добавить</button>
            </form>
        );
    }
}

export default PostAddForm;

