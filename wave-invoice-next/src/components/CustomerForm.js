import { useState, useEffect } from 'react';

export default function CustomerForm({ formData, setFormData }) {

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    };  


    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData?.name ?? ''} onChange={handleInputChange} required />
            <input name="email" value={formData?.email ?? ''} onChange={handleInputChange} required />
            <select name="channel" value={formData?.channel ?? ''} onChange={handleInputChange}>
                <option value="website">Website</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="other">Other</option>
            </select>
            <input name="address" value={formData?.address ?? ''} onChange={handleInputChange}/>
            <input name="postal" value={formData?.postal ?? ''} onChange={handleInputChange}/>
            <input name="city" value={formData?.city ?? ''} onChange={handleInputChange}/>
            <input name="province" value={formData?.province ?? ''} onChange={handleInputChange}/>

            <button type="submit">Submit</button>
        </form>
    );
}
