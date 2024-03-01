export function getCurrDateTime() {

    const currentDateTime = new Date().toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    return currentDateTime;
} 