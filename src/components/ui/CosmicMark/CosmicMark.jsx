import React from 'react';
import { Mark } from './CosmicMark.styles';

const CosmicMark = ({ className = '' }) => (
    <Mark className={`cosmic-mark ${className}`} aria-hidden="true">
        <span className="core" />
        <span className="ring ring-a" />
        <span className="ring ring-b" />
        <span className="ring ring-c" />
        <span className="planet p1" />
        <span className="planet p2" />
        <span className="planet p3" />
    </Mark>
);

export default CosmicMark;
