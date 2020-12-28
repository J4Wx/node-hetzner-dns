module.exports = (context) => {
    return (ZoneID, name, ttl = 86400) => {
        return context.Axios.put(`/zones/${ZoneID}`, {
            name: name,
            ttl: ttl
        }).then(r => {
            return r.data;
        });
    }
}
