import { Command, CommandContext, Permission } from './command';

export default class UnlockCommand implements Command {
    precondition: Permission = 'MANAGE_CHANNELS';
    name = 'unlock';
    summary = 'Открытие возможности писать сообщения в канале.';
    cooldown = 5;
    module = 'Auto-mod';
    
    execute = async(ctx: CommandContext) => {        
        ctx.channel.overwritePermissions([
            {
                id: ctx.guild.roles.everyone.id,
                type: 'role',
                allow: ['SEND_MESSAGES'],
            },
        ], 'Канал открыт');

        return ctx.channel.send(`🔓 Открыт канал <#${ctx.channel.id}>`);
    };
}
