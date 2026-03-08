export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  itchUrl: string;
  category: 'Action' | 'Puzzle' | 'Adventure' | 'Sports' | 'Arcade';
  rating: number;
}

export const GAMES: Game[] = [
  {
    id: 'bodycam',
    title: 'BodyCam',
    description: 'An ultra-realistic FPS shooting game where you see everything from a body camera fixed on your fighter.',
    thumbnail: 'https://picsum.photos/seed/bodycam-fps-realistic/400/300',
    itchUrl: 'https://games.crazygames.com/en_US/bodycamera-shooter/index.html?v=1.352',
    category: 'Action',
    rating: 4.9
  },
  {
    id: 'escape-road',
    title: 'Escape Road',
    description: 'A high-speed driving game where you must navigate through traffic and obstacles to escape.',
    thumbnail: 'https://picsum.photos/seed/escape-road-voxel-car/400/300',
    itchUrl: 'https://azgames.io/game/escape-road/',
    category: 'Action',
    rating: 4.7
  },
  {
    id: 'slope',
    title: 'Slope',
    description: 'A fast-paced 3D running game where you control a ball rolling down a steep neon slope.',
    thumbnail: 'https://picsum.photos/seed/slope-neon-grid/400/300',
    itchUrl: 'https://kdata1.com/2020/05/slope/',
    category: 'Arcade',
    rating: 4.8
  },
  {
    id: 'fnae',
    title: "Five Nights at Epstein's",
    description: 'A horror-survival game where you must survive the night in a mysterious and creepy location.',
    thumbnail: 'https://picsum.photos/seed/horror-night-security/400/300',
    itchUrl: 'https://freedomgamingzone.github.io/five-nights-at-epsteins/',
    category: 'Arcade',
    rating: 4.6
  },
  {
    id: 'drive-mad',
    title: 'Drive Mad',
    description: 'A physics-based driving game where you must overcome various obstacles and reach the finish line.',
    thumbnail: 'https://picsum.photos/seed/drive-mad-truck/400/300',
    itchUrl: 'https://gamecollections.me/game/3kh0-assets-main/drive-mad/',
    category: 'Sports',
    rating: 4.5
  },
  {
    id: 'retro-bowl',
    title: 'Retro Bowl',
    description: 'The perfect game for the armchair quarterback. Manage your team and lead them to glory.',
    thumbnail: 'https://picsum.photos/seed/retro-football-pixel/400/300',
    itchUrl: 'https://game316009.konggames.com/gamez/0031/6009/live/index.html',
    category: 'Sports',
    rating: 4.9
  },
  {
    id: 'geometry-dash',
    title: 'Geometry Dash',
    description: 'Jump and fly your way through danger in this rhythm-based action platformer!',
    thumbnail: 'https://picsum.photos/seed/geometry-dash-cube/400/300',
    itchUrl: 'https://ozgames.io/geometry-dash.embed',
    category: 'Arcade',
    rating: 4.8
  },
  {
    id: 'minecraft',
    title: 'Minecraft',
    description: 'Explore infinite worlds and build everything from the simplest of homes to the grandest of castles.',
    thumbnail: 'https://picsum.photos/seed/minecraft-blocks/400/300',
    itchUrl: 'https://eaglercraft.ru/mc/1.8.8/',
    category: 'Adventure',
    rating: 5.0
  },
  {
    id: 'subway-surfers',
    title: 'Subway Surfers',
    description: 'Dash as fast as you can! Dodge the oncoming trains and help Jake, Tricky & Fresh escape from the grumpy Inspector.',
    thumbnail: 'https://picsum.photos/seed/subway-runner-city/400/300',
    itchUrl: 'https://marketjs.cdn.msnfun.com/9n3wz0fzx1hr/v29/index.html?msstart_sdk_init=eyJwYXJlbnRPcmlnaW4iOiJodHRwczovL3d3dy5tc24uY29tIiwiY2xpZW50SWQiOiIxOUFCRDZBMUY3ODc2QTg5MUJBOEMwMTNGNkQxNkI1OCIsImxvY2FsZSI6ImVuLXVzIiwiZW50cnlQb2ludElkIjoiIiwic3dpdGNoR2FtZVBheWxvYWQiOnsic3dpdGNoZWRUbyI6IjluM3d6MGZ6eDFociIsInZhbHVlIjp7fX19',
    category: 'Arcade',
    rating: 4.8
  },
  {
    id: 'polytrack',
    title: 'PolyTrack',
    description: 'A fast-paced, low-poly driving game featuring thrilling loops, jumps, and high-speed action where every millisecond counts.',
    thumbnail: 'https://picsum.photos/seed/polytrack-race-car/400/300',
    itchUrl: 'https://games.crazygames.com/en_US/polytrack/index.html?isNewUser=false&v=1.352',
    category: 'Action',
    rating: 4.7
  }
];
