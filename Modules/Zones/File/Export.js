module.exports = (context) => {
    return (ZoneID) => {
        return context.Axios.get(`/zones/${ZoneID}/export`).then(r => {
            return r.data;
        });
    }
}
