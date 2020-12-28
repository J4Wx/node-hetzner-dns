module.exports = (context) => {
    return (ZoneID, name, type, value, ttl) => {
        const payload = {
            zone_id: ZoneID,
            name: name,
            type: type.toUpperCase(),
            value: value,
        }

        if (ttl) {
            payload.ttl = ttl;
        }

        return context.Axios.post('/records', payload).then(r => {
            return r.data;
        });
    }
}
