import React from 'react';

const ContactForm = () => (
    <div className="container push-down">
        <div className="columns is-centered">
            <div className="column is-half">
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
            </div>
            <div className="column is-one-quarter has-text-justified" style={{paddingTop: '60px'}}>
                <p className="is-size-5">If you're interested in working with us please fill out this contact form and with as much details as you can! We will reach back out to you as soon as we can.</p>
            </div>
        </div>
    </div>
)

export default ContactForm;