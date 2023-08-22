'use client'
 
import { useState, useEffect } from 'react';
import CustomerForm from '../components/CustomerForm';


export default function Home({ }) {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        channel: '',
        address: '',
        postal: '',
        city: '',
        province: ''
    });

    const updateCustomer = (updatedData) => {
    const newCustomers = customers.map(customer =>
      customer.id === selectedCustomer.id ? updatedData : customer
    );

    setCustomers(newCustomers);
    setSelectedCustomer(updatedData);
  };

    useEffect(() => {
        fetch('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json')
            .then(response => response.json())
            .then(data => setCustomers(data.customers));
    }, []);
    
    useEffect(() =>{
        setFormData(selectedCustomer);
    }, [selectedCustomer])


    return (
        <div style={{ margin: '20px', padding: '20px'}}>
            <h1 style={{marginBottom: '15px'}}>Customers</h1>
            <ul style={{listStyle: 'none', cursor: 'pointer'}}>
                {customers ? customers.map((customer, index) => (
                    <li style={{padding: '4px'}} key={index} onClick={() => setSelectedCustomer(customer)}>
                        {customer.name}
                    </li>
                )) : "Loading"}
            </ul>
            {selectedCustomer && <CustomerForm customer={selectedCustomer}  formData={formData} setFormData={setFormData} updateCustomer={updateCustomer}/>}
        </div>
    );
}

export async function getData() {
  const res = await fetch('https://waveaccounting.github.io/se-challenge-fe-customers/settings.json');
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  return {
    props: {
      customers: data.customers || []
    }
  };
}
