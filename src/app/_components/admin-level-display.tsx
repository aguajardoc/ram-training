
type Props = {
    code: string,
    trackId: string,
    trackName: string | undefined,
}

function AdminLevelDisplay({ code, trackId, trackName } : Props) {
    return (
        <div className="card">
            <div>{code}</div>
            <div>[ {trackName} ]</div>
        </div>
    )
}

export default AdminLevelDisplay;