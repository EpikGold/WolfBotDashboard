import { Command, CommandContext, Permission } from './command';
import config from '../../config.json';

export default class FlipCommand implements Command {
    precondition: Permission = '';
    name = 'vote';
    summary = 'Получение ссылок на голосование за бота.';
    cooldown = 1;
    module = 'General';
    
    execute = async(ctx: CommandContext) => {
        const details = config.bot.voteURLs.join(`\n`);
        return ctx.channel.send(details);
    }
}
