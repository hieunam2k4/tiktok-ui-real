import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/image';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        />
    );
});

export default Image;
