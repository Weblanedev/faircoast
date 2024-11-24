"use client"

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setLoading] = useState(false)
    const [errors, setErrors] = useState({});

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    async function onCheckout() {
        if (!formData.name || !formData.email || !formData.message) {
            return
        }
        setLoading(true)
        // const response = await fetch("/api/checkout", {
        //   method: "POST",
        //   body: JSON.stringify(cartDetails),
        // })
        // const data = await response.json()
        // const result = await redirectToCheckout(data.id)
        // if (result?.error) {
        //   console.error(result)
        // }
        setTimeout(() => {
            //   router.push("/success")
            alert("Message Sent")
            setLoading(false)
        }, 7000)
    }

    const validate = () => {
        const newErrors: any = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Handle form submission (e.g., send data to API)
            console.log('Form submitted:', formData);
            // Reset form
            setFormData({ name: '', email: '', message: '' });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="contact-us py-20">
            <h1 className="text-xl font-bold text-center tracking-tight sm:text-3xl mb-5">
                Contact Us
            </h1>
            <p className="text-lg text-center tracking-tight sm:text-xl mb-5">
                Reach out to for help of any sort
            </p>

            <form onSubmit={handleSubmit} className='w-[600px] mx-auto'>
                <div>
                    <div className='pt-[10px]'>
                        <label htmlFor={`name`} className="">
                            Name
                        </label>
                        <Input
                            id={`name`}
                            name={`name`}
                            type="text"
                            className="w-full mt-[5px]"
                            min={1}
                            max={9}
                            required
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    {/* {errors.name && <p className="error">{errors?.name}</p>} */}
                    <div className="mt-[20px]">
                        <label htmlFor={`email`} className="">
                            Email
                        </label>
                        <Input
                            id={`email`}
                            name={`email`}
                            type="email"
                            className="w-full mt-[5px]"
                            min={1}
                            required
                            max={9}
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {/* {errors.email && <p className="error">{errors.email}</p>} */}
                    </div>
                </div>

                <div className='mt-[10px]'>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="flex mt-[10px] h-40 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    {/* {errors.message && <p className="error">{errors.message}</p>} */}
                </div>
                {/* <button type="submit">Submit</button> */}
                <Button onClick={onCheckout} className="w-full mt-10">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {isLoading ? "loading..." : "Submit"}
                </Button>
            </form>
        </div>
    );
};

export default ContactUs;