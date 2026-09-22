import React, { useEffect } from 'react';
import { cursorEffect } from '../../../utils/cursorPointer';
import { InnerCursor, OuterCursor } from './Cursor.styles';

const Cursor = () => {
    useEffect(() => {
        const cleanup = cursorEffect();
        return () => cleanup && cleanup();
    }, []);

    return (
        <>
            <InnerCursor className="inner-cursor" />
            <OuterCursor className="outer-cursor" />
        </>
    );
};

export default Cursor;
