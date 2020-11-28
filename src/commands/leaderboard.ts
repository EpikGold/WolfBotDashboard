import { Command, CommandContext, Permission } from './command';
import config from '../../config.json';

export default class LeaderboardCommand implements Command {
    precondition: Permission = '';
    name = 'leaderboard';
    summary = `Получение ссылки на Таблицу Лидеров.`;
    cooldown = 3;
    module = 'Leveling';
    
    execute = async(ctx: CommandContext) => {
        ctx.channel.send(`${config.dashboardURL}/leaderboard/${ctx.guild.id}`);
    }
}
