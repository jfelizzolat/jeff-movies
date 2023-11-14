'use client';
import React from 'react';
import { Progress } from './Rating.styled';

const Rating = ({ value }: { value: number }) => {
  return (
    <Progress value={value}>
      <h3>
        {value}
        <span>%</span>
      </h3>
    </Progress>
  );
};

export default Rating;
