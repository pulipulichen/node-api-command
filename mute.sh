#!/bin/bash

# Check if qdbus is installed
if ! command -v qdbus &>/dev/null; then
    echo "qdbus is not installed. This script requires qdbus to work."
    exit 1
fi

# Function to stop all playing media in KDE Plasma
function stop_media {
    # Get a list of running media players
    players=$(qdbus | grep org.mpris.MediaPlayer2)

    # Iterate over each player and stop the playback
    for player in $players; do
        qdbus "$player" /org/mpris/MediaPlayer2 org.mpris.MediaPlayer2.Player.Stop
    done

    echo "All playing media has been stopped."
}

# Main logic
stop_media
