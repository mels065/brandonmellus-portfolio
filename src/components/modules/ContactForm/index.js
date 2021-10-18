import React, { useState } from 'react';
import { Box, Button, TextField, List, ListItem } from '@mui/material';

import './style.css';

const styles = {
    form: {
        margin: "20px"
    },
    formInput: {
        margin: "20px"
    },
    submitBtn: {
        margin: "20px"
    },
    errors: {
        color: "#c2382f"
    }
}

function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formErrors, setFormErrors] = useState([]);
    const [formStatus, setFormStatus] = useState('');


    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }

    function handleBlur(event) {
        setFormStatus('');
        setFormErrors([checkForError(event.target.name, event.target.value)]);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormErrors([]);
        setFormStatus('');

        const errors = []
        for (const key in formState) {
            const error = checkForError(key, formState[key]);
            if (error) errors.push(error);
        }
        console.log(errors)

        if (errors.length > 0) {
            setFormErrors(errors);
        } else {
            setFormStatus('Message successfully submitted (Note: This message is only for testing purposes as backend has not been created yet)');
        }
    }

    function checkForError(inputName, inputValue) {
        let error = null;
        if (inputName === 'email' && !/\w+@\w+\.\w{2,3}/.test(inputValue)) {
            error = "You must enter a valid email";
        } else if (inputValue.length === 0) {
            error = `${inputName} cannot be left blank`;
        }
        return error;
    }

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit}
            style={styles.form}
        >
            <div className="input-group">
                <TextField
                    name="name"
                    label="Name"
                    value={formState.name}
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={styles.formInput}
                />
            </div>
            <div className="input-group">
                <TextField
                    name="email"
                    label="Email"
                    value={formState.email}
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={styles.formInput}
                />
            </div>
            <div className="input-group">
                <TextField
                    name="message"
                    label="Message"
                    value={formState.message}
                    placeholder="Your Message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={styles.formInput}
                    multiline
                    fullWidth
                    rows={8}
                />
            </div>

            <Button
                variant="contained"
                style={styles.submitBtn}
                onClick={handleSubmit}
            >
                    Submit
            </Button>

            {formErrors.length > 0 ? <h3 style={styles.errors}>Errors</h3> : null}
            <List className="form-errors">
                {formErrors.map(
                    (err, i) => (
                        <ListItem
                            key={`form-err-${i}`}
                            className="form-error-item"
                            style={styles.errors}
                        >
                            {err}
                        </ListItem>
                    )
                )}
            </List>
            <div className="form-status">{formStatus}</div>
        </form>
    );
}

export default ContactForm;
