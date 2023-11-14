'use client';
import React from 'react';
import Select from 'react-select';

const Dropdown = () => {
  const options = [
    { value: 'chocolate', label: 'Peliculas' },
    { value: 'strawberry', label: 'Series' },
  ];
  return (
    <Select
      options={options}
      defaultValue={{ value: 'chocolate', label: 'Peliculas' }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderRadius: '12px',
          height: '44px',
          border: '2px solid #0077b6',
          background: 'transparent',
        }),
      }}
    />
  );
};

export default Dropdown;
