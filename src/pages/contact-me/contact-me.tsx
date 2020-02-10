import React, { useState } from "react";
import Grid from '@material-ui/core/Grid/Grid';
import "./contact-me.css";
import Form from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import sendEmail from '../../services/contact-me/contact-me';
import ErrorBanner from '../../components/ErrorBanner/ErrorBanner';
import ConfirmBanner from '../../components/ConfirmBanner/ConfirmBanner';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [showError, setShowError] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    function handleSubmit() {
        if (checkFields()) {
            sendEmail(name, email, description);
            setShowError(false);
            setShowConfirm(true);
        } else {
            setShowError(true);
            setShowConfirm(false);
        }
    }

    function checkFields() {
        return !!name && !!email && !!description;
    }

    return (
        <Grid container item className="contact-me" direction="column" justify="space-evenly" >
            <Grid item>
                <Title text="Contact Me!" />
            </Grid>
            <Grid item>
            {showError && <ErrorBanner title="Submission Error" subtext="Please fill out entire form"/>}
            {showConfirm && <ConfirmBanner title="Thanks" subtext="I'll get back to you as soon as I can."/>}
                <br />
                <Form label="Name" placeholder="Name" onChange={setName} />
                <Form label="Email" placeholder="Email Address" onChange={setEmail} />
                <Form label="Description" placeholder="Description" onChange={setDescription} />
            </Grid>
            <Grid item xs={2}>
                <Button text="Submit" onClick={handleSubmit} />
            </Grid>
            <Grid item>
                Email: mattweilerbusiness@gmail.com
            </Grid>
            <Grid item>
                Phone: (414) 213-2302
            </Grid>
        </Grid>
    );
};

export default ContactMe;
