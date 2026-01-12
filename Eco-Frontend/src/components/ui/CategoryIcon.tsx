import React from 'react';
import { Leaf, Droplets, Zap, Car } from 'lucide-react';

export type IconType = 'leaf' | 'droplets' | 'zap' | 'car';

// Mapping type to specific colors and icons

export const CategoryIcon: React.FC<{ type: IconType }> = ({ type }) => {
    const styles = {
        leaf: {bg: 'bg-emerald-500/20', text: 'text-emerald-500', icon: Leaf },
        droplets: {bg: 'bg-blue-500/20', text: 'text-blue-500', icon: Droplets },
        zap: {bg: 'bg-purple-500/20', text: 'text-purple-500', icon: Zap },
        car: {bg: 'bg-teal-500/20', text: 'text-teal-500', icon: Car },   
    };

    const { bg, text, icon: Icon } = styles[type];

    return (
        <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
            <Icon className={`w-6 h-6 ${text}`} fill="currentColor"/>
        </div>
    );
};
