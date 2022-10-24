import '../../../styles/components/Molecules/custom/Infoboard.scss';

import React from 'react';


interface TabsProps {
    className?: string;
    icon?: string;
    title?: string;
    subTitle?: string;
    counts?: number;
    subCount?: number;
    width?: number;
}

export function InfoBoard({
    className = '',
    icon = '',
    title = '',
    subTitle = '',
    counts = 0,
    subCount = 0,
    width = 10,
}: TabsProps) {

    return (
        <div className="infoboard-con mt-2 mx-2" style={{ 'background': '#2d5474', 'width': `${width}rem` }}>
            <div className='d-flex align-items-start'>
                <img
                    src={`/icons/${icon}.svg`}
                    className="cursor-pointer"
                    width={24}
                    alt="close-icon"
                />
                <p className='infoboard-title'>{title}</p>
            </div>
            <div className='d-flex align-items-start'>
                <p className='infoboard-title'>{subCount}&nbsp;{subTitle}</p>
            </div>
            <div className='d-flex align-items-start'>
                <p className='infoboard-count'>{counts}</p>
            </div>
        </div>
    );
}
