export const TYPES = {
    AUTH: 'AUTH'
}

export const login = (data) => {
    try {
        dispatchEvent({type: 'NOTIFY', payload: {loading: true}})
    } catch (err) {
        
    }
}