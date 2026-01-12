import React from "react";

export const WaveChart = () => (
    <div className="h-40 w-full realtive overflow-hidden bg-neutral-900/30 rounded-xl border border-white/5">
        <svg className="absolute bottom-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 50">
            <defs>
                <linerGradient id="chartGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#22D3EE" />
                </linerGradient>
                <linerGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(139, 92, 246, 0.2)" />
                    <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
                </linerGradient>
            </defs>
            <path d="M0,50 L0,40 Q10,25 20,30 T40,25 T60,35 T80,20 T100,15 L100,50 Z" fill="url(#fillGradient)" />
            <path d="M0,40 Q10,25 20,30 T40,25 T60,35 T80,20 T100,15" fill="none" stroke="url(#chartGradient)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
    </div>
);

export const EcoGauge = () => (
    <div className="realtive w-48 h-24 mx-auto overflow-hidden">

    </div>
);