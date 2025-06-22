import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useCountdownRedirect = (seconds, targetPath) => {
    const [countdown, setCountdown] = useState(seconds);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        if (countdown === 0) {
            clearInterval(timer);
            navigate(targetPath);
        }

        return () => clearInterval(timer);
    }, [countdown, navigate, targetPath]);

    return countdown;
};

export default useCountdownRedirect;
