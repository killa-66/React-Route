import {useState} from "react";

export const useFetching = (callback) => {
    const [isLoading, setIsLoadeing] = useState(false);
    const [error, setError] = useState('');

    const fetching = async (...args) => {
        try {
            setIsLoadeing(true)
            await callback(...args)
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoadeing(false)
        }
    }

    return [fetching, isLoading, error]
}