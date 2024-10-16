import React from 'react';

function SkeletonCounted({ Skeleton, count }) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <Skeleton key={index} />
            ))}
        </>
    );
}

export default SkeletonCounted;