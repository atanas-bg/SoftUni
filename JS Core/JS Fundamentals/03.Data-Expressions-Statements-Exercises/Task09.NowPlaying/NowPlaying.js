/**
 * Created by User on 30.9.2016 г..
 */
// input : ['Number One', 'Nelly', '4:09']
// output : Now Playing: Nelly – Number One [4:09]
// Now Playing: {artist name} - {track name} [{duration}]

function printTrackInfo([trackName, artistName, trackDuration]) {
    console.log(`Now Playing: ${artistName} - ${trackName} [${trackDuration}]`);
}

printTrackInfo(['Number One', 'Nelly', '4:09']);