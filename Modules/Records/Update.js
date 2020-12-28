module.exports = (context) => {
    return (RecordID, ZoneID, name, type, value, ttl) => {
        const payload = {
            zone_id: ZoneID,
            name: name,
            type: type.toUpperCase(),
            value: value,
        }

        if (ttl) {
            payload.ttl = ttl;
        }

        return context.Axios.put(`/records/${RecordID}`, payload).then(r => {
            return r.data;
        });
    }
}
