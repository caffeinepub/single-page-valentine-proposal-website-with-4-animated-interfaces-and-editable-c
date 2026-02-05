import { valentineContent } from '../../../content/valentineContent';
import { Music, ExternalLink } from 'lucide-react';

export default function PlaylistSection() {
  const playlists = valentineContent.interface3.playlists;

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-8">
        Our Playlists
      </h2>
      
      <div className="grid gap-6">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="bg-gradient-to-br from-soft-pink/30 to-romantic-accent/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white rounded-xl shadow-md">
                <Music className="w-8 h-8 text-romantic-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-romantic-dark mb-2">
                  {playlist.name}
                </h3>
                <p className="text-romantic-dark/70 mb-4">
                  {playlist.description}
                </p>
                <a
                  href={playlist.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-romantic-accent hover:text-romantic-accent/80 font-medium transition-colors"
                >
                  Open Playlist
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
