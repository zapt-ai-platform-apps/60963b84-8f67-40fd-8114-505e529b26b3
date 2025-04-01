import React from 'react';
import ZaptBadge from '@/components/ZaptBadge';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
            <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-4">Welcome to My App</h1>
                <p className="text-center mb-6">This is a starter template for your new application.</p>
                <div className="flex justify-center">
                    <button 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors cursor-pointer"
                        onClick={() => alert('Button clicked!')}
                    >
                        Get Started
                    </button>
                </div>
            </div>
            <ZaptBadge />
        </div>
    );
}