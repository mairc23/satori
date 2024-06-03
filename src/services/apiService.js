/* eslint-disable no-unused-vars */

export const fetchLocalData = async () => {
    try {
        const response = await fetch('/src/assets/data/bands.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching local data', error);
        throw error;
    }
};
