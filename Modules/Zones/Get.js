module.exports = (context) => {
    return (ZoneID) => {
        return context.Axios.get(`/zones/${ZoneID}`).then(r => {
            return r.data;
        });
    }
}
