import { BLOB_POP_ROUTE } from 'src/app/routes/games/games.seo';
import { Game } from '../models/game';

export const GAMES_DATA: Game[] = [
    {
        pic: 'assets/images/game_blob.PNG',
        name: 'Blob Pop',
        base: BLOB_POP_ROUTE.base,
        introduction: `
<p>
    Come prove your might!
</p>`,
        description: `
<p>
    Score as many points as you can in this Regional Competitive Game.
</p>`,
        _picStyle: {
            transform: 'translate(18%, 0%) scale(1.4, 1.4)'
        }
    }
];
