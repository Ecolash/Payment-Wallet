'use client'
import React from 'react';

const ColorPalette: React.FC = () => {
  const shades = [100, 200, 300, 400, 500, 600, 700, 800, 900];
  const colorPalettes = ['primary', 'secondary', 'neutral'];

  return (
    <div className="flex flex-wrap gap-1 bg-black">
        <div key= 'primary'>
          <div className={`w-12 h-12 shadow-md bg-primary-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-primary-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-primary-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-primary-900 `}/>
        </div>
        <div key= 'secondary'>
          <div className={`w-12 h-12 shadow-md bg-secondary-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-secondary-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-secondary-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-secondary-900 `}/>
        </div>        
        <div key= 'accent'>
          <div className={`w-12 h-12 shadow-md bg-accent-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-accent-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-accent-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-accent-900 `}/>
        </div>        
        <div key= 'neutral'>
          <div className={`w-12 h-12 shadow-md bg-neutral-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-neutral-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-neutral-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-neutral-900 `}/>
        </div>        
        <div key= 'success'>
          <div className={`w-12 h-12 shadow-md bg-success-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-success-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-success-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-success-900 `}/>
        </div>
        <div key= 'failure'>
          <div className={`w-12 h-12 shadow-md bg-failure-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-failure-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-failure-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-failure-900 `}/>
        </div>
        <div key= 'process'>
          <div className={`w-12 h-12 shadow-md bg-process-100 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-200 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-300 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-400 `}/>
          <div className={`w-12 h-12 shadow-md bg-process-500 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-600 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-700 `}/>          
          <div className={`w-12 h-12 shadow-md bg-process-800 `}/>
          <div className={`w-12 h-12 shadow-md bg-process-900 `}/>
        </div>
    </div>
  );
};

export default ColorPalette;
