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
    <form onSubmit={handleSubmit} style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <input name="name" value={formData?.name ?? ''} onChange={handleInputChange} required style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <input name="email" value={formData?.email ?? ''} onChange={handleInputChange} required style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <select name="channel" value={formData?.channel ?? ''} onChange={handleInputChange} style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}>
            <option value="website">Website</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="other">Other</option>
        </select>
        <input name="address" value={formData?.address ?? ''} onChange={handleInputChange} style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <input name="postal" value={formData?.postal ?? ''} onChange={handleInputChange} style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <input name="city" value={formData?.city ?? ''} onChange={handleInputChange} style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <input name="province" value={formData?.province ?? ''} onChange={handleInputChange} style={{ display: 'block', marginBottom: '15px', padding: '10px', width: '100%', border: '1px solid #ccc', borderRadius: '4px' }}/>
        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', textAlign: 'center' }}>Submit</button>
    </form>

    );
}
