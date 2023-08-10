import React from "react";
import PropTypes from 'prop-types';
import css from './Form.module.css';

class Form extends React.Component {
    state = {
        name: '',
        number: '',
    };
    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleFormSubmit = e => {
        e.preventDefault();
        this.props.onAddContact(this.state);
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };


    render() {
        return (
            <form className={css.form} onSubmit={this.handleFormSubmit}>
                <label className={css.label}><span className={css.span}>Name</span>
                    <input className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={css.label}><span className={css.span}>Number</span>
                    <input className={css.inputNumber}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button className={css.button}type="submit">Add contact</button>
            </form>
        );
    }
}

Form.propTypes = {
    onAddContact: PropTypes.func.isRequired,
    // onSubmit: PropTypes.func.isRequired,
    // handleChange: PropTypes.func.isRequired,
};
    
export default Form;
