module.exports = (context) => {
    return (name, ttl = 86400) => {
        return context.Axios.post('/zones', {
            name: name,
            ttl: ttl
        }).then(r => {
            return r.data;
        });
    }
}
