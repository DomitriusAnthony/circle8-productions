import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const city = document.getElementById('city').value;
        const message = document.getElementById('message').value;

        axios({
            method: 'POST',
            url:'http://localhost:3000/',
            data: {
                fullName,
                email,
                phoneNumber,
                city,
                message
            }
        }).then((response) => {
            if ( response.data.msg === 'success') {
                alert('Message Sent');
            } else if (response.data.msg === 'fail') {
                alert('Message failed to send');
            }
        })
    }

    resetForm() {
        document.getElementById('contact-form').reset();
    }
    
    render() {
        return (
            <div className="container push-down">
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                            <div className="form-group">
                                <label for="name">Name</label>
                                <input type="text" className="form-control" id="fullName" />
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">City</label>
                                <input type="text" className="form-control" id="city" />
                            </div>
                            <div className="form-group">
                                <label for="message">Message</label>
                                <textarea className="form-control" rows="5" id="message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                    <div className="column is-one-quarter has-text-justified" style={{paddingTop: '60px'}}>
                        <p className="is-size-5">If you're interested in working with us please fill out this contact form and with as much details as you can! We will reach back out to you as soon as we can.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;

/*

    <div class="field">
        <label class="label">Name</label>
        <div class="control">
            <input class="input" type="text" placeholder="Text input" />
        </div>
    </div>

    <div class="field">
        <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Email input" value="hello@" />
            <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p class="help is-danger">This email is invalid</p>
    </div>

    <div class="field">
        <label class="label">Message</label>
        <div class="control">
            <textarea class="textarea" placeholder="Textarea"></textarea>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
            <button class="button is-link">Submit</button>
        </div>
    </div>


*/