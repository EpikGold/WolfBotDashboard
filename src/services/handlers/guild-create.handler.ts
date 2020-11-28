import config from '../../../config.json';
import EventHandler from './event-handler';
import { Guild, TextChannel, ClientEvents } from 'discord.js';
import Deps from '../../utils/deps';
import Guilds from '../../data/guilds';

export default class GuildCreateHandler implements EventHandler {
    on: keyof ClientEvents = 'guildCreate';

    constructor(private guilds = Deps.get<Guilds>(Guilds)) {}

    async invoke(guild: Guild): Promise<any> {
        await this.guilds.get(guild);
    }    
}