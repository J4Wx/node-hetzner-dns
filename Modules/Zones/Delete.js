module.exports = (context) => {
    return (ZoneID) => {
        return context.Axios.delete(`/zones/${ZoneID}`).then(r => {
            return r.data
        });
    }
}
