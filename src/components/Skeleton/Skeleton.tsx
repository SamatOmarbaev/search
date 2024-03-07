import { CSSProperties } from 'react';
import './style.css';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = ({ border, height, width }: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div 
            className='skeleton' 
            style={styles}
        />
    )

}
