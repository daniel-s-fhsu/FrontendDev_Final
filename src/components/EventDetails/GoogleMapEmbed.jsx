function GoogleMapEmbed ({ location }) {
    const encodedLocation = encodeURIComponent(location);
    const mapSrc = `https://www.google.com/maps?q=${encodedLocation}&output=embed`;

    return (
        <div className="w-xs h-3/10 sm:h-5/10 sm:w-lg">
            <iframe
                title="Google Map Embed"
                width="100%"
                height="100%"
                frameBorder="0"
                src={mapSrc}
                allowFullScreen>
            </iframe>
        </div>
    );
}

export default GoogleMapEmbed;