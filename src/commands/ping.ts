import { Command, CommandContext, Permission } from './command';

export default class PingCommand implements Command {
    precondition: Permission = '';
    name = 'ping';
    summary = 'Показ пинга бота.';
    cooldown = 3;
    module = 'General';
    
    execute = (ctx: CommandContext) => ctx.channel.send(`🏓 Pong! \`${ctx.bot.ws.ping}ms\``);
}
