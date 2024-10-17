import React, { useEffect, useState } from 'react';
import '../Styles/Alert.css';

export function Alert({ status, description }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
        
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000); 

        return () => clearTimeout(timer); 

    }, [description, status]);

    const alertClass = status === 'alert-success' ? 'alert-success' : 'alert-error';

    return (
        isVisible && (
            <div className={`alert ${alertClass}`}>
                {description}
            </div>
        )
    );
}
