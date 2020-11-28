import { Command, CommandContext, Permission } from './command';

export default class LockCommand implements Command {
    precondition: Permission = 'MANAGE_CHANNELS';
    name = 'lock';
    summary = 'Закрытие канала для ограничения написания сообщений.';
    cooldown = 5;
    module = 'Auto-mod';
    
    execute = async(ctx: CommandContext) => {
        ctx.channel.overwritePermissions([
            {
                id: ctx.guild.roles.everyone.id,
                type: 'role',
                deny: ['SEND_MESSAGES'],
            },
        ], 'Канал закрыт.');

        return ctx.channel.send(`🔒 Закрыт канал <#${ctx.channel.id}>`);
    };
}
