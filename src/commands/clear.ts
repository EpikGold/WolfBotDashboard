import { Command, CommandContext, Permission } from './command';

export default class ClearCommand implements Command {
    precondition: Permission = 'MANAGE_MESSAGES';
    name = 'clear';
    usage = 'clear [максимум = 100]';
    summary = 'Удаляет сообщения которым 2 недели.';
    cooldown = 5;
    module = 'Auto-mod';
    
    execute = async(ctx: CommandContext, count = '100') => {
        const msgs = await ctx.channel.bulkDelete(+count);
        const reminder = await ctx.channel.send(`Успешно удалено \`${msgs.size}\` сообщений.`);
        setTimeout(() => reminder.delete(), 3 * 1000);
    }
}
